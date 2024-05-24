import { pairs } from "./assoc";
import { pick } from "./pick";
import { Question, generateForward, generateBackward, generateGoodPair, generateBadPair } from "./questions";

const prefixes = pairs({
    "Portugal": ["CT", "CS"],
    "Andorra": ["C3"],
    "Germany": ["DL", "DA...DO"],
    "Spain": ["EA", "EB", "EC", "ED"],
    "Ireland": ["EI"],
    "Moldova": ["ER"],
    "Estonia": ["ES"],
    "Belarus": ["EU"],
    "France": ["F", "FA...FE"],
    "United Kingdom": ["G", "GB...GM", "M"],
    "Hungary": ["HA", "HG"],
    "Switzerland": ["HB"],
    "Liechtenstein": ["HB0"],
    "Vatican": ["HV"],
    "Italy": ["I", "IA...IZ"],
    "Norway": ["LA", "LB"],
    "Luxembourg": ["LX"],
    "Lithuania": ["LY"],
    "Bulgaria": ["LZ"],
    "Austria": ["OE"],
    "Finland": ["OH", "OF...OI"],
    "Czech Republic": ["OK", "OL"],
    "Slovakia": ["OM"],
    "Belgium": ["ON"],
    "Faroe Islands": ["OY"],
    "Denmark": ["OZ"],
    "Netherlands": ["PA", "PB", "PD", "PE", "PI"],
    "Russia": ["RA", "UA..."],
    "Kaliningrad": ["RA2"],
    "Sweden": ["SM", "SK", "SL"],
    "Poland": ["SP", "SO"],
    "Greece": ["SV"],
    "Slovenia": ["S5"],
    "Corsica": ["TK"],
    "San Marino": ["T7"],
    "Bosnia and Herzegovina": ["T9"],
    "Turkey": ["TA", "TB", "TC"],
    "Ukraine": ["UR"],
    "Latvia": ["YL"],
    "Romania": ["YO"],
    "Serbia and Montenegro": ["YU", "YT"],
    "Albania": ["ZA"],
    "North Macedonia": ["Z3"],
    "Gibraltar": ["ZB"],
    "Monaco": ["3A"],
    "Croatia": ["9A"],
    "Malta": ["9H"]
});


export function generateQuestion(): Question {
    const topic = "Callsign prefixes";
    const source = "https://tankonyv.ham.hu/A_vizsga-DJ4UF/?cid=a11";
    const generator = pick([
        () => generateForward(topic, source, st => `What is the prefix of ${st}?`, prefixes),
        () => generateBackward(topic, source, st => `What country corresponds to the prefix ${st}?`, prefixes),
        () => generateGoodPair(topic, source, prefixes),
        () => generateBadPair(topic, source, prefixes),
    ]);
    return generator();
}