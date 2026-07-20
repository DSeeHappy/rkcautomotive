import urllib.request, xml.etree.ElementTree as ET, concurrent.futures, urllib.parse

BASE = "https://www.fueleconomy.gov/ws/rest"
def get(url):
    req = urllib.request.Request(url, headers={"User-Agent":"Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()

queries = [
 (2016,"Silverado C15 2WD"),(2016,"Silverado K15 4WD"),
 (2018,"Silverado C15 2WD"),(2018,"Silverado K15 4WD"),
 (2016,"Silverado 15 Hybrid 2WD"),
 (2016,"Tahoe C1500 2WD"),(2016,"Tahoe K1500 4WD"),
 (2019,"Tahoe C1500 2WD"),(2019,"Tahoe K1500 4WD"),
 (2016,"Malibu Hybrid"),(2018,"Malibu Hybrid"),
 (2017,"Equinox FWD"),
 (2017,"Traverse FWD"),(2017,"Traverse AWD"),
 (2015,"Tahoe C1500 2WD"),(2015,"Tahoe K1500 4WD"),
 (2015,"Silverado C15 2WD"),(2015,"Silverado K15 4WD"),
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
        return dict(trany=t("trany"), drive=t("drive"), displ=t("displ"), cyl=t("cylinders"),
                    fuel=t("fuelType"), city=t("city08"), hwy=t("highway08"), comb=t("comb08"))
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
