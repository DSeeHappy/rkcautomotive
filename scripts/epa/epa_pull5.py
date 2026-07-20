import urllib.request, xml.etree.ElementTree as ET, concurrent.futures, urllib.parse

BASE = "https://www.fueleconomy.gov/ws/rest"
def get(url):
    req = urllib.request.Request(url, headers={"User-Agent":"Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()

# discover model names first
for y in (2015, 2017, 2023):
    root = ET.fromstring(get(f"{BASE}/vehicle/menu/model?year={y}&make=Chevrolet"))
    names = [m.findtext("text") for m in root.findall("menuItem")]
    hits = [n for n in names if "Colorado" in n or "Suburban" in n]
    print(y, hits)

queries = [
 (2015,"Colorado 2WD"),(2015,"Colorado 4WD"),
 (2017,"Colorado 2WD"),(2017,"Colorado 4WD"),
 (2019,"Colorado 2WD"),(2019,"Colorado 4WD"),
 (2022,"Colorado 2WD"),(2022,"Colorado 4WD"),
 (2023,"Colorado 2WD"),(2023,"Colorado 4WD"),
 (2025,"Colorado 2WD"),(2025,"Colorado 4WD"),
 (2016,"Suburban C1500 2WD"),(2016,"Suburban K1500 4WD"),
 (2019,"Suburban C1500 2WD"),(2019,"Suburban K1500 4WD"),
 (2021,"Suburban 2WD"),(2021,"Suburban 4WD"),
 (2024,"Suburban 2WD"),(2024,"Suburban 4WD"),
 (2026,"Suburban 2WD"),(2026,"Suburban 4WD"),
]
ids = {}
for y, mo in queries:
    url = f"{BASE}/vehicle/menu/options?year={y}&make=Chevrolet&model={urllib.parse.quote(mo)}"
    try:
        root = ET.fromstring(get(url))
        opts = [(m.findtext("text"), m.findtext("value")) for m in root.findall("menuItem")]
        if opts: ids[(y,mo)] = opts
        else: print(f"NO MATCH: {y} {mo}")
    except Exception as e:
        print(f"ERR {y} {mo}: {e}")

def fetch(vid):
    try:
        root = ET.fromstring(get(f"{BASE}/vehicle/{vid}"))
        t = lambda tag: root.findtext(tag) or ""
        return dict(trany=t("trany"), displ=t("displ"), cyl=t("cylinders"), fuel=t("fuelType"),
                    city=t("city08"), hwy=t("highway08"), comb=t("comb08"))
    except Exception as e:
        return dict(trany=f"ERR {e}")

allids = sorted({v for opts in ids.values() for _,v in opts}, key=int)
results = {}
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as ex:
    for vid, res in zip(allids, ex.map(fetch, allids)):
        results[vid] = res

for (y,mo), opts in ids.items():
    print(f"\n=== {y} {mo} ===")
    for text, vid in opts:
        r = results.get(vid, {})
        print(f"  {text} | {r.get('displ')}L {r.get('cyl')}cyl {r.get('fuel')} | {r.get('trany')} | {r.get('city')}/{r.get('hwy')}/{r.get('comb')}")
