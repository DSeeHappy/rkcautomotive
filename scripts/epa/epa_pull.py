import urllib.request, xml.etree.ElementTree as ET, concurrent.futures, urllib.parse

BASE = "https://www.fueleconomy.gov/ws/rest"
def get(url):
    req = urllib.request.Request(url, headers={"User-Agent":"Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()

queries = [
 (2016,"Chevrolet","Silverado 15 2WD"),(2016,"Chevrolet","Silverado 15 4WD"),
 (2019,"Chevrolet","Silverado 15 2WD"),(2019,"Chevrolet","Silverado 15 4WD"),
 (2021,"Chevrolet","Silverado 15 2WD"),(2021,"Chevrolet","Silverado 15 4WD"),
 (2024,"Chevrolet","Silverado 2WD"),(2024,"Chevrolet","Silverado 4WD"),
 (2016,"Chevrolet","Equinox FWD"),(2016,"Chevrolet","Equinox AWD"),
 (2018,"Chevrolet","Equinox FWD"),(2018,"Chevrolet","Equinox AWD"),
 (2020,"Chevrolet","Equinox FWD"),(2022,"Chevrolet","Equinox FWD"),(2022,"Chevrolet","Equinox AWD"),
 (2025,"Chevrolet","Equinox FWD"),(2025,"Chevrolet","Equinox AWD"),
 (2015,"Chevrolet","Malibu"),(2016,"Chevrolet","Malibu"),(2019,"Chevrolet","Malibu"),(2023,"Chevrolet","Malibu"),
 (2016,"Chevrolet","Traverse FWD"),(2016,"Chevrolet","Traverse AWD"),
 (2019,"Chevrolet","Traverse FWD"),(2019,"Chevrolet","Traverse AWD"),
 (2022,"Chevrolet","Traverse FWD"),(2024,"Chevrolet","Traverse FWD"),(2024,"Chevrolet","Traverse AWD"),
 (2016,"Chevrolet","Tahoe 1500 2WD"),(2016,"Chevrolet","Tahoe 1500 4WD"),
 (2019,"Chevrolet","Tahoe 1500 2WD"),(2019,"Chevrolet","Tahoe 1500 4WD"),
 (2021,"Chevrolet","Tahoe 2WD"),(2021,"Chevrolet","Tahoe 4WD"),
 (2024,"Chevrolet","Tahoe 2WD"),(2024,"Chevrolet","Tahoe 4WD"),
 (2026,"Chevrolet","Tahoe 2WD"),(2026,"Chevrolet","Tahoe 4WD"),
]

ids = {}
for y, mk, mo in queries:
    url = f"{BASE}/vehicle/menu/options?year={y}&make={urllib.parse.quote(mk)}&model={urllib.parse.quote(mo)}"
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
        return dict(model=t("model"), eng=t("engDscr"), displ=t("displ"), cyl=t("cylinders"),
                    fuel=t("fuelType"), trany=t("trany"), drive=t("drive"),
                    city=t("city08"), hwy=t("highway08"), comb=t("comb08"))
    except Exception as e:
        return dict(model=f"ERR {vid}: {e}")

allids = sorted({v for opts in ids.values() for _,v in opts}, key=int)
results = {}
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as ex:
    for vid, res in zip(allids, ex.map(fetch, allids)):
        results[vid] = res

for (y,mo), opts in ids.items():
    print(f"\n=== {y} {mo} ===")
    for text, vid in opts:
        r = results.get(vid, {})
        print(f"  {r.get('eng','?')} | {r.get('trany','?')} | {r.get('drive','?')} | {r.get('city')}/{r.get('hwy')}/{r.get('comb')} mpg")
