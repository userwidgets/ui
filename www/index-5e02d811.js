var CallingCode;
(function (CallingCode) {
    function is(value) {
        return (typeof value == "string" &&
            value.length <= 5 &&
            (value == "+93" ||
                value == "+358" ||
                value == "+355" ||
                value == "+213" ||
                value == "+1684" ||
                value == "+376" ||
                value == "+244" ||
                value == "+1264" ||
                value == "+672" ||
                value == "+1268" ||
                value == "+54" ||
                value == "+374" ||
                value == "+297" ||
                value == "+61" ||
                value == "+43" ||
                value == "+994" ||
                value == "+1242" ||
                value == "+973" ||
                value == "+880" ||
                value == "+1246" ||
                value == "+375" ||
                value == "+32" ||
                value == "+501" ||
                value == "+229" ||
                value == "+1441" ||
                value == "+975" ||
                value == "+591" ||
                value == "+387" ||
                value == "+267" ||
                value == "+55" ||
                value == "+246" ||
                value == "+673" ||
                value == "+359" ||
                value == "+226" ||
                value == "+257" ||
                value == "+855" ||
                value == "+237" ||
                value == "+1" ||
                value == "+238" ||
                value == "+345" ||
                value == "+236" ||
                value == "+235" ||
                value == "+56" ||
                value == "+86" ||
                value == "+61" ||
                value == "+61" ||
                value == "+57" ||
                value == "+269" ||
                value == "+242" ||
                value == "+243" ||
                value == "+682" ||
                value == "+506" ||
                value == "+225" ||
                value == "+385" ||
                value == "+53" ||
                value == "+357" ||
                value == "+420" ||
                value == "+45" ||
                value == "+253" ||
                value == "+1767" ||
                value == "+1849" ||
                value == "+593" ||
                value == "+20" ||
                value == "+503" ||
                value == "+240" ||
                value == "+291" ||
                value == "+372" ||
                value == "+251" ||
                value == "+500" ||
                value == "+298" ||
                value == "+679" ||
                value == "+358" ||
                value == "+33" ||
                value == "+594" ||
                value == "+689" ||
                value == "+241" ||
                value == "+220" ||
                value == "+995" ||
                value == "+49" ||
                value == "+233" ||
                value == "+350" ||
                value == "+30" ||
                value == "+299" ||
                value == "+1473" ||
                value == "+590" ||
                value == "+1671" ||
                value == "+502" ||
                value == "+44" ||
                value == "+224" ||
                value == "+245" ||
                value == "+592" ||
                value == "+509" ||
                value == "+379" ||
                value == "+504" ||
                value == "+852" ||
                value == "+36" ||
                value == "+354" ||
                value == "+91" ||
                value == "+62" ||
                value == "+98" ||
                value == "+964" ||
                value == "+353" ||
                value == "+44" ||
                value == "+972" ||
                value == "+39" ||
                value == "+1876" ||
                value == "+81" ||
                value == "+44" ||
                value == "+962" ||
                value == "+77" ||
                value == "+254" ||
                value == "+686" ||
                value == "+850" ||
                value == "+82" ||
                value == "+965" ||
                value == "+996" ||
                value == "+856" ||
                value == "+371" ||
                value == "+961" ||
                value == "+266" ||
                value == "+231" ||
                value == "+218" ||
                value == "+423" ||
                value == "+370" ||
                value == "+352" ||
                value == "+853" ||
                value == "+389" ||
                value == "+261" ||
                value == "+265" ||
                value == "+60" ||
                value == "+960" ||
                value == "+223" ||
                value == "+356" ||
                value == "+692" ||
                value == "+596" ||
                value == "+222" ||
                value == "+230" ||
                value == "+262" ||
                value == "+52" ||
                value == "+691" ||
                value == "+373" ||
                value == "+377" ||
                value == "+976" ||
                value == "+382" ||
                value == "+1664" ||
                value == "+212" ||
                value == "+258" ||
                value == "+95" ||
                value == "+264" ||
                value == "+674" ||
                value == "+977" ||
                value == "+31" ||
                value == "+599" ||
                value == "+687" ||
                value == "+64" ||
                value == "+505" ||
                value == "+227" ||
                value == "+234" ||
                value == "+683" ||
                value == "+672" ||
                value == "+1670" ||
                value == "+47" ||
                value == "+968" ||
                value == "+92" ||
                value == "+680" ||
                value == "+970" ||
                value == "+507" ||
                value == "+675" ||
                value == "+595" ||
                value == "+51" ||
                value == "+63" ||
                value == "+872" ||
                value == "+48" ||
                value == "+351" ||
                value == "+1939" ||
                value == "+974" ||
                value == "+40" ||
                value == "+7" ||
                value == "+250" ||
                value == "+262" ||
                value == "+590" ||
                value == "+290" ||
                value == "+1869" ||
                value == "+1758" ||
                value == "+590" ||
                value == "+508" ||
                value == "+1784" ||
                value == "+685" ||
                value == "+378" ||
                value == "+239" ||
                value == "+966" ||
                value == "+221" ||
                value == "+381" ||
                value == "+248" ||
                value == "+232" ||
                value == "+65" ||
                value == "+421" ||
                value == "+386" ||
                value == "+677" ||
                value == "+252" ||
                value == "+27" ||
                value == "+211" ||
                value == "+500" ||
                value == "+34" ||
                value == "+94" ||
                value == "+249" ||
                value == "+597" ||
                value == "+47" ||
                value == "+268" ||
                value == "+46" ||
                value == "+41" ||
                value == "+963" ||
                value == "+886" ||
                value == "+992" ||
                value == "+255" ||
                value == "+66" ||
                value == "+670" ||
                value == "+228" ||
                value == "+690" ||
                value == "+676" ||
                value == "+1868" ||
                value == "+216" ||
                value == "+90" ||
                value == "+993" ||
                value == "+1649" ||
                value == "+688" ||
                value == "+256" ||
                value == "+380" ||
                value == "+971" ||
                value == "+44" ||
                value == "+1" ||
                value == "+598" ||
                value == "+998" ||
                value == "+678" ||
                value == "+58" ||
                value == "+84" ||
                value == "+1284" ||
                value == "+1340" ||
                value == "+681" ||
                value == "+967" ||
                value == "+260" ||
                value == "+263"));
    }
    CallingCode.is = is;
    function from(country) {
        return alpha2toCallingCode[country];
    }
    CallingCode.from = from;
    function to(callingCode) {
        return callingCodetoAlpha2[callingCode];
    }
    CallingCode.to = to;
    function seperate(phoneNumber) {
        let result = [undefined, phoneNumber];
        if (phoneNumber.substring(0, 1) == "+") {
            for (let end = 5; end > 1; end--) {
                const callingCode = phoneNumber.substring(0, end);
                if (CallingCode.is(callingCode)) {
                    result = [callingCode, phoneNumber.substring(end)];
                    break;
                }
            }
        }
        return result;
    }
    CallingCode.seperate = seperate;
})(CallingCode || (CallingCode = {}));
const callingCodetoAlpha2 = {
    "+93": "AF",
    "+358": ["FI", "AX"],
    "+355": "AL",
    "+213": "DZ",
    "+1684": "AS",
    "+376": "AD",
    "+244": "AO",
    "+1264": "AI",
    "+672": ["NF", "AQ"],
    "+1268": "AG",
    "+54": "AR",
    "+374": "AM",
    "+297": "AW",
    "+61": ["AU", "CX", "CC"],
    "+43": "AT",
    "+994": "AZ",
    "+1242": "BS",
    "+973": "BH",
    "+880": "BD",
    "+1246": "BB",
    "+375": "BY",
    "+32": "BE",
    "+501": "BZ",
    "+229": "BJ",
    "+1441": "BM",
    "+975": "BT",
    "+591": "BO",
    "+599": "BQ",
    "+387": "BA",
    "+267": "BW",
    "+55": "BR",
    "+246": "IO",
    "+673": "BN",
    "+359": "BG",
    "+226": "BF",
    "+257": "BI",
    "+855": "KH",
    "+237": "CM",
    "+1": ["US", "CA"],
    "+238": "CV",
    "+345": "KY",
    "+236": "CF",
    "+235": "TD",
    "+56": "CL",
    "+86": "CN",
    "+57": "CO",
    "+269": "KM",
    "+242": "CG",
    "+243": "CD",
    "+682": "CK",
    "+506": "CR",
    "+225": "CI",
    "+385": "HR",
    "+53": "CU",
    "+357": "CY",
    "+420": "CZ",
    "+45": "DK",
    "+253": "DJ",
    "+1767": "DM",
    "+1849": "DO",
    "+593": "EC",
    "+20": "EG",
    "+503": "SV",
    "+240": "GQ",
    "+291": "ER",
    "+372": "EE",
    "+251": "ET",
    "+500": ["FK", "GS"],
    "+298": "FO",
    "+679": "FJ",
    "+33": "FR",
    "+594": "GF",
    "+689": "PF",
    "+241": "GA",
    "+220": "GM",
    "+995": "GE",
    "+49": "DE",
    "+233": "GH",
    "+350": "GI",
    "+30": "GR",
    "+299": "GL",
    "+1473": "GD",
    "+590": ["GP", "BL", "MF"],
    "+1671": "GU",
    "+502": "GT",
    "+44": ["GB", "JE", "IM", "GG"],
    "+224": "GN",
    "+245": "GW",
    "+592": "GY",
    "+595": "PY",
    "+509": "HT",
    "+379": "VA",
    "+504": "HN",
    "+852": "HK",
    "+36": "HU",
    "+354": "IS",
    "+91": "IN",
    "+62": "ID",
    "+98": "IR",
    "+964": "IQ",
    "+353": "IE",
    "+972": "IL",
    "+39": "IT",
    "+1876": "JM",
    "+81": "JP",
    "+962": "JO",
    "+77": "KZ",
    "+254": "KE",
    "+686": "KI",
    "+850": "KP",
    "+82": "KR",
    "+965": "KW",
    "+996": "KG",
    "+856": "LA",
    "+371": "LV",
    "+961": "LB",
    "+266": "LS",
    "+231": "LR",
    "+218": "LY",
    "+423": "LI",
    "+370": "LT",
    "+352": "LU",
    "+853": "MO",
    "+389": "MK",
    "+261": "MG",
    "+265": "MW",
    "+60": "MY",
    "+960": "MV",
    "+223": "ML",
    "+356": "MT",
    "+692": "MH",
    "+596": "MQ",
    "+222": "MR",
    "+230": "MU",
    "+262": ["RE", "YT"],
    "+52": "MX",
    "+691": "FM",
    "+373": "MD",
    "+377": "MC",
    "+976": "MN",
    "+382": "ME",
    "+1664": "MS",
    "+212": "MA",
    "+258": "MZ",
    "+95": "MM",
    "+264": "NA",
    "+674": "NR",
    "+977": "NP",
    "+31": "NL",
    "+687": "NC",
    "+64": "NZ",
    "+505": "NI",
    "+227": "NE",
    "+234": "NG",
    "+683": "NU",
    "+1670": "MP",
    "+47": ["NO", "SJ"],
    "+968": "OM",
    "+92": "PK",
    "+680": "PW",
    "+970": "PS",
    "+507": "PA",
    "+675": "PG",
    "+51": "PE",
    "+63": "PH",
    "+872": "PN",
    "+48": "PL",
    "+351": "PT",
    "+1939": "PR",
    "+974": "QA",
    "+40": "RO",
    "+7": "RU",
    "+250": "RW",
    "+290": "SH",
    "+1869": "KN",
    "+1758": "LC",
    "+508": "PM",
    "+1784": "VC",
    "+685": "WS",
    "+378": "SM",
    "+239": "ST",
    "+966": "SA",
    "+221": "SN",
    "+381": "RS",
    "+248": "SC",
    "+232": "SL",
    "+65": "SG",
    "+421": "SK",
    "+386": "SI",
    "+677": "SB",
    "+252": "SO",
    "+27": "ZA",
    "+211": "SS",
    "+34": "ES",
    "+94": "LK",
    "+249": "SD",
    "+597": "SR",
    "+268": "SZ",
    "+46": "SE",
    "+41": "CH",
    "+963": "SY",
    "+886": "TW",
    "+992": "TJ",
    "+255": "TZ",
    "+66": "TH",
    "+670": "TL",
    "+228": "TG",
    "+690": "TK",
    "+676": "TO",
    "+1868": "TT",
    "+216": "TN",
    "+90": "TR",
    "+993": "TM",
    "+1649": "TC",
    "+688": "TV",
    "+256": "UG",
    "+380": "UA",
    "+971": "AE",
    "+598": "UY",
    "+998": "UZ",
    "+678": "VU",
    "+58": "VE",
    "+84": "VN",
    "+1284": "VG",
    "+1340": "VI",
    "+681": "WF",
    "+967": "YE",
    "+260": "ZM",
    "+263": "ZW",
};
const alpha2toCallingCode = {
    AF: "+93",
    AX: "+358",
    AL: "+355",
    DZ: "+213",
    AS: "+1684",
    AD: "+376",
    AO: "+244",
    AI: "+1264",
    AQ: "+672",
    AG: "+1268",
    AR: "+54",
    AM: "+374",
    AW: "+297",
    AU: "+61",
    AT: "+43",
    AZ: "+994",
    BS: "+1242",
    BH: "+973",
    BD: "+880",
    BB: "+1246",
    BY: "+375",
    BE: "+32",
    BZ: "+501",
    BJ: "+229",
    BM: "+1441",
    BT: "+975",
    BO: "+591",
    BQ: "+599",
    BA: "+387",
    BW: "+267",
    BR: "+55",
    IO: "+246",
    BN: "+673",
    BG: "+359",
    BF: "+226",
    BI: "+257",
    KH: "+855",
    CM: "+237",
    CA: "+1",
    CV: "+238",
    KY: "+345",
    CF: "+236",
    TD: "+235",
    CL: "+56",
    CN: "+86",
    CX: "+61",
    CC: "+61",
    CO: "+57",
    KM: "+269",
    CG: "+242",
    CD: "+243",
    CK: "+682",
    CR: "+506",
    CI: "+225",
    HR: "+385",
    CU: "+53",
    CY: "+357",
    CZ: "+420",
    DK: "+45",
    DJ: "+253",
    DM: "+1767",
    DO: "+1849",
    EC: "+593",
    EG: "+20",
    SV: "+503",
    GQ: "+240",
    ER: "+291",
    EE: "+372",
    ET: "+251",
    FK: "+500",
    FO: "+298",
    FJ: "+679",
    FI: "+358",
    FR: "+33",
    GF: "+594",
    PF: "+689",
    GA: "+241",
    GM: "+220",
    GE: "+995",
    DE: "+49",
    GH: "+233",
    GI: "+350",
    GR: "+30",
    GL: "+299",
    GD: "+1473",
    GP: "+590",
    GU: "+1671",
    GT: "+502",
    GG: "+44",
    GN: "+224",
    GW: "+245",
    GY: "+592",
    HT: "+509",
    VA: "+379",
    HN: "+504",
    HK: "+852",
    HU: "+36",
    IS: "+354",
    IN: "+91",
    ID: "+62",
    IR: "+98",
    IQ: "+964",
    IE: "+353",
    IM: "+44",
    IL: "+972",
    IT: "+39",
    JM: "+1876",
    JP: "+81",
    JE: "+44",
    JO: "+962",
    KZ: "+77",
    KE: "+254",
    KI: "+686",
    KP: "+850",
    KR: "+82",
    KW: "+965",
    KG: "+996",
    LA: "+856",
    LV: "+371",
    LB: "+961",
    LS: "+266",
    LR: "+231",
    LY: "+218",
    LI: "+423",
    LT: "+370",
    LU: "+352",
    MO: "+853",
    MK: "+389",
    MG: "+261",
    MW: "+265",
    MY: "+60",
    MV: "+960",
    ML: "+223",
    MT: "+356",
    MH: "+692",
    MQ: "+596",
    MR: "+222",
    MU: "+230",
    YT: "+262",
    MX: "+52",
    FM: "+691",
    MD: "+373",
    MC: "+377",
    MN: "+976",
    ME: "+382",
    MS: "+1664",
    MA: "+212",
    MZ: "+258",
    MM: "+95",
    NA: "+264",
    NR: "+674",
    NP: "+977",
    NL: "+31",
    NC: "+687",
    NZ: "+64",
    NI: "+505",
    NE: "+227",
    NG: "+234",
    NU: "+683",
    NF: "+672",
    MP: "+1670",
    NO: "+47",
    OM: "+968",
    PK: "+92",
    PW: "+680",
    PS: "+970",
    PA: "+507",
    PG: "+675",
    PY: "+595",
    PE: "+51",
    PH: "+63",
    PN: "+872",
    PL: "+48",
    PT: "+351",
    PR: "+1939",
    QA: "+974",
    RO: "+40",
    RU: "+7",
    RW: "+250",
    RE: "+262",
    BL: "+590",
    SH: "+290",
    KN: "+1869",
    LC: "+1758",
    MF: "+590",
    PM: "+508",
    VC: "+1784",
    WS: "+685",
    SM: "+378",
    ST: "+239",
    SA: "+966",
    SN: "+221",
    RS: "+381",
    SC: "+248",
    SL: "+232",
    SG: "+65",
    SK: "+421",
    SI: "+386",
    SB: "+677",
    SO: "+252",
    ZA: "+27",
    SS: "+211",
    GS: "+500",
    ES: "+34",
    LK: "+94",
    SD: "+249",
    SR: "+597",
    SJ: "+47",
    SZ: "+268",
    SE: "+46",
    CH: "+41",
    SY: "+963",
    TW: "+886",
    TJ: "+992",
    TZ: "+255",
    TH: "+66",
    TL: "+670",
    TG: "+228",
    TK: "+690",
    TO: "+676",
    TT: "+1868",
    TN: "+216",
    TR: "+90",
    TM: "+993",
    TC: "+1649",
    TV: "+688",
    UG: "+256",
    UA: "+380",
    AE: "+971",
    GB: "+44",
    US: "+1",
    UY: "+598",
    UZ: "+998",
    VU: "+678",
    VE: "+58",
    VN: "+84",
    VG: "+1284",
    VI: "+1340",
    WF: "+681",
    YE: "+967",
    ZM: "+260",
    ZW: "+263",
};

var Alpha2;
(function (Alpha2) {
    Alpha2.types = [
        "AF",
        "AX",
        "AL",
        "DZ",
        "AS",
        "AD",
        "AO",
        "AI",
        "AQ",
        "AG",
        "AR",
        "AM",
        "AW",
        "AU",
        "AT",
        "AZ",
        "BS",
        "BH",
        "BD",
        "BB",
        "BY",
        "BE",
        "BZ",
        "BJ",
        "BM",
        "BT",
        "BO",
        "BQ",
        "BA",
        "BW",
        "BV",
        "BR",
        "IO",
        "BN",
        "BG",
        "BF",
        "BI",
        "CV",
        "KH",
        "CM",
        "CA",
        "KY",
        "CF",
        "TD",
        "CL",
        "CN",
        "CX",
        "CC",
        "CO",
        "KM",
        "CG",
        "CD",
        "CK",
        "CR",
        "CI",
        "HR",
        "CU",
        "CW",
        "CY",
        "CZ",
        "DK",
        "DJ",
        "DM",
        "DO",
        "EC",
        "EG",
        "SV",
        "GQ",
        "ER",
        "EE",
        "SZ",
        "ET",
        "FK",
        "FO",
        "FJ",
        "FI",
        "FR",
        "GF",
        "PF",
        "TF",
        "GA",
        "GM",
        "GE",
        "DE",
        "GH",
        "GI",
        "GR",
        "GL",
        "GD",
        "GP",
        "GU",
        "GT",
        "GG",
        "GN",
        "GW",
        "GY",
        "HT",
        "HM",
        "VA",
        "HN",
        "HK",
        "HU",
        "IS",
        "IN",
        "ID",
        "IR",
        "IQ",
        "IE",
        "IM",
        "IL",
        "IT",
        "JM",
        "JP",
        "JE",
        "JO",
        "KZ",
        "KE",
        "KI",
        "KP",
        "KR",
        "KW",
        "KG",
        "LA",
        "LV",
        "LB",
        "LS",
        "LR",
        "LY",
        "LI",
        "LT",
        "LU",
        "MO",
        "MG",
        "MW",
        "MY",
        "MV",
        "ML",
        "MT",
        "MH",
        "MQ",
        "MR",
        "MU",
        "YT",
        "MX",
        "FM",
        "MD",
        "MC",
        "MN",
        "ME",
        "MS",
        "MA",
        "MZ",
        "MM",
        "NA",
        "NR",
        "NP",
        "NL",
        "NC",
        "NZ",
        "NI",
        "NE",
        "NG",
        "NU",
        "NF",
        "MK",
        "MP",
        "NO",
        "OM",
        "PK",
        "PW",
        "PS",
        "PA",
        "PG",
        "PY",
        "PE",
        "PH",
        "PN",
        "PL",
        "PT",
        "PR",
        "QA",
        "RE",
        "RO",
        "RU",
        "RW",
        "BL",
        "SH",
        "KN",
        "LC",
        "MF",
        "PM",
        "VC",
        "WS",
        "SM",
        "ST",
        "SA",
        "SN",
        "RS",
        "SC",
        "SL",
        "SG",
        "SX",
        "SK",
        "SI",
        "SB",
        "SO",
        "ZA",
        "GS",
        "SS",
        "ES",
        "LK",
        "SD",
        "SR",
        "SJ",
        "SE",
        "CH",
        "SY",
        "TW",
        "TJ",
        "TZ",
        "TH",
        "TL",
        "TG",
        "TK",
        "TO",
        "TT",
        "TN",
        "TR",
        "TM",
        "TC",
        "TV",
        "UG",
        "UA",
        "AE",
        "GB",
        "US",
        "UM",
        "UY",
        "UZ",
        "VU",
        "VE",
        "VN",
        "VG",
        "VI",
        "WF",
        "EH",
        "YE",
        "ZM",
        "ZW",
    ];
    function is(value) {
        return Alpha2.types.includes(value);
    }
    Alpha2.is = is;
    function from(country) {
        return typeof country == "number" ? numericToAlpha2[country.toString()] : alpha3ToAlpha2[country];
    }
    Alpha2.from = from;
    function isEEA(country) {
        return [
            "AT",
            "BE",
            "BG",
            "HR",
            "CY",
            "DK",
            "EE",
            "FI",
            "FR",
            "DE",
            "GR",
            "HU",
            "IS",
            "IE",
            "IT",
            "LV",
            "LT",
            "MT",
            "NL",
            "NO",
            "PL",
            "PT",
            "RO",
            "SI",
            "ES",
            "SE",
            "LI",
            "LU",
            "SK",
            "CZ",
        ].includes(country);
    }
    Alpha2.isEEA = isEEA;
})(Alpha2 || (Alpha2 = {}));
const numericToAlpha2 = {
    "4": "AF",
    "248": "AX",
    "8": "AL",
    "12": "DZ",
    "16": "AS",
    "20": "AD",
    "24": "AO",
    "660": "AI",
    "10": "AQ",
    "28": "AG",
    "32": "AR",
    "51": "AM",
    "533": "AW",
    "36": "AU",
    "40": "AT",
    "31": "AZ",
    "44": "BS",
    "48": "BH",
    "50": "BD",
    "52": "BB",
    "112": "BY",
    "56": "BE",
    "84": "BZ",
    "204": "BJ",
    "60": "BM",
    "64": "BT",
    "68": "BO",
    "535": "BQ",
    "70": "BA",
    "72": "BW",
    "74": "BV",
    "76": "BR",
    "86": "IO",
    "96": "BN",
    "100": "BG",
    "854": "BF",
    "108": "BI",
    "132": "CV",
    "116": "KH",
    "120": "CM",
    "124": "CA",
    "136": "KY",
    "140": "CF",
    "148": "TD",
    "152": "CL",
    "156": "CN",
    "162": "CX",
    "166": "CC",
    "170": "CO",
    "174": "KM",
    "178": "CG",
    "180": "CD",
    "184": "CK",
    "188": "CR",
    "384": "CI",
    "191": "HR",
    "192": "CU",
    "531": "CW",
    "196": "CY",
    "203": "CZ",
    "208": "DK",
    "262": "DJ",
    "212": "DM",
    "214": "DO",
    "218": "EC",
    "818": "EG",
    "222": "SV",
    "226": "GQ",
    "232": "ER",
    "233": "EE",
    "748": "SZ",
    "231": "ET",
    "238": "FK",
    "234": "FO",
    "242": "FJ",
    "246": "FI",
    "250": "FR",
    "254": "GF",
    "258": "PF",
    "260": "TF",
    "266": "GA",
    "270": "GM",
    "268": "GE",
    "276": "DE",
    "280": "DE",
    "288": "GH",
    "292": "GI",
    "300": "GR",
    "304": "GL",
    "308": "GD",
    "312": "GP",
    "316": "GU",
    "320": "GT",
    "831": "GG",
    "324": "GN",
    "624": "GW",
    "328": "GY",
    "332": "HT",
    "334": "HM",
    "336": "VA",
    "340": "HN",
    "344": "HK",
    "348": "HU",
    "352": "IS",
    "356": "IN",
    "360": "ID",
    "364": "IR",
    "368": "IQ",
    "372": "IE",
    "833": "IM",
    "376": "IL",
    "380": "IT",
    "388": "JM",
    "392": "JP",
    "832": "JE",
    "400": "JO",
    "398": "KZ",
    "404": "KE",
    "296": "KI",
    "408": "KP",
    "410": "KR",
    "414": "KW",
    "417": "KG",
    "418": "LA",
    "428": "LV",
    "422": "LB",
    "426": "LS",
    "430": "LR",
    "434": "LY",
    "438": "LI",
    "440": "LT",
    "442": "LU",
    "446": "MO",
    "450": "MG",
    "454": "MW",
    "458": "MY",
    "462": "MV",
    "466": "ML",
    "470": "MT",
    "584": "MH",
    "474": "MQ",
    "478": "MR",
    "480": "MU",
    "175": "YT",
    "484": "MX",
    "583": "FM",
    "498": "MD",
    "492": "MC",
    "496": "MN",
    "499": "ME",
    "500": "MS",
    "504": "MA",
    "508": "MZ",
    "104": "MM",
    "516": "NA",
    "520": "NR",
    "524": "NP",
    "528": "NL",
    "540": "NC",
    "554": "NZ",
    "558": "NI",
    "562": "NE",
    "566": "NG",
    "570": "NU",
    "574": "NF",
    "807": "MK",
    "580": "MP",
    "578": "NO",
    "512": "OM",
    "586": "PK",
    "585": "PW",
    "275": "PS",
    "591": "PA",
    "598": "PG",
    "600": "PY",
    "604": "PE",
    "608": "PH",
    "612": "PN",
    "616": "PL",
    "620": "PT",
    "630": "PR",
    "634": "QA",
    "638": "RE",
    "642": "RO",
    "643": "RU",
    "646": "RW",
    "652": "BL",
    "654": "SH",
    "659": "KN",
    "662": "LC",
    "663": "MF",
    "666": "PM",
    "670": "VC",
    "882": "WS",
    "674": "SM",
    "678": "ST",
    "682": "SA",
    "686": "SN",
    "688": "RS",
    "690": "SC",
    "694": "SL",
    "702": "SG",
    "534": "SX",
    "703": "SK",
    "705": "SI",
    "90": "SB",
    "706": "SO",
    "710": "ZA",
    "239": "GS",
    "728": "SS",
    "724": "ES",
    "144": "LK",
    "729": "SD",
    "740": "SR",
    "744": "SJ",
    "752": "SE",
    "756": "CH",
    "760": "SY",
    "158": "TW",
    "762": "TJ",
    "834": "TZ",
    "764": "TH",
    "626": "TL",
    "768": "TG",
    "772": "TK",
    "776": "TO",
    "780": "TT",
    "788": "TN",
    "792": "TR",
    "795": "TM",
    "796": "TC",
    "798": "TV",
    "800": "UG",
    "804": "UA",
    "784": "AE",
    "826": "GB",
    "840": "US",
    "581": "UM",
    "858": "UY",
    "860": "UZ",
    "548": "VU",
    "862": "VE",
    "704": "VN",
    "92": "VG",
    "850": "VI",
    "876": "WF",
    "732": "EH",
    "887": "YE",
    "894": "ZM",
    "716": "ZW",
};
const alpha3ToAlpha2 = {
    AFG: "AF",
    ALA: "AX",
    ALB: "AL",
    DZA: "DZ",
    ASM: "AS",
    AND: "AD",
    AGO: "AO",
    AIA: "AI",
    ATA: "AQ",
    ATG: "AG",
    ARG: "AR",
    ARM: "AM",
    ABW: "AW",
    AUS: "AU",
    AUT: "AT",
    AZE: "AZ",
    BHS: "BS",
    BHR: "BH",
    BGD: "BD",
    BRB: "BB",
    BLR: "BY",
    BEL: "BE",
    BLZ: "BZ",
    BEN: "BJ",
    BMU: "BM",
    BTN: "BT",
    BOL: "BO",
    BES: "BQ",
    BIH: "BA",
    BWA: "BW",
    BVT: "BV",
    BRA: "BR",
    IOT: "IO",
    BRN: "BN",
    BGR: "BG",
    BFA: "BF",
    BDI: "BI",
    CPV: "CV",
    KHM: "KH",
    CMR: "CM",
    CAN: "CA",
    CYM: "KY",
    CAF: "CF",
    TCD: "TD",
    CHL: "CL",
    CHN: "CN",
    CXR: "CX",
    CCK: "CC",
    COL: "CO",
    COM: "KM",
    COG: "CG",
    COD: "CD",
    COK: "CK",
    CRI: "CR",
    CIV: "CI",
    HRV: "HR",
    CUB: "CU",
    CUW: "CW",
    CYP: "CY",
    CZE: "CZ",
    DNK: "DK",
    DJI: "DJ",
    DMA: "DM",
    DOM: "DO",
    ECU: "EC",
    EGY: "EG",
    SLV: "SV",
    GNQ: "GQ",
    ERI: "ER",
    EST: "EE",
    SWZ: "SZ",
    ETH: "ET",
    FLK: "FK",
    FRO: "FO",
    FJI: "FJ",
    FIN: "FI",
    FRA: "FR",
    GUF: "GF",
    PYF: "PF",
    ATF: "TF",
    GAB: "GA",
    GMB: "GM",
    GEO: "GE",
    DEU: "DE",
    GHA: "GH",
    GIB: "GI",
    GRC: "GR",
    GRL: "GL",
    GRD: "GD",
    GLP: "GP",
    GUM: "GU",
    GTM: "GT",
    GGY: "GG",
    GIN: "GN",
    GNB: "GW",
    GUY: "GY",
    HTI: "HT",
    HMD: "HM",
    VAT: "VA",
    HND: "HN",
    HKG: "HK",
    HUN: "HU",
    ISL: "IS",
    IND: "IN",
    IDN: "ID",
    IRN: "IR",
    IRQ: "IQ",
    IRL: "IE",
    IMN: "IM",
    ISR: "IL",
    ITA: "IT",
    JAM: "JM",
    JPN: "JP",
    JEY: "JE",
    JOR: "JO",
    KAZ: "KZ",
    KEN: "KE",
    KIR: "KI",
    PRK: "KP",
    KOR: "KR",
    KWT: "KW",
    KGZ: "KG",
    LAO: "LA",
    LVA: "LV",
    LBN: "LB",
    LSO: "LS",
    LBR: "LR",
    LBY: "LY",
    LIE: "LI",
    LTU: "LT",
    LUX: "LU",
    MAC: "MO",
    MDG: "MG",
    MWI: "MW",
    MYS: "MY",
    MDV: "MV",
    MLI: "ML",
    MLT: "MT",
    MHL: "MH",
    MTQ: "MQ",
    MRT: "MR",
    MUS: "MU",
    MYT: "YT",
    MEX: "MX",
    FSM: "FM",
    MDA: "MD",
    MCO: "MC",
    MNG: "MN",
    MNE: "ME",
    MSR: "MS",
    MAR: "MA",
    MOZ: "MZ",
    MMR: "MM",
    NAM: "NA",
    NRU: "NR",
    NPL: "NP",
    NLD: "NL",
    NCL: "NC",
    NZL: "NZ",
    NIC: "NI",
    NER: "NE",
    NGA: "NG",
    NIU: "NU",
    NFK: "NF",
    MKD: "MK",
    MNP: "MP",
    NOR: "NO",
    OMN: "OM",
    PAK: "PK",
    PLW: "PW",
    PSE: "PS",
    PAN: "PA",
    PNG: "PG",
    PRY: "PY",
    PER: "PE",
    PHL: "PH",
    PCN: "PN",
    POL: "PL",
    PRT: "PT",
    PRI: "PR",
    QAT: "QA",
    REU: "RE",
    ROU: "RO",
    RUS: "RU",
    RWA: "RW",
    BLM: "BL",
    SHN: "SH",
    KNA: "KN",
    LCA: "LC",
    MAF: "MF",
    SPM: "PM",
    VCT: "VC",
    WSM: "WS",
    SMR: "SM",
    STP: "ST",
    SAU: "SA",
    SEN: "SN",
    SRB: "RS",
    SYC: "SC",
    SLE: "SL",
    SGP: "SG",
    SXM: "SX",
    SVK: "SK",
    SVN: "SI",
    SLB: "SB",
    SOM: "SO",
    ZAF: "ZA",
    SGS: "GS",
    SSD: "SS",
    ESP: "ES",
    LKA: "LK",
    SDN: "SD",
    SUR: "SR",
    SJM: "SJ",
    SWE: "SE",
    CHE: "CH",
    SYR: "SY",
    TWN: "TW",
    TJK: "TJ",
    TZA: "TZ",
    THA: "TH",
    TLS: "TL",
    TGO: "TG",
    TKL: "TK",
    TON: "TO",
    TTO: "TT",
    TUN: "TN",
    TUR: "TR",
    TKM: "TM",
    TCA: "TC",
    TUV: "TV",
    UGA: "UG",
    UKR: "UA",
    ARE: "AE",
    GBR: "GB",
    USA: "US",
    UMI: "UM",
    URY: "UY",
    UZB: "UZ",
    VUT: "VU",
    VEN: "VE",
    VNM: "VN",
    VGB: "VG",
    VIR: "VI",
    WLF: "WF",
    ESH: "EH",
    YEM: "YE",
    ZMB: "ZM",
    ZWE: "ZW",
};

var Alpha3;
(function (Alpha3) {
    function is(value) {
        return (typeof value == "string" &&
            value.length == 3 &&
            (value == "AFG" ||
                value == "ALA" ||
                value == "ALB" ||
                value == "DZA" ||
                value == "ASM" ||
                value == "AND" ||
                value == "AGO" ||
                value == "AIA" ||
                value == "ATA" ||
                value == "ATG" ||
                value == "ARG" ||
                value == "ARM" ||
                value == "ABW" ||
                value == "AUS" ||
                value == "AUT" ||
                value == "AZE" ||
                value == "BHS" ||
                value == "BHR" ||
                value == "BGD" ||
                value == "BRB" ||
                value == "BLR" ||
                value == "BEL" ||
                value == "BLZ" ||
                value == "BEN" ||
                value == "BMU" ||
                value == "BTN" ||
                value == "BOL" ||
                value == "BES" ||
                value == "BIH" ||
                value == "BWA" ||
                value == "BVT" ||
                value == "BRA" ||
                value == "IOT" ||
                value == "BRN" ||
                value == "BGR" ||
                value == "BFA" ||
                value == "BDI" ||
                value == "CPV" ||
                value == "KHM" ||
                value == "CMR" ||
                value == "CAN" ||
                value == "CYM" ||
                value == "CAF" ||
                value == "TCD" ||
                value == "CHL" ||
                value == "CHN" ||
                value == "CXR" ||
                value == "CCK" ||
                value == "COL" ||
                value == "COM" ||
                value == "COG" ||
                value == "COD" ||
                value == "COK" ||
                value == "CRI" ||
                value == "CIV" ||
                value == "HRV" ||
                value == "CUB" ||
                value == "CUW" ||
                value == "CYP" ||
                value == "CZE" ||
                value == "DNK" ||
                value == "DJI" ||
                value == "DMA" ||
                value == "DOM" ||
                value == "ECU" ||
                value == "EGY" ||
                value == "SLV" ||
                value == "GNQ" ||
                value == "ERI" ||
                value == "EST" ||
                value == "SWZ" ||
                value == "ETH" ||
                value == "FLK" ||
                value == "FRO" ||
                value == "FJI" ||
                value == "FIN" ||
                value == "FRA" ||
                value == "GUF" ||
                value == "PYF" ||
                value == "ATF" ||
                value == "GAB" ||
                value == "GMB" ||
                value == "GEO" ||
                value == "DEU" ||
                value == "GHA" ||
                value == "GIB" ||
                value == "GRC" ||
                value == "GRL" ||
                value == "GRD" ||
                value == "GLP" ||
                value == "GUM" ||
                value == "GTM" ||
                value == "GGY" ||
                value == "GIN" ||
                value == "GNB" ||
                value == "GUY" ||
                value == "HTI" ||
                value == "HMD" ||
                value == "VAT" ||
                value == "HND" ||
                value == "HKG" ||
                value == "HUN" ||
                value == "ISL" ||
                value == "IND" ||
                value == "IDN" ||
                value == "IRN" ||
                value == "IRQ" ||
                value == "IRL" ||
                value == "IMN" ||
                value == "ISR" ||
                value == "ITA" ||
                value == "JAM" ||
                value == "JPN" ||
                value == "JEY" ||
                value == "JOR" ||
                value == "KAZ" ||
                value == "KEN" ||
                value == "KIR" ||
                value == "PRK" ||
                value == "KOR" ||
                value == "KWT" ||
                value == "KGZ" ||
                value == "LAO" ||
                value == "LVA" ||
                value == "LBN" ||
                value == "LSO" ||
                value == "LBR" ||
                value == "LBY" ||
                value == "LIE" ||
                value == "LTU" ||
                value == "LUX" ||
                value == "MAC" ||
                value == "MDG" ||
                value == "MWI" ||
                value == "MYS" ||
                value == "MDV" ||
                value == "MLI" ||
                value == "MLT" ||
                value == "MHL" ||
                value == "MTQ" ||
                value == "MRT" ||
                value == "MUS" ||
                value == "MYT" ||
                value == "MEX" ||
                value == "FSM" ||
                value == "MDA" ||
                value == "MCO" ||
                value == "MNG" ||
                value == "MNE" ||
                value == "MSR" ||
                value == "MAR" ||
                value == "MOZ" ||
                value == "MMR" ||
                value == "NAM" ||
                value == "NRU" ||
                value == "NPL" ||
                value == "NLD" ||
                value == "NCL" ||
                value == "NZL" ||
                value == "NIC" ||
                value == "NER" ||
                value == "NGA" ||
                value == "NIU" ||
                value == "NFK" ||
                value == "MKD" ||
                value == "MNP" ||
                value == "NOR" ||
                value == "OMN" ||
                value == "PAK" ||
                value == "PLW" ||
                value == "PSE" ||
                value == "PAN" ||
                value == "PNG" ||
                value == "PRY" ||
                value == "PER" ||
                value == "PHL" ||
                value == "PCN" ||
                value == "POL" ||
                value == "PRT" ||
                value == "PRI" ||
                value == "QAT" ||
                value == "REU" ||
                value == "ROU" ||
                value == "RUS" ||
                value == "RWA" ||
                value == "BLM" ||
                value == "SHN" ||
                value == "KNA" ||
                value == "LCA" ||
                value == "MAF" ||
                value == "SPM" ||
                value == "VCT" ||
                value == "WSM" ||
                value == "SMR" ||
                value == "STP" ||
                value == "SAU" ||
                value == "SEN" ||
                value == "SRB" ||
                value == "SYC" ||
                value == "SLE" ||
                value == "SGP" ||
                value == "SXM" ||
                value == "SVK" ||
                value == "SVN" ||
                value == "SLB" ||
                value == "SOM" ||
                value == "ZAF" ||
                value == "SGS" ||
                value == "SSD" ||
                value == "ESP" ||
                value == "LKA" ||
                value == "SDN" ||
                value == "SUR" ||
                value == "SJM" ||
                value == "SWE" ||
                value == "CHE" ||
                value == "SYR" ||
                value == "TWN" ||
                value == "TJK" ||
                value == "TZA" ||
                value == "THA" ||
                value == "TLS" ||
                value == "TGO" ||
                value == "TKL" ||
                value == "TON" ||
                value == "TTO" ||
                value == "TUN" ||
                value == "TUR" ||
                value == "TKM" ||
                value == "TCA" ||
                value == "TUV" ||
                value == "UGA" ||
                value == "UKR" ||
                value == "ARE" ||
                value == "GBR" ||
                value == "USA" ||
                value == "UMI" ||
                value == "URY" ||
                value == "UZB" ||
                value == "VUT" ||
                value == "VEN" ||
                value == "VNM" ||
                value == "VGB" ||
                value == "VIR" ||
                value == "WLF" ||
                value == "ESH" ||
                value == "YEM" ||
                value == "ZMB" ||
                value == "ZWE"));
    }
    Alpha3.is = is;
    function from(country) {
        return typeof country == "number" ? from(Alpha2.from(country)) : alpha2ToAlpha3[country];
    }
    Alpha3.from = from;
})(Alpha3 || (Alpha3 = {}));
const alpha2ToAlpha3 = {
    AF: "AFG",
    AX: "ALA",
    AL: "ALB",
    DZ: "DZA",
    AS: "ASM",
    AD: "AND",
    AO: "AGO",
    AI: "AIA",
    AQ: "ATA",
    AG: "ATG",
    AR: "ARG",
    AM: "ARM",
    AW: "ABW",
    AU: "AUS",
    AT: "AUT",
    AZ: "AZE",
    BS: "BHS",
    BH: "BHR",
    BD: "BGD",
    BB: "BRB",
    BY: "BLR",
    BE: "BEL",
    BZ: "BLZ",
    BJ: "BEN",
    BM: "BMU",
    BT: "BTN",
    BO: "BOL",
    BQ: "BES",
    BA: "BIH",
    BW: "BWA",
    BV: "BVT",
    BR: "BRA",
    IO: "IOT",
    BN: "BRN",
    BG: "BGR",
    BF: "BFA",
    BI: "BDI",
    CV: "CPV",
    KH: "KHM",
    CM: "CMR",
    CA: "CAN",
    KY: "CYM",
    CF: "CAF",
    TD: "TCD",
    CL: "CHL",
    CN: "CHN",
    CX: "CXR",
    CC: "CCK",
    CO: "COL",
    KM: "COM",
    CG: "COG",
    CD: "COD",
    CK: "COK",
    CR: "CRI",
    CI: "CIV",
    HR: "HRV",
    CU: "CUB",
    CW: "CUW",
    CY: "CYP",
    CZ: "CZE",
    DK: "DNK",
    DJ: "DJI",
    DM: "DMA",
    DO: "DOM",
    EC: "ECU",
    EG: "EGY",
    SV: "SLV",
    GQ: "GNQ",
    ER: "ERI",
    EE: "EST",
    SZ: "SWZ",
    ET: "ETH",
    FK: "FLK",
    FO: "FRO",
    FJ: "FJI",
    FI: "FIN",
    FR: "FRA",
    GF: "GUF",
    PF: "PYF",
    TF: "ATF",
    GA: "GAB",
    GM: "GMB",
    GE: "GEO",
    DE: "DEU",
    GH: "GHA",
    GI: "GIB",
    GR: "GRC",
    GL: "GRL",
    GD: "GRD",
    GP: "GLP",
    GU: "GUM",
    GT: "GTM",
    GG: "GGY",
    GN: "GIN",
    GW: "GNB",
    GY: "GUY",
    HT: "HTI",
    HM: "HMD",
    VA: "VAT",
    HN: "HND",
    HK: "HKG",
    HU: "HUN",
    IS: "ISL",
    IN: "IND",
    ID: "IDN",
    IR: "IRN",
    IQ: "IRQ",
    IE: "IRL",
    IM: "IMN",
    IL: "ISR",
    IT: "ITA",
    JM: "JAM",
    JP: "JPN",
    JE: "JEY",
    JO: "JOR",
    KZ: "KAZ",
    KE: "KEN",
    KI: "KIR",
    KP: "PRK",
    KR: "KOR",
    KW: "KWT",
    KG: "KGZ",
    LA: "LAO",
    LV: "LVA",
    LB: "LBN",
    LS: "LSO",
    LR: "LBR",
    LY: "LBY",
    LI: "LIE",
    LT: "LTU",
    LU: "LUX",
    MO: "MAC",
    MG: "MDG",
    MW: "MWI",
    MY: "MYS",
    MV: "MDV",
    ML: "MLI",
    MT: "MLT",
    MH: "MHL",
    MQ: "MTQ",
    MR: "MRT",
    MU: "MUS",
    YT: "MYT",
    MX: "MEX",
    FM: "FSM",
    MD: "MDA",
    MC: "MCO",
    MN: "MNG",
    ME: "MNE",
    MS: "MSR",
    MA: "MAR",
    MZ: "MOZ",
    MM: "MMR",
    NA: "NAM",
    NR: "NRU",
    NP: "NPL",
    NL: "NLD",
    NC: "NCL",
    NZ: "NZL",
    NI: "NIC",
    NE: "NER",
    NG: "NGA",
    NU: "NIU",
    NF: "NFK",
    MK: "MKD",
    MP: "MNP",
    NO: "NOR",
    OM: "OMN",
    PK: "PAK",
    PW: "PLW",
    PS: "PSE",
    PA: "PAN",
    PG: "PNG",
    PY: "PRY",
    PE: "PER",
    PH: "PHL",
    PN: "PCN",
    PL: "POL",
    PT: "PRT",
    PR: "PRI",
    QA: "QAT",
    RE: "REU",
    RO: "ROU",
    RU: "RUS",
    RW: "RWA",
    BL: "BLM",
    SH: "SHN",
    KN: "KNA",
    LC: "LCA",
    MF: "MAF",
    PM: "SPM",
    VC: "VCT",
    WS: "WSM",
    SM: "SMR",
    ST: "STP",
    SA: "SAU",
    SN: "SEN",
    RS: "SRB",
    SC: "SYC",
    SL: "SLE",
    SG: "SGP",
    SX: "SXM",
    SK: "SVK",
    SI: "SVN",
    SB: "SLB",
    SO: "SOM",
    ZA: "ZAF",
    GS: "SGS",
    SS: "SSD",
    ES: "ESP",
    LK: "LKA",
    SD: "SDN",
    SR: "SUR",
    SJ: "SJM",
    SE: "SWE",
    CH: "CHE",
    SY: "SYR",
    TW: "TWN",
    TJ: "TJK",
    TZ: "TZA",
    TH: "THA",
    TL: "TLS",
    TG: "TGO",
    TK: "TKL",
    TO: "TON",
    TT: "TTO",
    TN: "TUN",
    TR: "TUR",
    TM: "TKM",
    TC: "TCA",
    TV: "TUV",
    UG: "UGA",
    UA: "UKR",
    AE: "ARE",
    GB: "GBR",
    US: "USA",
    UM: "UMI",
    UY: "URY",
    UZ: "UZB",
    VU: "VUT",
    VE: "VEN",
    VN: "VNM",
    VG: "VGB",
    VI: "VIR",
    WF: "WLF",
    EH: "ESH",
    YE: "YEM",
    ZM: "ZMB",
    ZW: "ZWE",
};

function from$K(country) {
    return names$J[country] || from$K(Alpha2.from(country));
}
function parse$K(country) {
    const result = Object.entries(names$J).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$J = {
    AF: " أفغانستان",
    AL: " ألبانيا",
    DZ: " الجزائر",
    AS: " ساموا الأمريكية",
    AD: " أندورا",
    AO: " أنغولا",
    AI: " أنغويلا",
    AQ: " القارة القطبية الجنوبية",
    AG: " أنتيغوا وباربودا",
    AR: " الأرجنتين",
    AM: " أرمينيا",
    AW: " أروبا",
    AU: " أستراليا",
    AT: " النمسا",
    AZ: " أذربيجان",
    BS: " باهاماس",
    BH: " البحرين",
    BD: " بنغلاديش",
    BB: " باربادوس",
    BY: " روسيا البيضاء",
    BE: " بلجيكا",
    BZ: " بليز",
    BJ: " بنين",
    BM: " برمودا",
    BT: " بوتان",
    BO: " بوليفيا",
    BA: " البوسنة والهرسك",
    BW: " بوتسوانا",
    BV: " جزيرة بوفيه",
    BR: " البرازيل",
    IO: " إقليم المحيط الهندي البريطاني",
    BN: " بروناي",
    BG: " بلغاريا",
    BF: " بوركينا فاسو",
    BI: " بوروندي",
    KH: " كمبوديا",
    CM: " الكاميرون",
    CA: " كندا",
    CV: " الرأس الأخضر",
    KY: " جزر كايمان",
    CF: " جمهورية أفريقيا الوسطى",
    TD: " تشاد",
    CL: " تشيلي",
    CN: " الصين",
    CX: " جزيرة عيد الميلاد",
    CC: " جزر كوكوس",
    CO: " كولومبيا",
    KM: " جزر القمر",
    CG: " جمهورية الكونغو",
    CD: " جمهورية الكونغو الديمقراطية",
    CK: " جزر كوك",
    CR: " كوستاريكا",
    CI: " ساحل العاج",
    HR: " كرواتيا",
    CU: " كوبا",
    CY: " قبرص",
    CZ: " جمهورية التشيك",
    DK: " الدنمارك",
    DJ: " جيبوتي",
    DM: " دومينيكا",
    DO: " جمهورية الدومينيكان",
    EC: " الإكوادور",
    EG: " مصر",
    SV: " السلفادور",
    GQ: " غينيا الاستوائية",
    ER: " إريتريا",
    EE: " إستونيا",
    ET: " إثيوبيا",
    FK: " جزر فوكلاند",
    FO: " جزر فارو",
    FJ: " فيجي",
    FI: " فنلندا",
    FR: " فرنسا",
    GF: " غويانا الفرنسية",
    PF: " بولينزيا الفرنسية",
    TF: " أراض فرنسية جنوبية وأنتارتيكية",
    GA: " الغابون",
    GM: " غامبيا",
    GE: " جورجيا",
    DE: " ألمانيا",
    GH: " غانا",
    GI: " جبل طارق",
    GR: " اليونان",
    GL: " جرينلاند",
    GD: " غرينادا",
    GP: " غوادلوب",
    GU: " غوام",
    GT: " غواتيمالا",
    GN: " غينيا",
    GW: " غينيا بيساو",
    GY: " غيانا",
    HT: " هايتي",
    HM: " جزيرة هيرد وجزر ماكدونالد",
    VA: "  الفاتيكان",
    HN: " هندوراس",
    HK: " هونغ كونغ",
    HU: " المجر",
    IS: " آيسلندا",
    IN: " الهند",
    ID: " إندونيسيا",
    IR: " إيران",
    IQ: " العراق",
    IE: " أيرلندا",
    IL: " إسرائيل",
    IT: " إيطاليا",
    JM: " جامايكا",
    JP: " اليابان",
    JO: " الأردن",
    KZ: " كازاخستان",
    KE: " كينيا",
    KI: " كيريباتي",
    KP: " كوريا الشمالية",
    KR: " كوريا الجنوبية",
    KW: " الكويت",
    KG: " قيرغيزستان",
    LA: " لاوس",
    LV: " لاتفيا",
    LB: " لبنان",
    LS: " ليسوتو",
    LR: " ليبيريا",
    LY: " ليبيا",
    LI: " ليختنشتاين",
    LT: " ليتوانيا",
    LU: " لوكسمبورغ",
    MO: " ماكاو",
    MK: " مقدونيا",
    MG: " مدغشقر",
    MW: " مالاوي",
    MY: " ماليزيا",
    MV: " جزر المالديف",
    ML: " مالي",
    MT: " مالطا",
    MH: " جزر مارشال",
    MQ: " مارتينيك",
    MR: " موريتانيا",
    MU: " موريشيوس",
    YT: " مايوت",
    MX: " المكسيك",
    FM: " ولايات ميكرونيسيا المتحدة",
    MD: " مولدوفا",
    MC: " موناكو",
    MN: " منغوليا",
    MS: " مونتسرات",
    MA: " المغرب",
    MZ: " موزمبيق",
    MM: " بورما",
    NA: " ناميبيا",
    NR: " ناورو",
    NP: " نيبال",
    NL: " هولندا",
    NC: " كاليدونيا الجديدة",
    NZ: " نيوزيلندا",
    NI: " نيكاراغوا",
    NE: " النيجر",
    NG: " نيجيريا",
    NU: " نييوي",
    NF: " جزيرة نورفولك",
    MP: " جزر ماريانا الشمالية",
    NO: " النرويج",
    OM: " عمان",
    PK: " باكستان",
    PW: " بالاو",
    PS: " فلسطين",
    PA: " بنما",
    PG: " بابوا غينيا الجديدة",
    PY: " باراغواي",
    PE: " بيرو",
    PH: " الفلبين",
    PN: " جزر بيتكيرن",
    PL: " بولندا",
    PT: " البرتغال",
    PR: " بورتوريكو",
    QA: " قطر",
    RE: " لا ريونيون",
    RO: " رومانيا",
    RU: " روسيا",
    RW: " رواندا",
    SH: " سانت هيلينا وأسينشين وتريستان دا كونا",
    KN: " سانت كيتس ونيفيس",
    LC: " سانت لوسيا",
    PM: " سان بيير وميكلون",
    VC: " سانت فينسنت والغرينادين",
    WS: " ساموا",
    SM: " سان مارينو",
    ST: " ساو تومي وبرينسيب",
    SA: " السعودية",
    SN: " السنغال",
    SC: " سيشل",
    SL: " سيراليون",
    SG: " سنغافورة",
    SK: " سلوفاكيا",
    SI: " سلوفينيا",
    SB: " جزر سليمان",
    SO: " الصومال",
    ZA: " جنوب أفريقيا",
    GS: " جورجيا الجنوبية وجزر ساندويتش الجنوبية",
    ES: " إسبانيا",
    LK: " سريلانكا",
    SD: " السودان",
    SR: " سورينام",
    SJ: " سفالبارد ويان ماين",
    SZ: " سوازيلاند",
    SE: " السويد",
    CH: " سويسرا",
    SY: " سوريا",
    TW: " تايوان",
    TJ: " طاجيكستان",
    TZ: " تانزانيا",
    TH: " تايلاند",
    TL: " تيمور الشرقية",
    TG: " توغو",
    TK: " توكيلاو",
    TO: " تونغا",
    TT: "ترينيداد وتوباغو",
    TN: " تونس",
    TR: " تركيا",
    TM: " تركمانستان",
    TC: " جزر توركس وكايكوس",
    TV: " توفالو",
    UG: " أوغندا",
    UA: " أوكرانيا",
    AE: " الإمارات العربية المتحدة",
    GB: " المملكة المتحدة",
    US: " الولايات المتحدة",
    UM: " جزر الولايات المتحدة",
    UY: " الأوروغواي",
    UZ: " أوزبكستان",
    VU: " فانواتو",
    VE: " فنزويلا",
    VN: " فيتنام",
    VG: " جزر العذراء البريطانية",
    VI: " جزر العذراء الأمريكية",
    WF: " والس وفوتونا",
    EH: " الصحراء الغربية",
    YE: " اليمن",
    ZM: " زامبيا",
    ZW: " زيمبابوي",
    AX: " جزر أولاند",
    BQ: " الجزر الكاريبية الهولندية",
    CW: " كوراساو",
    GG: " غيرنزي",
    IM: " جزيرة مان",
    JE: " جيرزي",
    ME: " الجبل الأسود",
    BL: " سان بارتيلمي",
    MF: " سانت مارتن (الجزء الفرنسي)",
    RS: " صربيا",
    SX: " سانت مارتن (الجزء الهولندي)",
    SS: " جنوب السودان",
    XK: " كوسوفو",
};

function from$J(country) {
    return names$I[country] || from$J(Alpha2.from(country));
}
function parse$J(country) {
    const result = Object.entries(names$I).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$I = {
    AD: "Andorra",
    AE: "Birləşmiş Ərəb Əmirlikləri",
    AF: "Əfqanıstan",
    AG: "Antiqua və Barbuda",
    AI: "Angilya",
    AL: "Albaniya",
    AM: "Ermənistan",
    AO: "Anqola",
    AQ: "Antarktika",
    AR: "Argentina",
    AS: "Amerika Samoası",
    AT: "Avstriya",
    AU: "Avstraliya",
    AW: "Aruba",
    AX: "Aland adaları",
    AZ: "Azərbaycan",
    BA: "Bosniya və Herseqovina",
    BB: "Barbados",
    BD: "Banqladeş",
    BE: "Belçika",
    BF: "Burkina Faso",
    BG: "Bolqarıstan",
    BH: "Bəhreyn",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Sent-Bartelemi",
    BM: "Bermud adaları",
    BN: "Bruney",
    BO: "Boliviya",
    BQ: "Karib Niderlandı",
    BR: "Braziliya",
    BS: "Baham adaları",
    BT: "Butan",
    BV: "Buve adası",
    BW: "Botsvana",
    BY: "Belarus",
    BZ: "Beliz",
    CA: "Kanada",
    CC: "Kokos (Kilinq) adaları",
    CD: "Konqo - Kinşasa",
    CF: "Mərkəzi Afrika Respublikası",
    CG: "Konqo - Brazzavil",
    CH: "İsveçrə",
    CI: "Kotd’ivuar",
    CK: "Kuk adaları",
    CL: "Çili",
    CM: "Kamerun",
    CN: "Çin",
    CO: "Kolumbiya",
    CR: "Kosta Rika",
    CU: "Kuba",
    CV: "Kabo-Verde",
    CW: "Kurasao",
    CX: "Milad adası",
    CY: "Kipr",
    CZ: "Çex Respublikası",
    DE: "Almaniya",
    DJ: "Cibuti",
    DK: "Danimarka",
    DM: "Dominika",
    DO: "Dominikan Respublikası",
    DZ: "Əlcəzair",
    EC: "Ekvador",
    EE: "Estoniya",
    EG: "Misir",
    EH: "Qərbi Saxara",
    ER: "Eritreya",
    ES: "İspaniya",
    ET: "Efiopiya",
    FI: "Finlandiya",
    FJ: "Fici",
    FK: "Folklend adaları",
    FM: "Mikroneziya",
    FO: "Farer adaları",
    FR: "Fransa",
    GA: "Qabon",
    GB: "Birləşmiş Krallıq",
    GD: "Qrenada",
    GE: "Gürcüstan",
    GF: "Fransa Qvianası",
    GG: "Gernsi",
    GH: "Qana",
    GI: "Cəbəllütariq",
    GL: "Qrenlandiya",
    GM: "Qambiya",
    GN: "Qvineya",
    GP: "Qvadelupa",
    GQ: "Ekvatorial Qvineya",
    GR: "Yunanıstan",
    GS: "Cənubi Corciya və Cənubi Sendviç adaları",
    GT: "Qvatemala",
    GU: "Quam",
    GW: "Qvineya-Bisau",
    GY: "Qayana",
    HK: "Honq Konq",
    HM: "Herd və Makdonald adaları",
    HN: "Honduras",
    HR: "Xorvatiya",
    HT: "Haiti",
    HU: "Macarıstan",
    ID: "İndoneziya",
    IE: "İrlandiya",
    IL: "İsrail",
    IM: "Men adası",
    IN: "Hindistan",
    IO: "Britaniyanın Hind Okeanı Ərazisi",
    IQ: "İraq",
    IR: "İran",
    IS: "İslandiya",
    IT: "İtaliya",
    JE: "Cersi",
    JM: "Yamayka",
    JO: "İordaniya",
    JP: "Yaponiya",
    KE: "Keniya",
    KG: "Qırğızıstan",
    KH: "Kamboca",
    KI: "Kiribati",
    KM: "Komor adaları",
    KN: "Sent-Kits və Nevis",
    KP: "Şimali Koreya",
    KR: "Cənubi Koreya",
    KW: "Küveyt",
    KY: "Kayman adaları",
    KZ: "Qazaxıstan",
    LA: "Laos",
    LB: "Livan",
    LC: "Sent-Lusiya",
    LI: "Lixtenşteyn",
    LK: "Şri-Lanka",
    LR: "Liberiya",
    LS: "Lesoto",
    LT: "Litva",
    LU: "Lüksemburq",
    LV: "Latviya",
    LY: "Liviya",
    MA: "Mərakeş",
    MC: "Monako",
    MD: "Moldova",
    ME: "Monteneqro",
    MF: "Sent Martin",
    MG: "Madaqaskar",
    MH: "Marşal adaları",
    MK: "Makedoniya",
    ML: "Mali",
    MM: "Myanma",
    MN: "Monqolustan",
    MO: "Makao",
    MP: "Şimali Marian adaları",
    MQ: "Martinik",
    MR: "Mavritaniya",
    MS: "Monserat",
    MT: "Malta",
    MU: "Mavriki",
    MV: "Maldiv adaları",
    MW: "Malavi",
    MX: "Meksika",
    MY: "Malayziya",
    MZ: "Mozambik",
    NA: "Namibiya",
    NC: "Yeni Kaledoniya",
    NE: "Niger",
    NF: "Norfolk adası",
    NG: "Nigeriya",
    NI: "Nikaraqua",
    NL: "Niderland",
    NO: "Norveç",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "Yeni Zelandiya",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PF: "Fransa Polineziyası",
    PG: "Papua-Yeni Qvineya",
    PH: "Filippin",
    PK: "Pakistan",
    PL: "Polşa",
    PM: "Müqəddəs Pyer və Mikelon",
    PN: "Pitkern adaları",
    PR: "Puerto Riko",
    PS: "Fələstin Əraziləri",
    PT: "Portuqaliya",
    PW: "Palau",
    PY: "Paraqvay",
    QA: "Qətər",
    RE: "Reyunyon",
    RO: "Rumıniya",
    RS: "Serbiya",
    RU: "Rusiya",
    RW: "Ruanda",
    SA: "Səudiyyə Ərəbistanı",
    SB: "Solomon adaları",
    SC: "Seyşel adaları",
    SD: "Sudan",
    SE: "İsveç",
    SG: "Sinqapur",
    SH: "Müqəddəs Yelena",
    SI: "Sloveniya",
    SJ: "Svalbard və Yan-Mayen",
    SK: "Slovakiya",
    SL: "Syerra-Leone",
    SM: "San-Marino",
    SN: "Seneqal",
    SO: "Somali",
    SR: "Surinam",
    SS: "Cənubi Sudan",
    ST: "San-Tome və Prinsipi",
    SV: "Salvador",
    SX: "Sint-Marten",
    SY: "Suriya",
    SZ: "Svazilend",
    TC: "Törks və Kaykos adaları",
    TD: "Çad",
    TF: "Fransanın Cənub Əraziləri",
    TG: "Toqo",
    TH: "Tailand",
    TJ: "Tacikistan",
    TK: "Tokelau",
    TL: "Şərqi Timor",
    TM: "Türkmənistan",
    TN: "Tunis",
    TO: "Tonqa",
    TR: "Türkiyə",
    TT: "Trinidad və Tobaqo",
    TV: "Tuvalu",
    TW: "Tayvan",
    TZ: "Tanzaniya",
    UA: "Ukrayna",
    UG: "Uqanda",
    UM: "ABŞ-a bağlı kiçik adacıqlar",
    US: "Amerika Birləşmiş Ştatları",
    UY: "Uruqvay",
    UZ: "Özbəkistan",
    VA: "Vatikan",
    VC: "Sent-Vinsent və Qrenadinlər",
    VE: "Venesuela",
    VG: "Britaniyanın Virgin adaları",
    VI: "ABŞ Virgin adaları",
    VN: "Vyetnam",
    VU: "Vanuatu",
    WF: "Uollis və Futuna",
    WS: "Samoa",
    XK: "Kosovo",
    YE: "Yəmən",
    YT: "Mayot",
    ZA: "Cənub Afrika",
    ZM: "Zambiya",
    ZW: "Zimbabv",
};

function from$I(country) {
    return names$H[country] || from$I(Alpha2.from(country));
}
function parse$I(country) {
    const result = Object.entries(names$H).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$H = {
    AD: "Андора",
    AE: "Аб’яднаныя Арабскія Эміраты",
    AF: "Афганістан",
    AG: "Антыгуа і Барбуда",
    AI: "Ангілья",
    AL: "Албанія",
    AM: "Арменія",
    AO: "Ангола",
    AQ: "Антарктыка",
    AR: "Аргенціна",
    AS: "Амерыканскае Самоа",
    AT: "Аўстрыя",
    AU: "Аўстралія",
    AW: "Аруба",
    AX: "Аландскія астравы",
    AZ: "Азербайджан",
    BA: "Боснія і Герцагавіна",
    BB: "Барбадас",
    BD: "Бангладэш",
    BE: "Бельгія",
    BF: "Буркіна-Фасо",
    BG: "Балгарыя",
    BH: "Бахрэйн",
    BI: "Бурундзі",
    BJ: "Бенін",
    BL: "Сен-Бартэльмі",
    BM: "Бермудскія астравы",
    BN: "Бруней",
    BO: "Балівія",
    BQ: "Карыбскія Нідэрланды",
    BR: "Бразілія",
    BS: "Багамы",
    BT: "Бутан",
    BV: "Востраў Бувэ",
    BW: "Батсвана",
    BY: "Беларусь",
    BZ: "Беліз",
    CA: "Канада",
    CC: "Какосавыя (Кілінг) астравы",
    CD: "Конга (Кіншаса)",
    CF: "Цэнтральнаафрыканская Рэспубліка",
    CG: "Конга - Бразавіль",
    CH: "Швейцарыя",
    CI: "Кот-д’Івуар",
    CK: "Астравы Кука",
    CL: "Чылі",
    CM: "Камерун",
    CN: "Кітай",
    CO: "Калумбія",
    CR: "Коста-Рыка",
    CU: "Куба",
    CV: "Каба-Вердэ",
    CW: "Кюрасаа",
    CX: "Востраў Каляд",
    CY: "Кіпр",
    CZ: "Чэхія",
    DE: "Германія",
    DJ: "Джыбуці",
    DK: "Данія",
    DM: "Дамініка",
    DO: "Дамініканская Рэспубліка",
    DZ: "Алжыр",
    EC: "Эквадор",
    EE: "Эстонія",
    EG: "Егіпет",
    EH: "Заходняя Сахара",
    ER: "Эрытрэя",
    ES: "Іспанія",
    ET: "Эфіопія",
    FI: "Фінляндыя",
    FJ: "Фіджы",
    FK: "Фалклендскія астравы",
    FM: "Мікранезія",
    FO: "Фарэрскія астравы",
    FR: "Францыя",
    GA: "Габон",
    GB: "Вялікабрытанія",
    GD: "Грэнада",
    GE: "Грузія",
    GF: "Французская Гвіяна",
    GG: "Гернсі",
    GH: "Гана",
    GI: "Гібралтар",
    GL: "Грэнландыя",
    GM: "Гамбія",
    GN: "Гвінея",
    GP: "Гвадэлупа",
    GQ: "Экватарыяльная Гвінея",
    GR: "Грэцыя",
    GS: "Паўднёвая Джорджыя і Паўднёвыя Сандвічавы астравы",
    GT: "Гватэмала",
    GU: "Гуам",
    GW: "Гвінея-Бісау",
    GY: "Гаяна",
    HK: "Ганконг, САР (Кітай)",
    HM: "Астравы Херд і Макдональд",
    HN: "Гандурас",
    HR: "Харватыя",
    HT: "Гаіці",
    HU: "Венгрыя",
    ID: "Інданезія",
    IE: "Ірландыя",
    IL: "Ізраіль",
    IM: "Востраў Мэн",
    IN: "Індыя",
    IO: "Брытанская тэрыторыя ў Індыйскім акіяне",
    IQ: "Ірак",
    IR: "Іран",
    IS: "Ісландыя",
    IT: "Італія",
    JE: "Джэрсі",
    JM: "Ямайка",
    JO: "Іарданія",
    JP: "Японія",
    KE: "Кенія",
    KG: "Кыргызстан",
    KH: "Камбоджа",
    KI: "Кірыбаці",
    KM: "Каморскія Астравы",
    KN: "Сент-Кітс і Невіс",
    KP: "Паўночная Карэя",
    KR: "Паўднёвая Карэя",
    KW: "Кувейт",
    KY: "Кайманавы астравы",
    KZ: "Казахстан",
    LA: "Лаос",
    LB: "Ліван",
    LC: "Сент-Люсія",
    LI: "Ліхтэнштэйн",
    LK: "Шры-Ланка",
    LR: "Ліберыя",
    LS: "Лесота",
    LT: "Літва",
    LU: "Люксембург",
    LV: "Латвія",
    LY: "Лівія",
    MA: "Марока",
    MC: "Манака",
    MD: "Малдова",
    ME: "Чарнагорыя",
    MF: "Сен-Мартэн",
    MG: "Мадагаскар",
    MH: "Маршалавы Астравы",
    MK: "Македонія",
    ML: "Малі",
    MM: "М’янма (Бірма)",
    MN: "Манголія",
    MO: "Макаа, САР (Кітай)",
    MP: "Паўночныя Марыянскія астравы",
    MQ: "Марцініка",
    MR: "Маўрытанія",
    MS: "Мантсерат",
    MT: "Мальта",
    MU: "Маўрыкій",
    MV: "Мальдывы",
    MW: "Малаві",
    MX: "Мексіка",
    MY: "Малайзія",
    MZ: "Мазамбік",
    NA: "Намібія",
    NC: "Новая Каледонія",
    NE: "Нігер",
    NF: "Востраў Норфалк",
    NG: "Нігерыя",
    NI: "Нікарагуа",
    NL: "Нідэрланды",
    NO: "Нарвегія",
    NP: "Непал",
    NR: "Науру",
    NU: "Ніуэ",
    NZ: "Новая Зеландыя",
    OM: "Аман",
    PA: "Панама",
    PE: "Перу",
    PF: "Французская Палінезія",
    PG: "Папуа-Новая Гвінея",
    PH: "Філіпіны",
    PK: "Пакістан",
    PL: "Польшча",
    PM: "Сен-П’ер і Мікелон",
    PN: "Астравы Піткэрн",
    PR: "Пуэрта-Рыка",
    PS: "Палесцінскія Тэрыторыі",
    PT: "Партугалія",
    PW: "Палау",
    PY: "Парагвай",
    QA: "Катар",
    RE: "Рэюньён",
    RO: "Румынія",
    RS: "Сербія",
    RU: "Расія",
    RW: "Руанда",
    SA: "Саудаўская Аравія",
    SB: "Саламонавы Астравы",
    SC: "Сейшэльскія Астравы",
    SD: "Судан",
    SE: "Швецыя",
    SG: "Сінгапур",
    SH: "Востраў Святой Алены",
    SI: "Славенія",
    SJ: "Шпіцберген і Ян-Маен",
    SK: "Славакія",
    SL: "Сьера-Леонэ",
    SM: "Сан-Марына",
    SN: "Сенегал",
    SO: "Самалі",
    SR: "Сурынам",
    SS: "Паўднёвы Судан",
    ST: "Сан-Тамэ і Прынсіпі",
    SV: "Сальвадор",
    SX: "Сінт-Мартэн",
    SY: "Сірыя",
    SZ: "Свазіленд",
    TC: "Цёркс і Кайкас",
    TD: "Чад",
    TF: "Французскія Паўднёвыя тэрыторыі",
    TG: "Тога",
    TH: "Тайланд",
    TJ: "Таджыкістан",
    TK: "Такелау",
    TL: "Тымор-Лешці",
    TM: "Туркменістан",
    TN: "Туніс",
    TO: "Тонга",
    TR: "Турцыя",
    TT: "Трынідад і Табага",
    TV: "Тувалу",
    TW: "Тайвань",
    TZ: "Танзанія",
    UA: "Украіна",
    UG: "Уганда",
    UM: "Малыя Аддаленыя астравы ЗША",
    US: "Злучаныя Штаты Амерыкі",
    UY: "Уругвай",
    UZ: "Узбекістан",
    VA: "Ватыкан",
    VC: "Сент-Вінсент і Грэнадзіны",
    VE: "Венесуэла",
    VG: "Брытанскія Віргінскія астравы",
    VI: "Амерыканскія Віргінскія астравы",
    VN: "В’етнам",
    VU: "Вануату",
    WF: "Уоліс і Футуна",
    WS: "Самоа",
    XK: "Косава",
    YE: "Емен",
    YT: "Маёта",
    ZA: "Паўднёваафрыканская Рэспубліка",
    ZM: "Замбія",
    ZW: "Зімбабв",
};

function from$H(country) {
    return names$G[country] || from$H(Alpha2.from(country));
}
function parse$H(country) {
    const result = Object.entries(names$G).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$G = {
    AD: "Андора",
    AE: "Обединени арабски емирства",
    AF: "Афганистан",
    AG: "Антигуа и Барбуда",
    AI: "Ангуила",
    AL: "Албания",
    AM: "Армения",
    AO: "Ангола",
    AQ: "Антарктика",
    AR: "Аржентина",
    AS: "Американска Самоа",
    AT: "Австрия",
    AU: "Австралия",
    AW: "Аруба",
    AX: "Оландски острови",
    AZ: "Азербайджан",
    BA: "Босна и Херцеговина",
    BB: "Барбадос",
    BD: "Бангладеш",
    BE: "Белгия",
    BF: "Буркина Фасо",
    BG: "България",
    BH: "Бахрейн",
    BI: "Бурунди",
    BJ: "Бенин",
    BL: "Сен Бартелеми",
    BM: "Бермуда",
    BN: "Бруней Даруссалам",
    BO: "Боливия",
    BQ: "Карибска Нидерландия",
    BR: "Бразилия",
    BS: "Бахами",
    BT: "Бутан",
    BV: "остров Буве",
    BW: "Ботсвана",
    BY: "Беларус",
    BZ: "Белиз",
    CA: "Канада",
    CC: "Кокосови острови (острови Кийлинг)",
    CD: "Конго (Киншаса)",
    CF: "Централноафриканска република",
    CG: "Конго (Бразавил)",
    CH: "Швейцария",
    CI: "Кот д’Ивоар",
    CK: "острови Кук",
    CL: "Чили",
    CM: "Камерун",
    CN: "Китай",
    CO: "Колумбия",
    CR: "Коста Рика",
    CU: "Куба",
    CV: "Кабо Верде",
    CW: "Кюрасао",
    CX: "остров Рождество",
    CY: "Кипър",
    CZ: "Чехия",
    DE: "Германия",
    DJ: "Джибути",
    DK: "Дания",
    DM: "Доминика",
    DO: "Доминиканска република",
    DZ: "Алжир",
    EC: "Еквадор",
    EE: "Естония",
    EG: "Египет",
    EH: "Западна Сахара",
    ER: "Еритрея",
    ES: "Испания",
    ET: "Етиопия",
    FI: "Финландия",
    FJ: "Фиджи",
    FK: "Фолклендски острови",
    FM: "Микронезия",
    FO: "Фарьорски острови",
    FR: "Франция",
    GA: "Габон",
    GB: "Обединеното кралство",
    GD: "Гренада",
    GE: "Грузия",
    GF: "Френска Гвиана",
    GG: "Гърнзи",
    GH: "Гана",
    GI: "Гибралтар",
    GL: "Гренландия",
    GM: "Гамбия",
    GN: "Гвинея",
    GP: "Гваделупа",
    GQ: "Екваториална Гвинея",
    GR: "Гърция",
    GS: "Южна Джорджия и Южни Сандвичеви острови",
    GT: "Гватемала",
    GU: "Гуам",
    GW: "Гвинея-Бисау",
    GY: "Гаяна",
    HK: "Хонконг, САР на Китай",
    HM: "остров Хърд и острови Макдоналд",
    HN: "Хондурас",
    HR: "Хърватия",
    HT: "Хаити",
    HU: "Унгария",
    ID: "Индонезия",
    IE: "Ирландия",
    IL: "Израел",
    IM: "остров Ман",
    IN: "Индия",
    IO: "Британска територия в Индийския океан",
    IQ: "Ирак",
    IR: "Иран",
    IS: "Исландия",
    IT: "Италия",
    JE: "Джърси",
    JM: "Ямайка",
    JO: "Йордания",
    JP: "Япония",
    KE: "Кения",
    KG: "Киргизстан",
    KH: "Камбоджа",
    KI: "Кирибати",
    KM: "Коморски острови",
    KN: "Сейнт Китс и Невис",
    KP: "Северна Корея",
    KR: "Южна Корея",
    KW: "Кувейт",
    KY: "Кайманови острови",
    KZ: "Казахстан",
    LA: "Лаос",
    LB: "Ливан",
    LC: "Сейнт Лусия",
    LI: "Лихтенщайн",
    LK: "Шри Ланка",
    LR: "Либерия",
    LS: "Лесото",
    LT: "Литва",
    LU: "Люксембург",
    LV: "Латвия",
    LY: "Либия",
    MA: "Мароко",
    MC: "Монако",
    MD: "Молдова",
    ME: "Черна гора",
    MF: "Сен Мартен",
    MG: "Мадагаскар",
    MH: "Маршалови острови",
    MK: "Македония",
    ML: "Мали",
    MM: "Мианмар (Бирма)",
    MN: "Монголия",
    MO: "Макао, САР на Китай",
    MP: "Северни Мариански острови",
    MQ: "Мартиника",
    MR: "Мавритания",
    MS: "Монтсерат",
    MT: "Малта",
    MU: "Мавриций",
    MV: "Малдиви",
    MW: "Малави",
    MX: "Мексико",
    MY: "Малайзия",
    MZ: "Мозамбик",
    NA: "Намибия",
    NC: "Нова Каледония",
    NE: "Нигер",
    NF: "остров Норфолк",
    NG: "Нигерия",
    NI: "Никарагуа",
    NL: "Нидерландия",
    NO: "Норвегия",
    NP: "Непал",
    NR: "Науру",
    NU: "Ниуе",
    NZ: "Нова Зеландия",
    OM: "Оман",
    PA: "Панама",
    PE: "Перу",
    PF: "Френска Полинезия",
    PG: "Папуа-Нова Гвинея",
    PH: "Филипини",
    PK: "Пакистан",
    PL: "Полша",
    PM: "Сен Пиер и Микелон",
    PN: "Острови Питкерн",
    PR: "Пуерто Рико",
    PS: "Палестински територии",
    PT: "Португалия",
    PW: "Палау",
    PY: "Парагвай",
    QA: "Катар",
    RE: "Реюнион",
    RO: "Румъния",
    RS: "Сърбия",
    RU: "Русия",
    RW: "Руанда",
    SA: "Саудитска Арабия",
    SB: "Соломонови острови",
    SC: "Сейшели",
    SD: "Судан",
    SE: "Швеция",
    SG: "Сингапур",
    SH: "Света Елена",
    SI: "Словения",
    SJ: "Свалбард и Ян Майен",
    SK: "Словакия",
    SL: "Сиера Леоне",
    SM: "Сан Марино",
    SN: "Сенегал",
    SO: "Сомалия",
    SR: "Суринам",
    SS: "Южен Судан",
    ST: "Сао Томе и Принсипи",
    SV: "Салвадор",
    SX: "Синт Мартен",
    SY: "Сирия",
    SZ: "Свазиленд",
    TC: "острови Търкс и Кайкос",
    TD: "Чад",
    TF: "Френски южни територии",
    TG: "Того",
    TH: "Тайланд",
    TJ: "Таджикистан",
    TK: "Токелау",
    TL: "Източен Тимор",
    TM: "Туркменистан",
    TN: "Тунис",
    TO: "Тонга",
    TR: "Турция",
    TT: "Тринидад и Тобаго",
    TV: "Тувалу",
    TW: "Тайван",
    TZ: "Танзания",
    UA: "Украйна",
    UG: "Уганда",
    UM: "Отдалечени острови на САЩ",
    US: "Съединени щати",
    UY: "Уругвай",
    UZ: "Узбекистан",
    VA: "Ватикан",
    VC: "Сейнт Винсънт и Гренадини",
    VE: "Венецуела",
    VG: "Британски Вирджински острови",
    VI: "Американски Вирджински острови",
    VN: "Виетнам",
    VU: "Вануату",
    WF: "Уолис и Футуна",
    WS: "Самоа",
    XK: "Косово",
    YE: "Йемен",
    YT: "Майот",
    ZA: "Южна Африка",
    ZM: "Замбия",
    ZW: "Зимбабв",
};

function from$G(country) {
    return names$F[country] || from$G(Alpha2.from(country));
}
function parse$G(country) {
    const result = Object.entries(names$F).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$F = {
    AD: "Andora",
    AE: "Ujedinjeni Arapski Emirati",
    AF: "Afganistan",
    AG: "Antigva i Barbuda",
    AI: "Angvila",
    AL: "Albanija",
    AM: "Armenija",
    AO: "Angola",
    AQ: "Antarktika",
    AR: "Argentina",
    AS: "Američka Samoa",
    AT: "Austrija",
    AU: "Australija",
    AW: "Aruba",
    AX: "Olandska Ostrva",
    AZ: "Azerbejdžan",
    BA: "Bosna i Hercegovina",
    BB: "Barbados",
    BD: "Bangladeš",
    BE: "Belgija",
    BF: "Burkina Faso",
    BG: "Bugarska",
    BH: "Bahrein",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Sveti Bartolomej",
    BM: "Bermuda",
    BN: "Brunej",
    BO: "Bolivija",
    BQ: "Karipska Holandija",
    BR: "Brazil",
    BS: "Bahami",
    BT: "Butan",
    BV: "Ostrvo Buve",
    BW: "Bocvana",
    BY: "Bjelorusija",
    BZ: "Belize",
    CA: "Kanada",
    CC: "Kokosova (Kilingova) Ostrva",
    CD: "Demokratska Republika Kongo",
    CF: "Centralnoafrička Republika",
    CG: "Kongo",
    CH: "Švicarska",
    CI: "Obala Slonovače",
    CK: "Kukova Ostrva",
    CL: "Čile",
    CM: "Kamerun",
    CN: "Kina",
    CO: "Kolumbija",
    CR: "Kostarika",
    CU: "Kuba",
    CV: "Kape Verde",
    CW: "Kurasao",
    CX: "Božićna Ostrva",
    CY: "Kipar",
    CZ: "Češka",
    DE: "Njemačka",
    DJ: "Džibuti",
    DK: "Danska",
    DM: "Dominika",
    DO: "Dominikanska Republika",
    DZ: "Alžir",
    EC: "Ekvador",
    EE: "Estonija",
    EG: "Egipat",
    EH: "Zapadna Sahara",
    ER: "Eritreja",
    ES: "Španija",
    ET: "Etiopija",
    FI: "Finska",
    FJ: "Fidži",
    FK: "Folklandska Ostrva",
    FM: "Mikronezija",
    FO: "Farska Ostrva",
    FR: "Francuska",
    GA: "Gabon",
    GB: "Velika Britanija",
    GD: "Grenada",
    GE: "Gruzija",
    GF: "Francuska Gvajana",
    GG: "Gernzi",
    GH: "Gana",
    GI: "Gibraltar",
    GL: "Grenland",
    GM: "Gambija",
    GN: "Gvineja",
    GP: "Gvadalupe",
    GQ: "Ekvatorijalna Gvineja",
    GR: "Grčka",
    GS: "Južna Džordžija i Južna Sendvička Ostrva",
    GT: "Gvatemala",
    GU: "Guam",
    GW: "Gvineja-Bisao",
    GY: "Gvajana",
    HK: "Hong Kong (SAR Kina)",
    HM: "Herd i arhipelag MekDonald",
    HN: "Honduras",
    HR: "Hrvatska",
    HT: "Haiti",
    HU: "Mađarska",
    ID: "Indonezija",
    IE: "Irska",
    IL: "Izrael",
    IM: "Ostrvo Man",
    IN: "Indija",
    IO: "Britanska Teritorija u Indijskom Okeanu",
    IQ: "Irak",
    IR: "Iran",
    IS: "Island",
    IT: "Italija",
    JE: "Džerzi",
    JM: "Jamajka",
    JO: "Jordan",
    JP: "Japan",
    KE: "Kenija",
    KG: "Kirgistan",
    KH: "Kambodža",
    KI: "Kiribati",
    KM: "Komorska Ostrva",
    KN: "Sveti Kits i Nevis",
    KP: "Sjeverna Koreja",
    KR: "Južna Koreja",
    KW: "Kuvajt",
    KY: "Kajmanska Ostrva",
    KZ: "Kazahstan",
    LA: "Laos",
    LB: "Liban",
    LC: "Sveta Lucija",
    LI: "Lihtenštajn",
    LK: "Šri Lanka",
    LR: "Liberija",
    LS: "Lesoto",
    LT: "Litvanija",
    LU: "Luksemburg",
    LV: "Latvija",
    LY: "Libija",
    MA: "Maroko",
    MC: "Monako",
    MD: "Moldavija",
    ME: "Crna Gora",
    MF: "Sv. Martin",
    MG: "Madagaskar",
    MH: "Maršalova Ostrva",
    MK: "Makedonija",
    ML: "Mali",
    MM: "Mijanmar",
    MN: "Mongolija",
    MO: "Makao (SAR Kina)",
    MP: "Sjeverna Marijanska Ostrva",
    MQ: "Martinik",
    MR: "Mauritanija",
    MS: "Monserat",
    MT: "Malta",
    MU: "Mauricijus",
    MV: "Maldivi",
    MW: "Malavi",
    MX: "Meksiko",
    MY: "Malezija",
    MZ: "Mozambik",
    NA: "Namibija",
    NC: "Nova Kaledonija",
    NE: "Niger",
    NF: "Ostrvo Norfolk",
    NG: "Nigerija",
    NI: "Nikaragva",
    NL: "Holandija",
    NO: "Norveška",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "Novi Zeland",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PF: "Francuska Polinezija",
    PG: "Papua Nova Gvineja",
    PH: "Filipini",
    PK: "Pakistan",
    PL: "Poljska",
    PM: "Sveti Petar i Mikelon",
    PN: "Pitkernska Ostrva",
    PR: "Porto Riko",
    PS: "Palestinska Teritorija",
    PT: "Portugal",
    PW: "Palau",
    PY: "Paragvaj",
    QA: "Katar",
    RE: "Reunion",
    RO: "Rumunija",
    RS: "Srbija",
    RU: "Rusija",
    RW: "Ruanda",
    SA: "Saudijska Arabija",
    SB: "Solomonska Ostrva",
    SC: "Sejšeli",
    SD: "Sudan",
    SE: "Švedska",
    SG: "Singapur",
    SH: "Sveta Helena",
    SI: "Slovenija",
    SJ: "Svalbard i Jan Majen",
    SK: "Slovačka",
    SL: "Sijera Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalija",
    SR: "Surinam",
    SS: "Južni Sudan",
    ST: "Sao Tome i Principe",
    SV: "Salvador",
    SX: "Sint Marten",
    SY: "Sirija",
    SZ: "Svazilend",
    TC: "Ostrva Turks i Kaikos",
    TD: "Čad",
    TF: "Francuske Južne Teritorije",
    TG: "Togo",
    TH: "Tajland",
    TJ: "Tadžikistan",
    TK: "Tokelau",
    TL: "Istočni Timor",
    TM: "Turkmenistan",
    TN: "Tunis",
    TO: "Tonga",
    TR: "Turska",
    TT: "Trinidad i Tobago",
    TV: "Tuvalu",
    TW: "Tajvan",
    TZ: "Tanzanija",
    UA: "Ukrajina",
    UG: "Uganda",
    UM: "Američka Vanjska Ostrva",
    US: "Sjedinjene Američke Države",
    UY: "Urugvaj",
    UZ: "Uzbekistan",
    VA: "Vatikan",
    VC: "Sveti Vinsent i Grenadin",
    VE: "Venecuela",
    VG: "Britanska Djevičanska Ostrva",
    VI: "Američka Djevičanska Ostrva",
    VN: "Vijetnam",
    VU: "Vanuatu",
    WF: "Ostrva Valis i Futuna",
    WS: "Samoa",
    XK: "Kosovo",
    YE: "Jemen",
    YT: "Majote",
    ZA: "Južnoafrička Republika",
    ZM: "Zambija",
    ZW: "Zimbabv",
};

function from$F(country) {
    return names$E[country] || from$F(Alpha2.from(country));
}
function parse$F(country) {
    const result = Object.entries(names$E).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$E = {
    AF: "Afganistan",
    AX: "Åland, illes",
    AL: "Albània",
    DE: "Alemanya",
    DZ: "Algèria",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antàrtida",
    AG: "Antigua i Barbuda",
    SA: "Aràbia Saudita",
    AR: "Argentina",
    AM: "Armènia",
    AW: "Aruba",
    AU: "Austràlia",
    AT: "Àustria",
    AZ: "Azerbaidjan",
    BS: "Bahames",
    BH: "Bahrain",
    BD: "Bangla Desh",
    BB: "Barbados",
    BE: "Bèlgica",
    BZ: "Belize",
    BJ: "Benín",
    BM: "Bermudes",
    BT: "Bhutan",
    BY: "Bielorússia",
    BO: "Bolívia",
    BQ: "Bonaire, Sint Eustatius i Saba",
    BA: "Bòsnia i Hercegovina",
    BW: "Botswana",
    BV: "Bouvet",
    BR: "Brasil",
    BN: "Brunei",
    BG: "Bulgària",
    BF: "Burkina Faso",
    BI: "Burundi",
    KY: "Caiman, illes",
    KH: "Cambodja",
    CM: "Camerun",
    CA: "Canadà",
    CV: "Cap Verd",
    CF: "Centreafricana, República",
    CX: "Christmas, illa",
    CC: "Cocos, illes",
    CO: "Colòmbia",
    KM: "Comores",
    CG: "Congo, República del",
    CD: "Congo, República Democràtica del",
    CK: "Cook, illes",
    KP: "Corea del Nord",
    KR: "Corea del Sud",
    CI: "Costa d'Ivori",
    CR: "Costa Rica",
    HR: "Croàcia",
    CU: "Cuba",
    CW: "Curaçao",
    DK: "Dinamarca",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominicana, República",
    EG: "Egipte",
    EC: "Equador",
    AE: "Emirats Àrabs Units",
    ER: "Eritrea",
    SK: "Eslovàquia",
    SI: "Eslovènia",
    ES: "Espanya",
    US: "Estats Units (EUA)",
    EE: "Estònia",
    ET: "Etiòpia",
    FO: "Fèroe, illes",
    FJ: "Fiji",
    PH: "Filipines",
    FI: "Finlàndia",
    FR: "França",
    GA: "Gabon",
    GM: "Gàmbia",
    GE: "Geòrgia",
    GS: "Geòrgia del Sud i Sandwich del Sud, illes",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Grècia",
    GD: "Grenada",
    GL: "Groenlàndia",
    GP: "Guadeloupe",
    GF: "Guaiana Francesa",
    GU: "Guam",
    GT: "Guatemala",
    GG: "Guernsey",
    GN: "República de Guinea",
    GW: "Guinea Bissau",
    GQ: "Guinea Equatorial",
    GY: "Guyana",
    HT: "Haití",
    HM: "Heard, illa i McDonald, illes",
    HN: "Hondures",
    HK: "Hong Kong",
    HU: "Hongria",
    YE: "Iemen",
    IM: "Illa de Man",
    UM: "Illes Perifèriques Menors dels EUA",
    IN: "Índia",
    ID: "Indonèsia",
    IR: "Iran",
    IQ: "Iraq",
    IE: "Irlanda",
    IS: "Islàndia",
    IL: "Israel",
    IT: "Itàlia",
    JM: "Jamaica",
    JP: "Japó",
    JE: "Jersey",
    JO: "Jordània",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KG: "Kirguizistan",
    KI: "Kiribati",
    KW: "Kuwait",
    LA: "Laos",
    LS: "Lesotho",
    LV: "Letònia",
    LB: "Líban",
    LR: "Libèria",
    LY: "Líbia",
    LI: "Liechtenstein",
    LT: "Lituània",
    LU: "Luxemburg",
    MO: "Macau",
    MK: "Macedònia",
    MG: "Madagascar",
    MY: "Malàisia",
    MW: "Malawi",
    MV: "Maldives",
    ML: "Mali",
    MT: "Malta",
    FK: "Malvines, illes",
    MP: "Mariannes Septentrionals, illes",
    MA: "Marroc",
    MH: "Marshall, illes",
    MQ: "Martinica",
    MU: "Maurici",
    MR: "Mauritània",
    YT: "Mayotte",
    MX: "Mèxic",
    FM: "Micronèsia, Estats Federats de",
    MZ: "Moçambic",
    MD: "Moldàvia",
    MC: "Mònaco",
    MN: "Mongòlia",
    ME: "Montenegro",
    MS: "Montserrat",
    MM: "Myanmar",
    NA: "Namíbia",
    NR: "Nauru",
    NP: "Nepal",
    NI: "Nicaragua",
    NE: "Níger",
    NG: "Nigèria",
    NU: "Niue",
    NF: "Norfolk, illa",
    NO: "Noruega",
    NC: "Nova Caledònia",
    NZ: "Nova Zelanda",
    OM: "Oman",
    NL: "Països Baixos",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestina",
    PA: "Panamà",
    PG: "Papua Nova Guinea",
    PY: "Paraguai",
    PE: "Perú",
    PN: "Pitcairn, illes",
    PF: "Polinèsia Francesa",
    PL: "Polònia",
    PT: "Portugal",
    PR: "Puerto Rico",
    QA: "Qatar",
    GB: "Regne Unit",
    RE: "Reunió, illa de la",
    RO: "Romania",
    RU: "Rússia",
    RW: "Ruanda",
    EH: "Sàhara Occidental",
    KN: "Saint Kitts i Nevis",
    LC: "Saint Lucia",
    PM: "Saint-Pierre i Miquelon",
    VC: "Saint Vincent i les Grenadines",
    BL: "Saint-Barthélemy",
    MF: "Saint-Martin",
    SB: "Salomó",
    SV: "Salvador, El",
    WS: "Samoa",
    AS: "Samoa Nord-americana",
    SM: "San Marino",
    SH: "Santa Helena",
    ST: "São Tomé i Príncipe",
    SN: "Senegal",
    RS: "Sèrbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SG: "Singapur",
    SX: "Sint Maarten",
    SY: "Síria",
    SO: "Somàlia",
    LK: "Sri Lanka",
    ZA: "Sud-àfrica",
    SD: "Sudan",
    SS: "Sudan del Sud",
    SE: "Suècia",
    CH: "Suïssa",
    SR: "Surinam",
    SJ: "Svalbard i Jan Mayen",
    SZ: "Swazilàndia",
    TJ: "Tadjikistan",
    TH: "Tailàndia",
    TW: "Taiwan",
    TZ: "Tanzània",
    IO: "Territori Britànic de l'Oceà Índic",
    TF: "Territoris Francesos del Sud",
    TL: "Timor Oriental",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinitat i Tobago",
    TN: "Tunísia",
    TM: "Turkmenistan",
    TC: "Turks i Caicos, illes",
    TR: "Turquia",
    TV: "Tuvalu",
    TD: "Txad",
    CZ: "Txèquia",
    UA: "Ucraïna",
    UG: "Uganda",
    UY: "Uruguai",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VA: "Vaticà, Ciutat del",
    VE: "Veneçuela",
    VG: "Verges Britàniques, illes",
    VI: "Verges Nord-americanes, illes",
    VN: "Vietnam",
    WF: "Wallis i Futuna",
    CL: "Xile",
    CN: "Xina",
    CY: "Xipre",
    ZM: "Zàmbia",
    ZW: "Zimbabwe",
    XK: "Kosov",
};

function from$E(country) {
    return names$D[country] || from$E(Alpha2.from(country));
}
function parse$E(country) {
    const result = Object.entries(names$D).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$D = {
    AF: "Afghánistán",
    AX: "Ålandy",
    AL: "Albánie",
    DZ: "Alžírsko",
    AS: "Americká Samoa",
    VI: "Americké Panenské ostrovy",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarktida",
    AG: "Antigua a Barbuda",
    AR: "Argentina",
    AM: "Arménie",
    AW: "Aruba",
    AU: "Austrálie",
    AZ: "Ázerbájdžán",
    BS: "Bahamy",
    BH: "Bahrajn",
    BD: "Bangladéš",
    BB: "Barbados",
    BE: "Belgie",
    BZ: "Belize",
    BY: "Bělorusko",
    BJ: "Benin",
    BM: "Bermudy",
    BT: "Bhútán",
    BO: "Bolívie",
    BQ: "Bonaire, Svatý Eustach a Saba",
    BA: "Bosna a Hercegovina",
    BW: "Botswana",
    BV: "Bouvetův ostrov",
    BR: "Brazílie",
    IO: "Britské indickooceánské území",
    VG: "Britské Panenské ostrovy",
    BN: "Brunej",
    BG: "Bulharsko",
    BF: "Burkina Faso",
    BI: "Burundi",
    CK: "Cookovy ostrovy",
    CW: "Curaçao",
    TD: "Čad",
    ME: "Černá Hora",
    CZ: "Česko",
    CN: "Čína",
    DK: "Dánsko",
    CD: "Demokratická republika Kongo",
    DM: "Dominika",
    DO: "Dominikánská republika",
    DJ: "Džibutsko",
    EG: "Egypt",
    EC: "Ekvádor",
    ER: "Eritrea",
    EE: "Estonsko",
    ET: "Etiopie",
    FO: "Faerské ostrovy",
    FK: "Falklandy (Malvíny)",
    FJ: "Fidži",
    PH: "Filipíny",
    FI: "Finsko",
    FR: "Francie",
    GF: "Francouzská Guyana",
    TF: "Francouzská jižní a antarktická území",
    PF: "Francouzská Polynésie",
    GA: "Gabon",
    GM: "Gambie",
    GH: "Ghana",
    GI: "Gibraltar",
    GD: "Grenada",
    GL: "Grónsko",
    GE: "Gruzie",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GG: "Guernsey",
    GY: "Guyana",
    HT: "Haiti",
    HM: "Heardův ostrov a McDonaldovy ostrovy",
    HN: "Honduras",
    HK: "Hongkong",
    CL: "Chile",
    HR: "Chorvatsko",
    IN: "Indie",
    ID: "Indonésie",
    IQ: "Irák",
    IR: "Írán",
    IE: "Irsko",
    IS: "Island",
    IT: "Itálie",
    IL: "Izrael",
    JM: "Jamajka",
    JP: "Japonsko",
    YE: "Jemen",
    JE: "Jersey",
    ZA: "Jihoafrická republika",
    GS: "Jižní Georgie a Jižní Sandwichovy ostrovy",
    KR: "Jižní Korea",
    SS: "Jižní Súdán",
    JO: "Jordánsko",
    KY: "Kajmanské ostrovy",
    KH: "Kambodža",
    CM: "Kamerun",
    CA: "Kanada",
    CV: "Kapverdy",
    QA: "Katar",
    KZ: "Kazachstán",
    KE: "Keňa",
    KI: "Kiribati",
    CC: "Kokosové ostrovy",
    CO: "Kolumbie",
    KM: "Komory",
    CG: "Kongo",
    CR: "Kostarika",
    CU: "Kuba",
    KW: "Kuvajt",
    CY: "Kypr",
    KG: "Kyrgyzstán",
    LA: "Laos",
    LS: "Lesotho",
    LB: "Libanon",
    LR: "Libérie",
    LY: "Libye",
    LI: "Lichtenštejnsko",
    LT: "Litva",
    LV: "Lotyšsko",
    LU: "Lucembursko",
    MO: "Macao",
    MG: "Madagaskar",
    HU: "Maďarsko",
    MK: "Makedonie",
    MY: "Malajsie",
    MW: "Malawi",
    MV: "Maledivy",
    ML: "Mali",
    MT: "Malta",
    IM: "Ostrov Man",
    MA: "Maroko",
    MH: "Marshallovy ostrovy",
    MQ: "Martinik",
    MU: "Mauricius",
    MR: "Mauritánie",
    YT: "Mayotte",
    UM: "Menší odlehlé ostrovy USA",
    MX: "Mexiko",
    FM: "Mikronésie",
    MD: "Moldavsko",
    MC: "Monako",
    MN: "Mongolsko",
    MS: "Montserrat",
    MZ: "Mosambik",
    MM: "Myanmar",
    NA: "Namibie",
    NR: "Nauru",
    DE: "Německo",
    NP: "Nepál",
    NE: "Niger",
    NG: "Nigérie",
    NI: "Nikaragua",
    NU: "Niue",
    NL: "Nizozemsko",
    NF: "Norfolk",
    NO: "Norsko",
    NC: "Nová Kaledonie",
    NZ: "Nový Zéland",
    OM: "Omán",
    PK: "Pákistán",
    PW: "Palau",
    PS: "Palestinská autonomie",
    PA: "Panama",
    PG: "Papua-Nová Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PN: "Pitcairnovy ostrovy",
    CI: "Pobřeží slonoviny",
    PL: "Polsko",
    PR: "Portoriko",
    PT: "Portugalsko",
    AT: "Rakousko",
    RE: "Réunion",
    GQ: "Rovníková Guinea",
    RO: "Rumunsko",
    RU: "Rusko",
    RW: "Rwanda",
    GR: "Řecko",
    PM: "Saint-Pierre a Miquelon",
    SV: "Salvador",
    WS: "Samoa",
    SM: "San Marino",
    SA: "Saúdská Arábie",
    SN: "Senegal",
    KP: "Severní Korea",
    MP: "Severní Mariany",
    SC: "Seychely",
    SL: "Sierra Leone",
    SG: "Singapur",
    SK: "Slovensko",
    SI: "Slovinsko",
    SO: "Somálsko",
    AE: "Spojené arabské emiráty",
    GB: "Spojené království",
    US: "Spojené státy americké",
    RS: "Srbsko",
    CF: "Středoafrická republika",
    SD: "Súdán",
    SR: "Surinam",
    SH: "Svatá Helena, Ascension a Tristan da Cunha",
    LC: "Svatá Lucie",
    BL: "Svatý Bartoloměj",
    KN: "Svatý Kryštof a Nevis",
    MF: "Svatý Martin (francouzská část)",
    SX: "Svatý Martin (nizozemská část)",
    ST: "Svatý Tomáš a Princův ostrov",
    VC: "Svatý Vincenc a Grenadiny",
    SZ: "Svazijsko",
    SY: "Sýrie",
    SB: "Šalamounovy ostrovy",
    ES: "Španělsko",
    SJ: "Špicberky a Jan Mayen",
    LK: "Šrí Lanka",
    SE: "Švédsko",
    CH: "Švýcarsko",
    TJ: "Tádžikistán",
    TZ: "Tanzanie",
    TH: "Thajsko",
    TW: "Tchaj-wan",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad a Tobago",
    TN: "Tunisko",
    TR: "Turecko",
    TM: "Turkmenistán",
    TC: "Turks a Caicos",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukrajina",
    UY: "Uruguay",
    UZ: "Uzbekistán",
    CX: "Vánoční ostrov",
    VU: "Vanuatu",
    VA: "Vatikán",
    VE: "Venezuela",
    VN: "Vietnam",
    TL: "Východní Timor",
    WF: "Wallis a Futuna",
    ZM: "Zambie",
    EH: "Západní Sahara",
    ZW: "Zimbabwe",
    XK: "Kosov",
};

function from$D(country) {
    return names$C[country] || from$D(Alpha2.from(country));
}
function parse$D(country) {
    const result = Object.entries(names$C).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$C = {
    AF: "Afghanistan",
    AL: "Albanien",
    DZ: "Algeriet",
    AS: "Amerikansk Samoa",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarktis",
    AG: "Antigua og Barbuda",
    AR: "Argentina",
    AM: "Armenien",
    AW: "Aruba",
    AU: "Australien",
    AT: "Østrig",
    AZ: "Aserbajdsjan",
    BS: "Bahamas",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Hviderusland",
    BE: "Belgien",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia",
    BA: "Bosnien-Hercegovina",
    BW: "Botswana",
    BV: "Bouvet Island",
    BR: "Brasilien",
    IO: "British Indian Ocean Territory",
    BN: "Brunei Darussalam",
    BG: "Bulgarien",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Cambodja",
    CM: "Cameroun",
    CA: "Canada",
    CV: "Kap Verde",
    KY: "Caymanøerne",
    CF: "Den Centralafrikanske Republik",
    TD: "Tchad",
    CL: "Chile",
    CN: "Kina",
    CX: "Juløen",
    CC: "Cocosøerne",
    CO: "Colombia",
    KM: "Comorerne",
    CG: "Congo",
    CD: "Demokratiske Republik Congo",
    CK: "Cookøerne",
    CR: "Costa Rica",
    CI: "Elfenbenskysten",
    HR: "Kroatien",
    CU: "Cuba",
    CY: "Cypern",
    CZ: "Tjekkiet",
    DK: "Danmark",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominikanske Republik",
    EC: "Ecuador",
    EG: "Egypten",
    SV: "El Salvador",
    GQ: "Ækvatorialguinea",
    ER: "Eritrea",
    EE: "Estland",
    ET: "Etiopien",
    FK: "Falklandsøerne",
    FO: "Færøerne",
    FJ: "Fiji",
    FI: "Finland",
    FR: "Frankrig",
    GF: "Fransk Guiana",
    PF: "Fransk Polynesien",
    TF: "Franske Sydterritorier",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgien",
    DE: "Tyskland",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Grækenland",
    GL: "Grønland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HM: "Heard-øen og McDonald-øerne",
    VA: "Vatikanstaten",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Ungarn",
    IS: "Island",
    IN: "Indien",
    ID: "Indonesien",
    IR: "Iran",
    IQ: "Irak",
    IE: "Irland",
    IL: "Israel",
    IT: "Italien",
    JM: "Jamaica",
    JP: "Japan",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KP: "Nordkorea",
    KR: "Sydkorea",
    KW: "Kuwait",
    KG: "Kirgisistan",
    LA: "Laos",
    LV: "Letland",
    LB: "Libanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libyen",
    LI: "Liechtenstein",
    LT: "Litauen",
    LU: "Luxembourg",
    MO: "Macao",
    MK: "Makedonien",
    MG: "Madagaskar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldiverne",
    ML: "Mali",
    MT: "Malta",
    MH: "Marshalløerne",
    MQ: "Martinique",
    MR: "Mauretanien",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexico",
    FM: "Mikronesien",
    MD: "Moldova",
    MC: "Monaco",
    MN: "Mongoliet",
    MS: "Montserrat",
    MA: "Marokko",
    MZ: "Mozambique",
    MM: "Myanmar (Burma)",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Holland",
    NC: "Ny Kaledonien",
    NZ: "New Zealand",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Norfolk Island",
    MP: "Nordmarianerne",
    NO: "Norge",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palæstina",
    PA: "Panama",
    PG: "Papua Ny Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Filippinerne",
    PN: "Pitcairn",
    PL: "Polen",
    PT: "Portugal",
    PR: "Puerto Rico",
    QA: "Qatar",
    RE: "Réunion",
    RO: "Rumænien",
    RU: "Rusland",
    RW: "Rwanda",
    SH: "Sankt Helena",
    KN: "Saint Kitts og Nevis",
    LC: "Saint Lucia",
    PM: "Saint-Pierre og Miquelon",
    VC: "Saint Vincent og Grenadinerne",
    WS: "Samoa",
    SM: "San Marino",
    ST: "São Tomé og Príncipe",
    SA: "Saudi-Arabien",
    SN: "Senegal",
    SC: "Seychellerne",
    SL: "Sierra Leone",
    SG: "Singapore",
    SK: "Slovakiet",
    SI: "Slovenien",
    SB: "Salomonøerne",
    SO: "Somalia",
    ZA: "Sydafrika",
    GS: "South Georgia og South Sandwich Islands",
    ES: "Spanien",
    LK: "Sri Lanka",
    SD: "Sudan",
    SR: "Surinam",
    SJ: "Norge Svalbard og Jan Mayen",
    SZ: "Swaziland",
    SE: "Sverige",
    CH: "Schweiz",
    SY: "Syrien",
    TW: "Republikken Kina Taiwan",
    TJ: "Tadsjikistan",
    TZ: "Tanzania",
    TH: "Thailand",
    TL: "Østtimor",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad og Tobago",
    TN: "Tunesien",
    TR: "Tyrkiet",
    TM: "Turkmenistan",
    TC: "Turks- og Caicosøerne",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "Forenede Arabiske Emirater",
    GB: "Storbritannien",
    US: "USA",
    UM: "USA's ydre småøer",
    UY: "Uruguay",
    UZ: "Usbekistan",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Vietnam",
    VG: "Britiske Jomfruøer",
    VI: "Amerikanske Jomfruøer",
    WF: "Wallis og Futuna",
    EH: "Vestsahara",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    AX: "Ålandsøerne",
    BQ: "Nederlandske Antiller",
    CW: "Curaçao",
    GG: "Guernsey",
    IM: "Isle of Man",
    JE: "Jersey",
    ME: "Montenegro",
    BL: "Saint-Barthélemy",
    MF: "Saint Martin (fransk side)",
    RS: "Serbien",
    SX: "Saint Martin (hollandsk side)",
    SS: "Sydsudan",
    XK: "Kosov",
};

function from$C(country) {
    return names$B[country] || from$C(Alpha2.from(country));
}
function parse$C(country) {
    const result = Object.entries(names$B).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$B = {
    AF: "Afghanistan",
    EG: "Ägypten",
    AX: "Åland",
    AL: "Albanien",
    DZ: "Algerien",
    AS: "Amerikanisch-Samoa",
    VI: "Amerikanische Jungferninseln",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarktika",
    AG: "Antigua und Barbuda",
    GQ: "Äquatorialguinea",
    AR: "Argentinien",
    AM: "Armenien",
    AW: "Aruba",
    AZ: "Aserbaidschan",
    ET: "Äthiopien",
    AU: "Australien",
    BS: "Bahamas",
    BH: "Bahrain",
    BD: "Bangladesch",
    BB: "Barbados",
    BY: "Weißrussland",
    BE: "Belgien",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivien",
    BQ: "Bonaire",
    BA: "Bosnien und Herzegowina",
    BW: "Botswana",
    BV: "Bouvetinsel",
    BR: "Brasilien",
    VG: "Britische Jungferninseln",
    IO: "Britisches Territorium im Indischen Ozean",
    BN: "Brunei Darussalam",
    BG: "Bulgarien",
    BF: "Burkina Faso",
    BI: "Burundi",
    CL: "Chile",
    CN: "China",
    CK: "Cookinseln",
    CR: "Costa Rica",
    CI: "Elfenbeinküste",
    CW: "Curaçao",
    DK: "Dänemark",
    DE: "Deutschland",
    DM: "Dominica",
    DO: "Dominikanische Republik",
    DJ: "Dschibuti",
    EC: "Ecuador",
    SV: "El Salvador",
    ER: "Eritrea",
    EE: "Estland",
    FK: "Falklandinseln",
    FO: "Färöer",
    FJ: "Fidschi",
    FI: "Finnland",
    FR: "Frankreich",
    GF: "Französisch-Guayana",
    PF: "Französisch-Polynesien",
    TF: "Französische Süd- und Antarktisgebiete",
    GA: "Gabun",
    GM: "Gambia",
    GE: "Georgien",
    GH: "Ghana",
    GI: "Gibraltar",
    GD: "Grenada",
    GR: "Griechenland",
    GL: "Grönland",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GG: "Guernsey",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HM: "Heard und McDonaldinseln",
    HN: "Honduras",
    HK: "Hongkong",
    IN: "Indien",
    ID: "Indonesien",
    IM: "Insel Man",
    IQ: "Irak",
    IR: "Iran",
    IE: "Irland",
    IS: "Island",
    IL: "Israel",
    IT: "Italien",
    JM: "Jamaika",
    JP: "Japan",
    YE: "Jemen",
    JE: "Jersey",
    JO: "Jordanien",
    KY: "Kaimaninseln",
    KH: "Kambodscha",
    CM: "Kamerun",
    CA: "Kanada",
    CV: "Kap Verde",
    KZ: "Kasachstan",
    QA: "Katar",
    KE: "Kenia",
    KG: "Kirgisistan",
    KI: "Kiribati",
    CC: "Kokosinseln",
    CO: "Kolumbien",
    KM: "Komoren",
    CD: "Kongo",
    KP: "Nordkorea",
    KR: "Südkorea",
    HR: "Kroatien",
    CU: "Kuba",
    KW: "Kuwait",
    LA: "Laos",
    LS: "Lesotho",
    LV: "Lettland",
    LB: "Libanon",
    LR: "Liberia",
    LY: "Libyen",
    LI: "Liechtenstein",
    LT: "Litauen",
    LU: "Luxemburg",
    MO: "Macao",
    MG: "Madagaskar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Malediven",
    ML: "Mali",
    MT: "Malta",
    MA: "Marokko",
    MH: "Marshallinseln",
    MQ: "Martinique",
    MR: "Mauretanien",
    MU: "Mauritius",
    YT: "Mayotte",
    MK: "Mazedonien",
    MX: "Mexiko",
    FM: "Mikronesien",
    MD: "Moldawien",
    MC: "Monaco",
    MN: "Mongolei",
    ME: "Montenegro",
    MS: "Montserrat",
    MZ: "Mosambik",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NC: "Neukaledonien",
    NZ: "Neuseeland",
    NI: "Nicaragua",
    NL: "Niederlande",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    MP: "Nördliche Marianen",
    NF: "Norfolkinsel",
    NO: "Norwegen",
    OM: "Oman",
    AT: "Österreich",
    TL: "Osttimor",
    PK: "Pakistan",
    PS: "Staat Palästina",
    PW: "Palau",
    PA: "Panama",
    PG: "Papua-Neuguinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Philippinen",
    PN: "Pitcairninseln",
    PL: "Polen",
    PT: "Portugal",
    PR: "Puerto Rico",
    TW: "Taiwan",
    CG: "Republik Kongo",
    RE: "Réunion",
    RW: "Ruanda",
    RO: "Rumänien",
    RU: "Russische Föderation",
    BL: "Saint-Barthélemy",
    MF: "Saint-Martin",
    SB: "Salomonen",
    ZM: "Sambia",
    WS: "Samoa",
    SM: "San Marino",
    ST: "São Tomé und Príncipe",
    SA: "Saudi-Arabien",
    SE: "Schweden",
    CH: "Schweiz",
    SN: "Senegal",
    RS: "Serbien",
    SC: "Seychellen",
    SL: "Sierra Leone",
    ZW: "Simbabwe",
    SG: "Singapur",
    SX: "Sint Maarten",
    SK: "Slowakei",
    SI: "Slowenien",
    SO: "Somalia",
    ES: "Spanien",
    LK: "Sri Lanka",
    SH: "St. Helena",
    KN: "St. Kitts und Nevis",
    LC: "St. Lucia",
    PM: "Saint-Pierre und Miquelon",
    VC: "St. Vincent und die Grenadinen",
    ZA: "Südafrika",
    SD: "Sudan",
    GS: "Südgeorgien und die Südlichen Sandwichinseln",
    SS: "Südsudan",
    SR: "Suriname",
    SJ: "Svalbard und Jan Mayen",
    SZ: "Swasiland",
    SY: "Syrien, Arabische Republik",
    TJ: "Tadschikistan",
    TZ: "Tansania, Vereinigte Republik",
    TH: "Thailand",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad und Tobago",
    TD: "Tschad",
    CZ: "Tschechische Republik",
    TN: "Tunesien",
    TR: "Türkei",
    TM: "Turkmenistan",
    TC: "Turks- und Caicosinseln",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    HU: "Ungarn",
    UM: "United States Minor Outlying Islands",
    UY: "Uruguay",
    UZ: "Usbekistan",
    VU: "Vanuatu",
    VA: "Vatikanstadt",
    VE: "Venezuela",
    AE: "Vereinigte Arabische Emirate",
    US: "Vereinigte Staaten von Amerika",
    GB: "Vereinigtes Königreich",
    VN: "Vietnam",
    WF: "Wallis und Futuna",
    CX: "Weihnachtsinsel",
    EH: "Westsahara",
    CF: "Zentralafrikanische Republik",
    CY: "Zypern",
    XK: "Kosov",
};

function from$B(country) {
    return names$A[country] || from$B(Alpha2.from(country));
}
function parse$B(country) {
    const result = Object.entries(names$A).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$A = {
    AF: "Αφγανιστάν",
    AL: "Αλβανία",
    DZ: "Αλγερία",
    AS: "Αμερικανική Σαμόα",
    AD: "Ανδόρρα",
    AO: "Ανγκόλα",
    AI: "Ανγκουίλα",
    AQ: "Ανταρκτική",
    AG: "Αντίγκουα και Μπαρμπούντα",
    AR: "Αργεντινή",
    AM: "Αρμενία",
    AW: "Αρούμπα",
    AU: "Αυστραλία",
    AT: "Αυστρία",
    AZ: "Αζερμπαϊτζάν",
    BS: "Μπαχάμες",
    BH: "Μπαχρέιν",
    BD: "Μπανγκλαντές",
    BB: "Μπαρμπάντος",
    BY: "Λευκορωσία",
    BE: "Βέλγιο",
    BZ: "Μπελίζ",
    BJ: "Μπενίν",
    BM: "Βερμούδες",
    BT: "Μπουτάν",
    BO: "Βολιβία",
    BA: "Βοσνία και Ερζεγοβίνη",
    BW: "Μποτσουάνα",
    BV: "Μπουβέ",
    BR: "Βραζιλία",
    IO: "Βρετανικό Έδαφος Ινδικού Ωκεανού",
    BN: "Σουλτανάτο του Μπρουνέι",
    BG: "Βουλγαρία",
    BF: "Μπουρκίνα Φάσο",
    BI: "Μπουρουντί",
    KH: "Καμπότζη",
    CM: "Καμερούν",
    CA: "Καναδάς",
    CV: "Δημοκρατία του Πράσινου Ακρωτηρίου",
    KY: "Κέιμαν Νήσοι",
    CF: "Κεντροαφρικανική Δημοκρατίαc",
    TD: "Τσάντ",
    CL: "Χιλή",
    CN: "Κίνα",
    CX: "Νήσος των Χριστουγέννων",
    CC: "Νησιά Κόκος",
    CO: "Κολομβία",
    KM: "Ένωση των Κομορών",
    CG: "Δημοκρατία του Κονγκό",
    CD: "Λαϊκή Δημοκρατία του Κονγκό",
    CK: "Νήσοι Κουκ",
    CR: "Κόστα Ρίκα",
    CI: "Ακτή Ελεφαντοστού",
    HR: "Κροατία",
    CU: "Κούβα",
    CY: "Κύπρος",
    CZ: "Τσεχική Δημοκρατία",
    DK: "Δανία",
    DJ: "Τζιμπουτί",
    DM: "Κοινοπολιτεία της Δομινίκας",
    DO: "Δομινικανή Δημοκρατία",
    EC: "Εκουαδόρ",
    EG: "Αίγυπτος",
    SV: "Ελ Σαλβαδόρ",
    GQ: "Ισημερινή-Γουινέα",
    ER: "Κράτος της Ερυθραίας",
    EE: "Εσθονία",
    ET: "Αιθιοπία",
    FK: "Νήσοι Φώκλαντ (Μαλβίνας)",
    FO: "Νήσοι Φερόες",
    FJ: "Δημοκρατία των Φίτζι",
    FI: "Φινλανδία",
    FR: "Γαλλία",
    GF: "Γαλλική Γουιάνα",
    PF: "Γαλλική Πολυνησία",
    TF: "Γαλλικά Νότια και Ανταρκτικά Εδάφη",
    GA: "Γκαμπόν",
    GM: "Γκάμπια",
    GE: "Γεωργία",
    DE: "Γερμανία",
    GH: "Γκάνα",
    GI: "Γιβραλτάρ",
    GR: "Ελλάδα",
    GL: "Γροιλανδία",
    GD: "Γρενάδα",
    GP: "Γουαδελούπη",
    GU: "Γκουάμ",
    GT: "Γουατεμάλα",
    GN: "Γουινέα",
    GW: "Γουινέα-Μπισσάου",
    GY: "Γουιάνα",
    HT: "Αϊτη",
    HM: "Νήσοι Χερντ και Μακντόναλντ",
    VA: "Κράτος της Πόλης του Βατικανού",
    HN: "Ονδούρα",
    HK: "Χονγκ Κόνγκ",
    HU: "Ουγγαρία",
    IS: "Ισλανδία",
    IN: "Ινδία",
    ID: "Ινδονησία",
    IR: "Ισλαμική Δημοκρατία του Ιράν",
    IQ: "Ιράκ",
    IE: "Ιρλανδία",
    IL: "Ισραήλ",
    IT: "Ιταλία",
    JM: "Τζαμάικα",
    JP: "Ιαπωνία",
    JO: "Ιορδανία",
    KZ: "Καζακστάν",
    KE: "Κένυα",
    KI: "Κιριμπάτι",
    KP: "Λαοκρατική Δημοκρατία της Κορέας",
    KR: "Δημοκρατία της Κορέας",
    KW: "Κουβέιτ",
    KG: "Κιργιζία",
    LA: "Λαϊκή Δημοκρατία του Λάος",
    LV: "Λετονία",
    LB: "Λίβανο",
    LS: "Βασίλειο του Λεσότο",
    LR: "Λιβερία",
    LY: "Κράτος της Λιβύης",
    LI: "Πριγκιπάτο του Λίχτενσταϊν",
    LT: "Λιθουανία",
    LU: "Λουξεμβούργο",
    MO: "Μακάου",
    MK: "πρώην Γιουγκοσλαβική Δημοκρατία της Μακεδονίας",
    MG: "Μαδαγασκάρη",
    MW: "Μαλάουι",
    MY: "Μαλαισία",
    MV: "Μαλβίδες",
    ML: "Μαλί",
    MT: "Μάλτα",
    MH: "Νήσοι Μάρσαλ",
    MQ: "Μαρτινίκα",
    MR: "Μαυριτανία",
    MU: "Μαυρίκιος",
    YT: "Μαγιότ",
    MX: "Μεξικό",
    FM: "Ομόσπονδες Πολιτείες της Μικρονησίας",
    MD: "Δημοκρατία της Μολδαβίας",
    MC: "Πριγκιπάτο του Μονακό",
    MN: "Μογγολία",
    MS: "Μοντσερράτ",
    MA: "Μαρόκο",
    MZ: "Μοζαμβίκη",
    MM: "Μιανμάρ",
    NA: "Ναμίμπια",
    NR: "Ναουρού",
    NP: "Νεπάλ",
    NL: "Ολλανδία",
    NC: "Νέα Καληδονία",
    NZ: "Νέα Ζηλανδία",
    NI: "Νικαράγουα",
    NE: "Νίγηρας",
    NG: "Νιγηρία",
    NU: "Νιούε",
    NF: "Νησί Νόρφολκ",
    MP: "Βόρειες Μαριάνες Νήσοι",
    NO: "Νορβηγία",
    OM: "Ομάν",
    PK: "Πακιστάν",
    PW: "Παλάου",
    PS: "Κράτος της Παλαιστίνης",
    PA: "Παναμάς",
    PG: "Παπούα Νέα Γουινέα",
    PY: "Παραγουάη",
    PE: "Περού",
    PH: "Φιλιππίνες",
    PN: "Νήσοι Πίτκαιρν",
    PL: "Πολωνία",
    PT: "Πορτογαλία",
    PR: "Πουέρτο Ρίκο",
    QA: "Κατάρ",
    RE: "Ρεϋνιόν",
    RO: "Ρουμανία",
    RU: "Ρωσική Ομοσπονδία",
    RW: "Ρουάντα",
    SH: "Νήσος Αγίας Ελένης",
    KN: "Ομοσπονδία Αγίου Χριστόφορου και Νέβις",
    LC: "Αγία Λουκία",
    PM: "Σαιν Πιερ και Μικελόν",
    VC: "Άγιος Βικέντιος και Γρεναδίνες",
    WS: "Σαμόα",
    SM: "Άγιος Μαρίνος",
    ST: "Σάο Τομέ και Πρίνσιπε",
    SA: "Σαουδική Αραβία",
    SN: "Σενεγάλη",
    SC: "Σεϋχέλλες",
    SL: "Σιέρα Λεόνε",
    SG: "Σιγκαπούρη",
    SK: "Σλοβακία",
    SI: "Σλοβενία",
    SB: "Νήσοι Σολομώντα",
    SO: "Σομαλία",
    ZA: "Νότια Αφρική",
    GS: "Νότιος Γεωργία και Νότιοι Σάντουιτς Νήσοι",
    ES: "Ισπανία",
    LK: "Σρι Λάνκα",
    SD: "Σουδάν",
    SR: "Σουρινάμ",
    SJ: "Σβάλμπαρντ και Γιαν Μαγιέν",
    SZ: "Σουαζιλάνδη",
    SE: "Σουηδία",
    CH: "Ελβετία",
    SY: "Αραβική Δημοκρατία της Συρίας",
    TW: "Δημοκρατία της Κίνας",
    TJ: "Τατζικιστάν",
    TZ: "Ενωμένη Δημοκρατία της Τανζανίας",
    TH: "Ταϊλάνδη",
    TL: "Ανατολικό Τιμόρ",
    TG: "Τογκό",
    TK: "Τοκελάου",
    TO: "Τόνγκα",
    TT: "Τρινιντάντ και Τομπάγκο",
    TN: "Τυνησία",
    TR: "Τουρκία",
    TM: "Τουρκμενιστάν",
    TC: "Τερκς και Κέικος",
    TV: "Τουβαλού",
    UG: "Ουγκάντα",
    UA: "Ουκρανια",
    AE: "Ηνωμένα Αραβικά Εμιράτα",
    GB: "Ηνωμένο Βασίλειο",
    US: "Ηνωμένες Πολιτείες Αμερικής",
    UM: "Απομακρυσμένες Νησίδες των Ηνωμένων Πολιτειών",
    UY: "Ουρουγουάη",
    UZ: "Ουζμπεκιστάν",
    VU: "Βανουάτου",
    VE: "Βενεζουέλα",
    VN: "Βιετνάμ",
    VG: "Βρετανικές Παρθένοι Νήσοι",
    VI: "Αμερικανικές Παρθένοι Νήσοι",
    WF: "Ουαλίς και Φουτουνά",
    EH: "Δυτική Σαχάρα",
    YE: "Υεμένη",
    ZM: "Ζάμπια",
    ZW: "Ζιμπάμπουε",
    AX: "Νήσοι Ώλαντ",
    BQ: "Μποναίρ, Άγιος Ευστάθιος και Σάμπα",
    CW: "Κουρασάο",
    GG: "Γκουέρνσεϊ",
    IM: "Νήσος του Μαν",
    JE: "Βαϊλάτο του Τζέρσεϊ",
    ME: "Μαυροβούνιο",
    BL: "Άγιος Βαρθολομαίος",
    MF: "Άγιος Μαρτίνος (Γαλλία)",
    RS: "Σερβία",
    SX: "Άγιος Μαρτίνος (Ολλανδία)",
    SS: "Νότιο Σουδάν",
    XK: "Κόσοβ",
};

function from$A(country) {
    return names$z[country] || from$A(Alpha2.from(country));
}
function parse$A(country) {
    const result = Object.entries(names$z).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$z = {
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
    AS: "American Samoa",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarctica",
    AG: "Antigua and Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahamas",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia",
    BA: "Bosnia and Herzegovina",
    BW: "Botswana",
    BV: "Bouvet Island",
    BR: "Brazil",
    IO: "British Indian Ocean Territory",
    BN: "Brunei Darussalam",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Cambodia",
    CM: "Cameroon",
    CA: "Canada",
    CV: "Cape Verde",
    KY: "Cayman Islands",
    CF: "Central African Republic",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CX: "Christmas Island",
    CC: "Cocos (Keeling) Islands",
    CO: "Colombia",
    KM: "Comoros",
    CG: "Congo",
    CD: "Congo, the Democratic Republic of the",
    CK: "Cook Islands",
    CR: "Costa Rica",
    CI: "Cote D'Ivoire",
    HR: "Croatia",
    CU: "Cuba",
    CY: "Cyprus",
    CZ: "Czech Republic",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominican Republic",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    ET: "Ethiopia",
    FK: "Falkland Islands (Malvinas)",
    FO: "Faroe Islands",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GF: "French Guiana",
    PF: "French Polynesia",
    TF: "French Southern Territories",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Germany",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HM: "Heard Island and Mcdonald Islands",
    VA: "Holy See (Vatican City State)",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran, Islamic Republic of",
    IQ: "Iraq",
    IE: "Ireland",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JP: "Japan",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KP: "North Korea",
    KR: "South Korea",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "Lao People's Democratic Republic",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MO: "Macao",
    MK: "Macedonia, the Former Yugoslav Republic of",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Mali",
    MT: "Malta",
    MH: "Marshall Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexico",
    FM: "Micronesia, Federated States of",
    MD: "Moldova, Republic of",
    MC: "Monaco",
    MN: "Mongolia",
    MS: "Montserrat",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands",
    NC: "New Caledonia",
    NZ: "New Zealand",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Norfolk Island",
    MP: "Northern Mariana Islands",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestinian Territory, Occupied",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Philippines",
    PN: "Pitcairn",
    PL: "Poland",
    PT: "Portugal",
    PR: "Puerto Rico",
    QA: "Qatar",
    RE: "Reunion",
    RO: "Romania",
    RU: "Russian Federation",
    RW: "Rwanda",
    SH: "Saint Helena",
    KN: "Saint Kitts and Nevis",
    LC: "Saint Lucia",
    PM: "Saint Pierre and Miquelon",
    VC: "Saint Vincent and the Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Sao Tome and Principe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SG: "Singapore",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    GS: "South Georgia and the South Sandwich Islands",
    ES: "Spain",
    LK: "Sri Lanka",
    SD: "Sudan",
    SR: "Suriname",
    SJ: "Svalbard and Jan Mayen",
    SZ: "Swaziland",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syrian Arab Republic",
    TW: "Taiwan",
    TJ: "Tajikistan",
    TZ: "Tanzania, United Republic of",
    TH: "Thailand",
    TL: "Timor-Leste",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad and Tobago",
    TN: "Tunisia",
    TR: "Turkey",
    TM: "Turkmenistan",
    TC: "Turks and Caicos Islands",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates",
    GB: "United Kingdom",
    US: "United States of America",
    UM: "United States Minor Outlying Islands",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Viet Nam",
    VG: "Virgin Islands, British",
    VI: "Virgin Islands, U.S.",
    WF: "Wallis and Futuna",
    EH: "Western Sahara",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    AX: "Åland Islands",
    BQ: "Bonaire, Sint Eustatius and Saba",
    CW: "Curaçao",
    GG: "Guernsey",
    IM: "Isle of Man",
    JE: "Jersey",
    ME: "Montenegro",
    BL: "Saint Barthélemy",
    MF: "Saint Martin (French part)",
    RS: "Serbia",
    SX: "Sint Maarten (Dutch part)",
    SS: "South Sudan",
    XK: "Kosovo",
};

function from$z(country) {
    return names$y[country] || from$z(Alpha2.from(country));
}
function parse$z(country) {
    const result = Object.entries(names$y).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$y = {
    AF: "Afganistán",
    AL: "Albania",
    DZ: "Argelia",
    AS: "Samoa Americana",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguila",
    AQ: "Antártida",
    AG: "Antigua y Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaiyán",
    BS: "Bahamas",
    BH: "Bahrein",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarús",
    BE: "Bélgica",
    BZ: "Belice",
    BJ: "Benin",
    BM: "Bermudas",
    BT: "Bhután",
    BO: "Bolivia",
    BA: "Bosnia y Herzegovina",
    BW: "Botswana",
    BV: "Isla Bouvet",
    BR: "Brasil",
    IO: "Territorio Británico del Océano Índico",
    BN: "Brunei Darussalam",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Camboya",
    CM: "Camerún",
    CA: "Canadá",
    CV: "Cabo Verde",
    KY: "Islas Caimán",
    CF: "República Centroafricana",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CX: "Isla de Navidad",
    CC: "Islas Cocos (Keeling)",
    CO: "Colombia",
    KM: "Comoras",
    CG: "Congo",
    CD: "Congo (República Democrática del)",
    CK: "Islas Cook",
    CR: "Costa Rica",
    CI: "Costa de Marfil",
    HR: "Croacia",
    CU: "Cuba",
    CY: "Chipre",
    CZ: "República Checa",
    DK: "Dinamarca",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "República Dominicana",
    EC: "Ecuador",
    EG: "Egipto",
    SV: "El Salvador",
    GQ: "Guinea Ecuatorial",
    ER: "Eritrea",
    EE: "Estonia",
    ET: "Etiopía",
    FK: "Islas Malvinas",
    FO: "Islas Feroe",
    FJ: "Fiji",
    FI: "Finlandia",
    FR: "Francia",
    GF: "Guayana Francesa",
    PF: "Polinesia Francesa",
    TF: "Tierras Australes Francesas",
    GA: "Gabón",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Alemania",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Grecia",
    GL: "Groenlandia",
    GD: "Granada",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GN: "Guinea",
    GW: "Guinea Bissau",
    GY: "Guyana",
    HT: "Haití",
    HM: "Heard e Islas McDonald",
    VA: "Santa Sede",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Hungría",
    IS: "Islandia",
    IN: "India",
    ID: "Indonesia",
    IR: "Irán (República Islámica de)",
    IQ: "Iraq",
    IE: "Irlanda",
    IL: "Israel",
    IT: "Italia",
    JM: "Jamaica",
    JP: "Japón",
    JO: "Jordania",
    KZ: "Kazajstán",
    KE: "Kenya",
    KI: "Kiribati",
    KP: "República Popular Democrática de Corea",
    KR: "República de Corea",
    KW: "Kuwait",
    KG: "Kirguistán",
    LA: "República Democrática Popular de Lao",
    LV: "Letonia",
    LB: "Líbano",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libia",
    LI: "Liechtenstein",
    LT: "Lituania",
    LU: "Luxemburgo",
    MO: "Macao",
    MK: "Macedonia",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malasia",
    MV: "Maldivas",
    ML: "Malí",
    MT: "Malta",
    MH: "Islas Marshall",
    MQ: "Martinique",
    MR: "Mauritania",
    MU: "Mauricio",
    YT: "Mayotte",
    MX: "México",
    FM: "Micronesia",
    MD: "Moldavia",
    MC: "Mónaco",
    MN: "Mongolia",
    MS: "Montserrat",
    MA: "Marruecos",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Países Bajos",
    NC: "Nueva Caledonia",
    NZ: "Nueva Zelanda",
    NI: "Nicaragua",
    NE: "Níger",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Isla Norfolk",
    MP: "Isla Marianas del Norte",
    NO: "Noruega",
    OM: "Omán",
    PK: "Pakistán",
    PW: "Palau",
    PS: "Palestina",
    PA: "Panamá",
    PG: "Papua Nueva Guinea",
    PY: "Paraguay",
    PE: "Perú",
    PH: "Filipinas",
    PN: "Pitcairn",
    PL: "Polonia",
    PT: "Portugal",
    PR: "Puerto Rico",
    QA: "Qatar",
    RE: "Reunión",
    RO: "Rumania",
    RU: "Rusia",
    RW: "Rwanda",
    SH: "Santa Helena, Ascensión y Tristán de Acuña",
    KN: "Saint Kitts y Nevis",
    LC: "Santa Lucía",
    PM: "San Pedro y Miquelón",
    VC: "San Vicente y las Granadinas",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Santo Tomé y Príncipe",
    SA: "Arabia Saudita",
    SN: "Senegal",
    SC: "Seychelles",
    SL: "Sierra Leona",
    SG: "Singapur",
    SK: "Eslovaquia",
    SI: "Eslovenia",
    SB: "Islas Salomón",
    SO: "Somalia",
    ZA: "Sudáfrica",
    GS: "Georgia del Sur y las Islas Sandwich del Sur",
    ES: "España",
    LK: "Sri Lanka",
    SD: "Sudan",
    SR: "Suriname",
    SJ: "Svalbard y Jan Mayen",
    SZ: "Swazilandia",
    SE: "Suecia",
    CH: "Suiza",
    SY: "República Árabe Siria",
    TW: "Taiwán",
    TJ: "Tayikistán",
    TZ: "Tanzania",
    TH: "Tailandia",
    TL: "Timor-Leste",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad y Tobago",
    TN: "Túnez",
    TR: "Turquía",
    TM: "Turkmenistán",
    TC: "Islas Turcas y Caicos",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ucrania",
    AE: "Emiratos Árabes Unidos",
    GB: "Reino Unido",
    US: "Estados Unidos",
    UM: "Islas Ultramarinas Menores de los Estados Unidos",
    UY: "Uruguay",
    UZ: "Uzbekistán",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Vietnam",
    VG: "Islas Vírgenes británicas",
    VI: "Islas Vírgenes de los Estados Unidos",
    WF: "Wallis y Futuna",
    EH: "Sahara Occidental",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    AX: "Islas Åland",
    BQ: "Bonaire, San Eustaquio y Saba",
    CW: "Curaçao",
    GG: "Guernsey",
    IM: "Isla de Man",
    JE: "Jersey",
    ME: "Montenegro",
    BL: "Saint Barthélemy",
    MF: "Saint Martin (francesa)",
    RS: "Serbia",
    SX: "Sint Maarten (neerlandesa)",
    SS: "Sudán del Sur",
    XK: "Kosov",
};

function from$y(country) {
    return names$x[country] || from$y(Alpha2.from(country));
}
function parse$y(country) {
    const result = Object.entries(names$x).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$x = {
    AF: "Afganistan",
    AX: "Ahvenamaa",
    AL: "Albaania",
    DZ: "Alžeeria",
    AS: "Ameerika Samoa",
    US: "Ameerika Ühendriigid",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarktis",
    AG: "Antigua ja Barbuda",
    MO: "Aomen - Hiina erihalduspiirkond",
    AE: "Araabia Ühendemiraadid",
    AR: "Argentina",
    AM: "Armeenia",
    AW: "Aruba",
    AZ: "Aserbaidžaan",
    AU: "Austraalia",
    AT: "Austria",
    BS: "Bahama",
    BH: "Bahrein",
    BD: "Bangladesh",
    BB: "Barbados",
    PW: "Belau",
    BE: "Belgia",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Boliivia",
    BA: "Bosnia ja Hertsegoviina",
    BW: "Botswana",
    BV: "Bouvet’i saar",
    BR: "Brasiilia",
    BQ: "Bonaire, Sint Eustatius ja Saba",
    IO: "Briti India ookeani ala",
    VG: "Briti Neitsisaared",
    BN: "Brunei",
    BG: "Bulgaaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    CO: "Colombia",
    CK: "Cooki saared",
    CR: "Costa Rica",
    CI: "Côte d'Ivoire",
    CW: "Curaçao",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominikaani Vabariik",
    EC: "Ecuador",
    EE: "Eesti",
    EG: "Egiptus",
    GQ: "Ekvatoriaal-Guinea",
    SV: "El Salvador",
    ER: "Eritrea",
    ET: "Etioopia",
    FK: "Falklandi saared",
    FJ: "Fidži",
    PH: "Filipiinid",
    FO: "Fääri saared",
    GA: "Gabon",
    GM: "Gambia",
    GH: "Ghana",
    GI: "Gibraltar",
    GD: "Grenada",
    GE: "Gruusia",
    GL: "Gröönimaa",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GG: "Guernsey",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HM: "Heard ja McDonald saared",
    CN: "Hiina",
    ES: "Hispaania",
    NL: "Holland",
    HN: "Honduras",
    HK: "Hongkong - Hiina erihalduspiirkond",
    HR: "Horvaatia",
    TL: "Ida-Timor",
    IE: "Iirimaa",
    IL: "Iisrael",
    IN: "India",
    ID: "Indoneesia",
    IQ: "Iraak",
    IR: "Iraan",
    IS: "Island",
    IT: "Itaalia",
    JP: "Jaapan",
    JM: "Jamaica",
    YE: "Jeemen",
    JE: "Jersey",
    JO: "Jordaania",
    CX: "Jõulusaar",
    KY: "Kaimanisaared",
    KH: "Kambodža",
    CM: "Kamerun",
    CA: "Kanada",
    KZ: "Kasahstan",
    QA: "Katar",
    KE: "Kenya",
    CF: "Kesk-Aafrika Vabariik",
    KI: "Kiribati",
    KM: "Komoorid",
    CD: "Kongo DV",
    CG: "Kongo-Brazzaville",
    CC: "Kookossaared",
    GR: "Kreeka",
    CU: "Kuuba",
    KW: "Kuveit",
    KG: "Kõrgõzstan",
    CY: "Küpros",
    LA: "Laos",
    LT: "Leedu",
    LS: "Lesotho",
    LR: "Libeeria",
    LI: "Liechtenstein",
    LB: "Liibanon",
    LY: "Liibüa",
    LU: "Luksemburg",
    ZA: "Lõuna-Aafrika Vabariik",
    GS: "Lõuna-Georgia ja Lõuna-Sandwichi saared",
    KR: "Lõuna-Korea",
    LV: "Läti",
    EH: "Lääne-Sahara",
    MG: "Madagaskar",
    MK: "Makedoonia",
    MY: "Malaisia",
    MW: "Malawi",
    MV: "Maldiivid",
    ML: "Mali",
    MT: "Malta",
    IM: "Mani saar",
    MA: "Maroko",
    MH: "Marshalli saared",
    MQ: "Martinique",
    MR: "Mauritaania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mehhiko",
    FM: "Mikroneesia Liiduriigid",
    MD: "Moldova",
    MC: "Monaco",
    MN: "Mongoolia",
    ME: "Montenegro",
    MS: "Montserrat",
    MZ: "Mosambiik",
    MM: "Myanmar",
    NA: "Namiibia",
    NR: "Nauru",
    NP: "Nepal",
    NI: "Nicaragua",
    NG: "Nigeeria",
    NE: "Niger",
    NU: "Niue",
    NF: "Norfolk",
    NO: "Norra",
    OM: "Omaan",
    PG: "Paapua Uus-Guinea",
    PK: "Pakistan",
    PS: "Palestiina ala",
    PA: "Panama",
    PY: "Paraguay",
    PE: "Peruu",
    PN: "Pitcairn",
    PL: "Poola",
    PT: "Portugal",
    GF: "Prantsuse Guajaana",
    TF: "Prantsuse Lõunaalad",
    PF: "Prantsuse Polüneesia",
    FR: "Prantsusmaa",
    PR: "Puerto Rico",
    KP: "Põhja-Korea",
    MP: "Põhja-Mariaanid",
    RE: "Réunion",
    CV: "Roheneemesaared",
    SE: "Rootsi",
    SX: "Sint Maarten",
    RO: "Rumeenia",
    RW: "Rwanda",
    SB: "Saalomoni Saared",
    BL: "Saint Barthélemy",
    SH: "Saint Helena",
    KN: "Saint Kitts ja Nevis",
    LC: "Saint Lucia",
    MF: "Saint Martin",
    PM: "Saint Pierre ja Miquelon",
    VC: "Saint Vincent ja Grenadiinid",
    DE: "Saksamaa",
    ZM: "Sambia",
    WS: "Samoa",
    SM: "San Marino",
    ST: "São Tomé ja Príncipe",
    SA: "Saudi Araabia",
    SC: "Seišellid",
    SN: "Senegal",
    RS: "Serbia",
    SL: "Sierra Leone",
    SG: "Singapur",
    SK: "Slovakkia",
    SI: "Sloveenia",
    SO: "Somaalia",
    FI: "Soome",
    LK: "Sri Lanka",
    SD: "Sudaan",
    SS: "Lõuna-Sudaan",
    SR: "Suriname",
    GB: "Suurbritannia",
    SZ: "Svaasimaa",
    SJ: "Svalbard ja Jan Mayen",
    SY: "Süüria",
    CH: "Šveits",
    ZW: "Zimbabwe",
    DK: "Taani",
    TJ: "Tadžikistan",
    TH: "Tai",
    TW: "Taiwan",
    TZ: "Tansaania",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad ja Tobago",
    TD: "Tšaad",
    CZ: "Tšehhi",
    CL: "Tšiili",
    TN: "Tuneesia",
    TC: "Turks ja Caicos",
    TV: "Tuvalu",
    TR: "Türgi",
    TM: "Türkmenistan",
    UG: "Uganda",
    UA: "Ukraina",
    HU: "Ungari",
    UY: "Uruguay",
    VI: "USA Neitsisaared",
    UZ: "Usbekistan",
    NC: "Uus-Kaledoonia",
    NZ: "Uus-Meremaa",
    BY: "Valgevene",
    WF: "Wallis ja Futuna",
    VU: "Vanuatu",
    VA: "Vatikan",
    RU: "Venemaa",
    VE: "Venezuela",
    VN: "Vietnam",
    UM: "Ühendriikide hajasaared",
    XK: "Kosov",
};

function from$x(country) {
    return names$w[country] || from$x(Alpha2.from(country));
}
function parse$x(country) {
    const result = Object.entries(names$w).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$w = {
    AD: "آندورا",
    AE: "امارات متحدهٔ عربی",
    AF: "افغانستان",
    AG: "آنتیگوا و باربودا",
    AI: "آنگویلا",
    AL: "آلبانی",
    AM: "ارمنستان",
    AO: "آنگولا",
    AQ: "جنوبگان",
    AR: "آرژانتین",
    AS: "ساموآی امریکا",
    AT: "اتریش",
    AU: "استرالیا",
    AW: "آروبا",
    AX: "جزایر آلاند",
    AZ: "جمهوری آذربایجان",
    BA: "بوسنی و هرزگوین",
    BB: "باربادوس",
    BD: "بنگلادش",
    BE: "بلژیک",
    BF: "بورکینافاسو",
    BG: "بلغارستان",
    BH: "بحرین",
    BI: "بوروندی",
    BJ: "بنین",
    BL: "سن بارتلمی",
    BM: "برمودا",
    BN: "برونئی",
    BO: "بولیوی",
    BQ: "جزایر کارائیب هلند",
    BR: "برزیل",
    BS: "باهاما",
    BT: "بوتان",
    BV: "جزیرهٔ بووه",
    BW: "بوتسوانا",
    BY: "بلاروس",
    BZ: "بلیز",
    CA: "کانادا",
    CC: "جزایر کوکوس",
    CD: "کنگو - کینشاسا",
    CF: "جمهوری افریقای مرکزی",
    CG: "کنگو - برازویل",
    CH: "سوئیس",
    CI: "ساحل عاج",
    CK: "جزایر کوک",
    CL: "شیلی",
    CM: "کامرون",
    CN: "چین",
    CO: "کلمبیا",
    CR: "کاستاریکا",
    CU: "کوبا",
    CV: "کیپ‌ورد",
    CW: "کوراسائو",
    CX: "جزیرهٔ کریسمس",
    CY: "قبرس",
    CZ: "جمهوری چک",
    DE: "آلمان",
    DJ: "جیبوتی",
    DK: "دانمارک",
    DM: "دومینیکا",
    DO: "جمهوری دومینیکن",
    DZ: "الجزایر",
    EC: "اکوادور",
    EE: "استونی",
    EG: "مصر",
    EH: "صحرای غربی",
    ER: "اریتره",
    ES: "اسپانیا",
    ET: "اتیوپی",
    FI: "فنلاند",
    FJ: "فیجی",
    FK: "جزایر فالکلند",
    FM: "میکرونزی",
    FO: "جزایر فارو",
    FR: "فرانسه",
    GA: "گابن",
    GB: "بریتانیا",
    GD: "گرنادا",
    GE: "گرجستان",
    GF: "گویان فرانسه",
    GG: "گرنزی",
    GH: "غنا",
    GI: "جبل‌الطارق",
    GL: "گرینلند",
    GM: "گامبیا",
    GN: "گینه",
    GP: "گوادلوپ",
    GQ: "گینهٔ استوایی",
    GR: "یونان",
    GS: "جزایر جورجیای جنوبی و ساندویچ جنوبی",
    GT: "گواتمالا",
    GU: "گوام",
    GW: "گینهٔ بیسائو",
    GY: "گویان",
    HK: "هنگ‌کنگ",
    HM: "جزیرهٔ هرد و جزایر مک‌دونالد",
    HN: "هندوراس",
    HR: "کرواسی",
    HT: "هائیتی",
    HU: "مجارستان",
    ID: "اندونزی",
    IE: "ایرلند",
    IL: "اسرائیل",
    IM: "جزیرهٔ من",
    IN: "هند",
    IO: "قلمرو بریتانیا در اقیانوس هند",
    IQ: "عراق",
    IR: "ایران",
    IS: "ایسلند",
    IT: "ایتالیا",
    JE: "جرزی",
    JM: "جامائیکا",
    JO: "اردن",
    JP: "ژاپن",
    KE: "کنیا",
    KG: "قرقیزستان",
    KH: "کامبوج",
    KI: "کیریباتی",
    KM: "کومورو",
    KN: "سنت کیتس و نویس",
    KP: "کرهٔ شمالی",
    KR: "کرهٔ جنوبی",
    KW: "کویت",
    KY: "جزایر کِیمن",
    KZ: "قزاقستان",
    LA: "لائوس",
    LB: "لبنان",
    LC: "سنت لوسیا",
    LI: "لیختن‌اشتاین",
    LK: "سری‌لانکا",
    LR: "لیبریا",
    LS: "لسوتو",
    LT: "لیتوانی",
    LU: "لوکزامبورگ",
    LV: "لتونی",
    LY: "لیبی",
    MA: "مراکش",
    MC: "موناکو",
    MD: "مولداوی",
    ME: "مونته‌نگرو",
    MF: "سنت مارتین",
    MG: "ماداگاسکار",
    MH: "جزایر مارشال",
    MK: "مقدونیه",
    ML: "مالی",
    MM: "میانمار (برمه)",
    MN: "مغولستان",
    MO: "ماکائو",
    MP: "جزایر ماریانای شمالی",
    MQ: "مارتینیک",
    MR: "موریتانی",
    MS: "مونت‌سرات",
    MT: "مالت",
    MU: "موریس",
    MV: "مالدیو",
    MW: "مالاوی",
    MX: "مکزیک",
    MY: "مالزی",
    MZ: "موزامبیک",
    NA: "نامیبیا",
    NC: "کالدونیای جدید",
    NE: "نیجر",
    NF: "جزیرهٔ نورفولک",
    NG: "نیجریه",
    NI: "نیکاراگوئه",
    NL: "هلند",
    NO: "نروژ",
    NP: "نپال",
    NR: "نائورو",
    NU: "نیوئه",
    NZ: "نیوزیلند",
    OM: "عمان",
    PA: "پاناما",
    PE: "پرو",
    PF: "پلی‌نزی فرانسه",
    PG: "پاپوا گینهٔ نو",
    PH: "فیلیپین",
    PK: "پاکستان",
    PL: "لهستان",
    PM: "سن پیر و میکلن",
    PN: "جزایر پیت‌کرن",
    PR: "پورتوریکو",
    PS: "سرزمین‌های فلسطینی",
    PT: "پرتغال",
    PW: "پالائو",
    PY: "پاراگوئه",
    QA: "قطر",
    RE: "رئونیون",
    RO: "رومانی",
    RS: "صربستان",
    RU: "روسیه",
    RW: "رواندا",
    SA: "عربستان سعودی",
    SB: "جزایر سلیمان",
    SC: "سیشل",
    SD: "سودان",
    SE: "سوئد",
    SG: "سنگاپور",
    SH: "سنت هلن",
    SI: "اسلوونی",
    SJ: "اسوالبارد و جان‌ماین",
    SK: "اسلواکی",
    SL: "سیرالئون",
    SM: "سان‌مارینو",
    SN: "سنگال",
    SO: "سومالی",
    SR: "سورینام",
    SS: "سودان جنوبی",
    ST: "سائوتومه و پرینسیپ",
    SV: "السالوادور",
    SX: "سنت مارتن",
    SY: "سوریه",
    SZ: "سوازیلند",
    TC: "جزایر تورکس و کایکوس",
    TD: "چاد",
    TF: "قلمروهای جنوبی فرانسه",
    TG: "توگو",
    TH: "تایلند",
    TJ: "تاجیکستان",
    TK: "توکلائو",
    TL: "تیمور-لسته",
    TM: "ترکمنستان",
    TN: "تونس",
    TO: "تونگا",
    TR: "ترکیه",
    TT: "ترینیداد و توباگو",
    TV: "تووالو",
    TW: "تایوان",
    TZ: "تانزانیا",
    UA: "اوکراین",
    UG: "اوگاندا",
    UM: "جزایر دورافتادهٔ ایالات متحده",
    US: "ایالات متحده",
    UY: "اروگوئه",
    UZ: "ازبکستان",
    VA: "واتیکان",
    VC: "سنت وینسنت و گرنادین",
    VE: "ونزوئلا",
    VG: "جزایر ویرجین بریتانیا",
    VI: "جزایر ویرجین ایالات متحده",
    VN: "ویتنام",
    VU: "وانواتو",
    WF: "والیس و فوتونا",
    WS: "ساموآ",
    XK: "کوزوو",
    YE: "یمن",
    YT: "مایوت",
    ZA: "افریقای جنوبی",
    ZM: "زامبیا",
    ZW: "زیمبابو",
};

function from$w(country) {
    return names$v[country] || from$w(Alpha2.from(country));
}
function parse$w(country) {
    const result = Object.entries(names$v).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$v = {
    AF: "Afganistan",
    AX: "Ahvenanmaa",
    NL: "Alankomaat",
    AL: "Albania",
    DZ: "Algeria",
    AS: "Amerikan Samoa",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarktis",
    AG: "Antigua ja Barbuda",
    AE: "Arabiemiirikunnat",
    AR: "Argentiina",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AZ: "Azerbaidžan",
    BS: "Bahama",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BE: "Belgia",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia",
    BQ: "Bonaire, Sint Eustatius ja Saba",
    BA: "Bosnia ja Hertsegovina",
    BW: "Botswana",
    BV: "Bouvet’nsaari",
    BR: "Brasilia",
    IO: "Brittiläinen Intian valtameren alue",
    VG: "Brittiläiset Neitsytsaaret",
    BN: "Brunei",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KY: "Caymansaaret",
    CL: "Chile",
    CK: "Cookinsaaret",
    CR: "Costa Rica",
    CW: "Curaçao",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominikaaninen tasavalta",
    EC: "Ecuador",
    EG: "Egypti",
    SV: "El Salvador",
    ER: "Eritrea",
    ES: "Espanja",
    ET: "Etiopia",
    ZA: "Etelä-Afrikka",
    GS: "Etelä-Georgia ja Eteläiset Sandwichsaaret",
    SS: "Etelä-Sudan",
    FK: "Falklandinsaaret",
    FO: "Färsaaret",
    FJ: "Fidži",
    PH: "Filippiinit",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgia",
    GH: "Ghana",
    GI: "Gibraltar",
    GD: "Grenada",
    GL: "Grönlanti",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GG: "Guernsey",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HM: "Heard ja McDonaldinsaaret",
    HN: "Honduras",
    HK: "Hongkong",
    ID: "Indonesia",
    IN: "Intia",
    IQ: "Irak",
    IR: "Iran",
    IE: "Irlanti",
    IS: "Islanti",
    IL: "Israel",
    IT: "Italia",
    TL: "Itä-Timor",
    AT: "Itävalta",
    JM: "Jamaika",
    JP: "Japani",
    YE: "Jemen",
    JE: "Jersey",
    JO: "Jordania",
    CX: "Joulusaari",
    KH: "Kambodža",
    CM: "Kamerun",
    CA: "Kanada",
    CV: "Kap Verde",
    KZ: "Kazakstan",
    KE: "Kenia",
    CF: "Keski-Afrikan tasavalta",
    CN: "Kiina",
    KG: "Kirgisia",
    KI: "Kiribati",
    CO: "Kolumbia",
    KM: "Komorit",
    CD: "Kongon demokraattinen tasavalta",
    CG: "Kongon tasavalta",
    CC: "Kookossaaret",
    KP: "Korean demokraattinen kansantasavalta",
    KR: "Korean tasavalta",
    GR: "Kreikka",
    HR: "Kroatia",
    CU: "Kuuba",
    KW: "Kuwait",
    CY: "Kypros",
    LA: "Laos",
    LV: "Latvia",
    LS: "Lesotho",
    LB: "Libanon",
    LR: "Liberia",
    LY: "Libya",
    LI: "Liechtenstein",
    LT: "Liettua",
    LU: "Luxemburg",
    EH: "Länsi-Sahara",
    MO: "Macao",
    MG: "Madagaskar",
    MK: "Makedonia",
    MW: "Malawi",
    MV: "Malediivit",
    MY: "Malesia",
    ML: "Mali",
    MT: "Malta",
    IM: "Mansaari",
    MA: "Marokko",
    MH: "Marshallinsaaret",
    MQ: "Martinique",
    MR: "Mauritania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Meksiko",
    FM: "Mikronesian liittovaltio",
    MD: "Moldova",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat",
    MZ: "Mosambik",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Norfolkinsaari",
    NO: "Norja",
    CI: "Norsunluurannikko",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestiina",
    PA: "Panama",
    PG: "Papua-Uusi-Guinea",
    PY: "Paraguay",
    PE: "Peru",
    MP: "Pohjois-Mariaanit",
    PN: "Pitcairn",
    PT: "Portugali",
    PR: "Puerto Rico",
    PL: "Puola",
    GQ: "Päiväntasaajan Guinea",
    QA: "Qatar",
    FR: "Ranska",
    TF: "Ranskan eteläiset alueet",
    GF: "Ranskan Guayana",
    PF: "Ranskan Polynesia",
    RE: "Réunion",
    RO: "Romania",
    RW: "Ruanda",
    SE: "Ruotsi",
    BL: "Saint-Barthélemy",
    SH: "Saint Helena",
    KN: "Saint Kitts ja Nevis",
    LC: "Saint Lucia",
    MF: "Saint-Martin",
    PM: "Saint-Pierre ja Miquelon",
    VC: "Saint Vincent ja Grenadiinit",
    DE: "Saksa",
    SB: "Salomonsaaret",
    ZM: "Sambia",
    WS: "Samoa",
    SM: "San Marino",
    ST: "São Tomé ja Príncipe",
    SA: "Saudi-Arabia",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychellit",
    SL: "Sierra Leone",
    SG: "Singapore",
    SX: "Sint Maarten",
    SK: "Slovakia",
    SI: "Slovenia",
    SO: "Somalia",
    LK: "Sri Lanka",
    SD: "Sudan",
    FI: "Suomi",
    SR: "Suriname",
    SJ: "Svalbard ja Jan Mayen",
    SZ: "Swazimaa",
    CH: "Sveitsi",
    SY: "Syyria",
    TJ: "Tadžikistan",
    TW: "Taiwan",
    TZ: "Tansania",
    DK: "Tanska",
    TH: "Thaimaa",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad ja Tobago",
    TD: "Tšad",
    CZ: "Tšekki",
    TN: "Tunisia",
    TR: "Turkki",
    TM: "Turkmenistan",
    TC: "Turks- ja Caicossaaret",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraina",
    HU: "Unkari",
    UY: "Uruguay",
    NC: "Uusi-Kaledonia",
    NZ: "Uusi-Seelanti",
    UZ: "Uzbekistan",
    BY: "Valko-Venäjä",
    VU: "Vanuatu",
    VA: "Vatikaanivaltio",
    VE: "Venezuela",
    RU: "Venäjä",
    VN: "Vietnam",
    EE: "Viro",
    WF: "Wallis ja Futunasaaret",
    GB: "Yhdistynyt kuningaskunta",
    US: "Yhdysvallat",
    VI: "Yhdysvaltain Neitsytsaaret",
    UM: "Yhdysvaltain pienet erillissaaret",
    ZW: "Zimbabwe",
    XK: "Kosov",
};

function from$v(country) {
    return names$u[country] || from$v(Alpha2.from(country));
}
function parse$v(country) {
    const result = Object.entries(names$u).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$u = {
    AF: "Afghanistan",
    AL: "Albanie",
    DZ: "Algérie",
    AS: "Samoa américaine",
    AD: "Andorre",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarctique",
    AG: "Antigua et Barbuda",
    AR: "Argentine",
    AM: "Arménie",
    AW: "Aruba",
    AU: "Australie",
    AT: "Autriche",
    AZ: "Azerbaidjan",
    BS: "Bahamas",
    BH: "Bahrein",
    BD: "Bangladesh",
    BB: "Barbade",
    BY: "Bielorussie",
    BE: "Belgique",
    BZ: "Belize",
    BJ: "Bénin",
    BM: "Bermudes",
    BT: "Bhoutan",
    BO: "Bolivie",
    BA: "Bosnie-Herzégovine",
    BW: "Botswana",
    BV: "Île Bouvet",
    BR: "Brésil",
    IO: "Océan Indien Britannique",
    BN: "Brunei Darussalam",
    BG: "Bulgarie",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Cambodge",
    CM: "Cameroun",
    CA: "Canada",
    CV: "Cap-Vert",
    KY: "Caïmanes",
    CF: "Centrafricaine, République",
    TD: "Tchad",
    CL: "Chili",
    CN: "Chine",
    CX: "Île Christmas",
    CC: "Cocos",
    CO: "Colombie",
    KM: "Comores",
    CG: "Congo, République populaire",
    CD: "Congo, République démocratique",
    CK: "Îles Cook",
    CR: "Costa Rica",
    CI: "Côte-d'Ivoire",
    HR: "Croatie",
    CU: "Cuba",
    CY: "Chypre",
    CZ: "Tchéquie",
    DK: "Danemark",
    DJ: "Djibouti",
    DM: "Dominique",
    DO: "République Dominicaine",
    EC: "Équateur",
    EG: "Égypte",
    SV: "El Salvador",
    GQ: "Guinée équatoriale",
    ER: "Érythrée",
    EE: "Estonie",
    ET: "Éthiopie",
    FK: "Îles Malouines",
    FO: "Îles Féroé",
    FJ: "Fidji",
    FI: "Finlande",
    FR: "France",
    GF: "Guyane française",
    PF: "Polynésie française",
    TF: "Terres australes françaises",
    GA: "Gabon",
    GM: "Gambie",
    GE: "Géorgie",
    DE: "Allemagne",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Grèce",
    GL: "Groenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GN: "Guinée",
    GW: "Guinée-Bissau",
    GY: "Guyana",
    HT: "Haïti",
    HM: "Îles Heard-et-MacDonald",
    VA: "Saint-Siège",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Hongrie",
    IS: "Islande",
    IN: "Inde",
    ID: "Indonésie",
    IR: "Iran",
    IQ: "Irak",
    IE: "Irlande",
    IL: "Israël",
    IT: "Italie",
    JM: "Jamaïque",
    JP: "Japon",
    JO: "Jordanie",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KP: "Corée du Nord, République populaire démocratique",
    KR: "Corée du Sud, République",
    KW: "Koweit",
    KG: "Kirghistan",
    LA: "Laos",
    LV: "Lettonie",
    LB: "Liban",
    LS: "Lesotho",
    LR: "Libéria",
    LY: "Libye",
    LI: "Liechtenstein",
    LT: "Lituanie",
    LU: "Luxembourg, Grand-Duché",
    MO: "Macao",
    MK: "Macédoine, Ex-République yougoslave",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaisie",
    MV: "Maldives",
    ML: "Mali",
    MT: "Malte",
    MH: "Îles Marshall",
    MQ: "Martinique",
    MR: "Mauritanie",
    MU: "Maurice",
    YT: "Mayotte",
    MX: "Mexique",
    FM: "Micronésie",
    MD: "Moldavie",
    MC: "Monaco",
    MN: "Mongolie",
    MS: "Montserrat",
    MA: "Maroc",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibie",
    NR: "Nauru",
    NP: "Népal",
    NL: "Pays-Bas",
    NC: "Nouvelle-Calédonie",
    NZ: "Nouvelle-Zélande",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigéria",
    NU: "Niué",
    NF: "Île Norfolk",
    MP: "Mariannes du Nord",
    NO: "Norvège",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestine",
    PA: "Panama",
    PG: "Papouasie-Nouvelle-Guinée",
    PY: "Paraguay",
    PE: "Pérou",
    PH: "Philippines",
    PN: "Pitcairn",
    PL: "Pologne",
    PT: "Portugal",
    PR: "Porto Rico",
    QA: "Qatar",
    RE: "Réunion",
    RO: "Roumanie",
    RU: "Russie",
    RW: "Rwanda",
    SH: "Sainte-Hélène",
    KN: "Saint-Christophe-et-Niévès",
    LC: "Sainte-Lucie",
    PM: "Saint Pierre and Miquelon",
    VC: "Saint-Vincent et les Grenadines",
    WS: "Samoa",
    SM: "Saint-Marin",
    ST: "São Tomé et Principe",
    SA: "Arabie Saoudite",
    SN: "Sénégal",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SG: "Singapour",
    SK: "Slovaquie",
    SI: "Slovénie",
    SB: "Salomon",
    SO: "Somalie",
    ZA: "Afrique du Sud",
    GS: "Géorgie du Sud-et-les Îles Sandwich du Sud",
    ES: "Espagne",
    LK: "Sri Lanka",
    SD: "Soudan",
    SR: "Suriname",
    SJ: "Svalbard et Île Jan Mayen",
    SZ: "Ngwane, Royaume du Swaziland",
    SE: "Suède",
    CH: "Suisse",
    SY: "Syrie",
    TW: "Taïwan",
    TJ: "Tadjikistan",
    TZ: "Tanzanie, République unie",
    TH: "Thaïlande",
    TL: "Timor Leste",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad et Tobago",
    TN: "Tunisie",
    TR: "Turquie",
    TM: "Turkménistan",
    TC: "Îles Turques-et-Caïques",
    TV: "Tuvalu",
    UG: "Ouganda",
    UA: "Ukraine",
    AE: "Émirats Arabes Unis",
    GB: "Royaume-Uni",
    US: "États-Unis d'Amérique",
    UM: "Îles mineures éloignées des États-Unis",
    UY: "Uruguay",
    UZ: "Ouzbékistan",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Vietnam",
    VG: "Îles vierges britanniques",
    VI: "Îles vierges américaines",
    WF: "Wallis et Futuna",
    EH: "Sahara occidental",
    YE: "Yémen",
    ZM: "Zambie",
    ZW: "Zimbabwe",
    AX: "Åland",
    BQ: "Bonaire, Saint-Eustache et Saba",
    CW: "Curaçao",
    GG: "Guernesey",
    IM: "Île de Man",
    JE: "Jersey",
    ME: "Monténégro",
    BL: "Saint-Barthélemy",
    MF: "Saint-Martin (partie française)",
    RS: "Serbie",
    SX: "Saint-Martin (partie néerlandaise)",
    SS: "Sud-Soudan",
    XK: "Kosov",
};

function from$u(country) {
    return names$t[country] || from$u(Alpha2.from(country));
}
function parse$u(country) {
    const result = Object.entries(names$t).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$t = {
    AF: "אפגניסטן",
    AX: "איי אולנד",
    AL: "אלבניה",
    DZ: "אלג׳יריה",
    AS: "סמואה האמריקנית",
    AD: "אנדורה",
    AO: "אנגולה",
    AI: "אנגילה",
    AQ: "אנטארקטיקה",
    AG: "אנטיגואה וברבודה",
    AR: "ארגנטינה",
    AM: "ארמניה",
    AW: "ארובה",
    AU: "אוסטרליה",
    AT: "אוסטריה",
    AZ: "אזרבייג׳ן",
    BS: "איי בהאמה",
    BH: "בחריין",
    BD: "בנגלדש",
    BB: "ברבדוס",
    BY: "בלארוס",
    BE: "בלגיה",
    BZ: "בליז",
    BJ: "בנין",
    BM: "ברמודה",
    BT: "בהוטן",
    BO: "בוליביה",
    BQ: "האיים הקריביים ההולנדיים",
    BA: "בוסניה והרצגובינה",
    BW: "בוצוואנה",
    BV: "איי בובה",
    BR: "ברזיל",
    IO: "הטריטוריה הבריטית באוקיינוס ההודי",
    BN: "ברוניי",
    BG: "בולגריה",
    BF: "בורקינה פאסו",
    BI: "בורונדי",
    KH: "קמבודיה",
    CM: "קמרון",
    CA: "קנדה",
    CV: "כף ורדה",
    KY: "איי קיימן",
    CF: "הרפובליקה של מרכז אפריקה",
    TD: "צ׳אד",
    CL: "צ׳ילה",
    CN: "סין",
    CX: "האי כריסטמס",
    CC: "איי קוקוס (קילינג)",
    CO: "קולומביה",
    KM: "קומורו",
    CG: "קונגו - ברזאויל",
    CD: "קונגו - קינשאסה",
    CK: "איי קוק",
    CR: "קוסטה ריקה",
    CI: "חוף השנהב",
    HR: "קרואטיה",
    CU: "קובה",
    CW: "קוראסאו",
    CY: "קפריסין",
    CZ: "צ׳כיה",
    DK: "דנמרק",
    DJ: "ג׳יבוטי",
    DM: "דומיניקה",
    DO: "הרפובליקה הדומיניקנית",
    EC: "אקוודור",
    EG: "מצרים",
    SV: "אל סלבדור",
    GQ: "גינאה המשוונית",
    ER: "אריתריאה",
    EE: "אסטוניה",
    ET: "אתיופיה",
    FK: "איי פוקלנד",
    FO: "איי פארו",
    FJ: "פיג׳י",
    FI: "פינלנד",
    FR: "צרפת",
    GF: "גיאנה הצרפתית",
    PF: "פולינזיה הצרפתית",
    TF: "הטריטוריות הדרומיות של צרפת",
    GA: "גבון",
    GM: "גמביה",
    GE: "גאורגיה",
    DE: "גרמניה",
    GH: "גאנה",
    GI: "גיברלטר",
    GR: "יוון",
    GL: "גרינלנד",
    GD: "גרנדה",
    GP: "גוואדלופ",
    GU: "גואם",
    GT: "גואטמלה",
    GG: "גרנסי",
    GN: "גינאה",
    GW: "גינאה ביסאו",
    GY: "גיאנה",
    HT: "האיטי",
    HM: "איי הרד ומקדונלד",
    VA: "הוותיקן",
    HN: "הונדורס",
    HK: "הונג קונג (מחוז מנהלי מיוחד של סין)",
    HU: "הונגריה",
    IS: "איסלנד",
    IN: "הודו",
    ID: "אינדונזיה",
    IR: "איראן",
    IQ: "עיראק",
    IE: "אירלנד",
    IM: "האי מאן",
    IL: "ישראל",
    IT: "איטליה",
    JM: "ג׳מייקה",
    JP: "יפן",
    JE: "ג׳רסי",
    JO: "ירדן",
    KZ: "קזחסטן",
    KE: "קניה",
    KI: "קיריבאטי",
    KP: "קוריאה הצפונית",
    KR: "קוריאה הדרומית",
    KW: "כווית",
    KG: "קירגיזסטן",
    LA: "לאוס",
    LV: "לטביה",
    LB: "לבנון",
    LS: "לסוטו",
    LR: "ליבריה",
    LY: "לוב",
    LI: "ליכטנשטיין",
    LT: "ליטא",
    LU: "לוקסמבורג",
    MO: "מקאו (מחוז מנהלי מיוחד של סין)",
    MK: "מקדוניה",
    MG: "מדגסקר",
    MW: "מלאווי",
    MY: "מלזיה",
    MV: "האיים המלדיביים",
    ML: "מאלי",
    MT: "מלטה",
    MH: "איי מרשל",
    MQ: "מרטיניק",
    MR: "מאוריטניה",
    MU: "מאוריציוס",
    YT: "מאיוט",
    MX: "מקסיקו",
    FM: "מיקרונזיה",
    MD: "מולדובה",
    MC: "מונקו",
    MN: "מונגוליה",
    ME: "מונטנגרו",
    MS: "מונסראט",
    MA: "מרוקו",
    MZ: "מוזמביק",
    MM: "מיאנמר (בורמה)",
    NA: "נמיביה",
    NR: "נאורו",
    NP: "נפאל",
    NL: "הולנד",
    NC: "קלדוניה החדשה",
    NZ: "ניו זילנד",
    NI: "ניקרגואה",
    NE: "ניז׳ר",
    NG: "ניגריה",
    NU: "ניווה",
    NF: "איי נורפוק",
    MP: "איי מריאנה הצפוניים",
    NO: "נורווגיה",
    OM: "עומאן",
    PK: "פקיסטן",
    PW: "פלאו",
    PS: "השטחים הפלסטיניים",
    PA: "פנמה",
    PG: "פפואה גינאה החדשה",
    PY: "פרגוואי",
    PE: "פרו",
    PH: "הפיליפינים",
    PN: "איי פיטקרן",
    PL: "פולין",
    PT: "פורטוגל",
    PR: "פוארטו ריקו",
    QA: "קטאר",
    RE: "ראוניון",
    RO: "רומניה",
    RU: "רוסיה",
    RW: "רואנדה",
    BL: "סנט ברתולומיאו",
    SH: "סנט הלנה",
    KN: "סנט קיטס ונוויס",
    LC: "סנט לוסיה",
    MF: "סן מרטן",
    PM: "סנט פייר ומיקלון",
    VC: "סנט וינסנט והגרנדינים",
    WS: "סמואה",
    SM: "סן מרינו",
    ST: "סאו טומה ופרינסיפה",
    SA: "ערב הסעודית",
    SN: "סנגל",
    RS: "סרביה",
    SC: "איי סיישל",
    SL: "סיירה לאונה",
    SG: "סינגפור",
    SX: "סנט מארטן",
    SK: "סלובקיה",
    SI: "סלובניה",
    SB: "איי שלמה",
    SO: "סומליה",
    ZA: "דרום אפריקה",
    GS: "ג׳ורג׳יה הדרומית ואיי סנדוויץ׳ הדרומיים",
    SS: "דרום סודן",
    ES: "ספרד",
    LK: "סרי לנקה",
    SD: "סודן",
    SR: "סורינם",
    SJ: "סוולבארד ויאן מאיין",
    SZ: "סווזילנד",
    SE: "שוודיה",
    CH: "שווייץ",
    SY: "סוריה",
    TW: "טייוואן",
    TJ: "טג׳יקיסטן",
    TZ: "טנזניה",
    TH: "תאילנד",
    TL: "טימור לסטה",
    TG: "טוגו",
    TK: "טוקלאו",
    TO: "טונגה",
    TT: "טרינידד וטובגו",
    TN: "טוניסיה",
    TR: "טורקיה",
    TM: "טורקמניסטן",
    TC: "איי טורקס וקאיקוס",
    TV: "טובאלו",
    UG: "אוגנדה",
    UA: "אוקראינה",
    AE: "איחוד האמירויות הערביות",
    GB: "הממלכה המאוחדת",
    US: "ארצות הברית",
    UM: "האיים המרוחקים הקטנים של ארה״ב",
    UY: "אורוגוואי",
    UZ: "אוזבקיסטן",
    VU: "ונואטו",
    VE: "ונצואלה",
    VN: "וייטנאם",
    VG: "איי הבתולה הבריטיים",
    VI: "איי הבתולה של ארצות הברית",
    WF: "איי ווליס ופוטונה",
    EH: "סהרה המערבית",
    YE: "תימן",
    ZM: "זמביה",
    ZW: "זימבבואה",
    XK: "קוסוב",
};

function from$t(country) {
    return names$s[country] || from$t(Alpha2.from(country));
}
function parse$t(country) {
    const result = Object.entries(names$s).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$s = {
    AD: "Andora",
    AE: "Ujedinjeni Arapski Emirati",
    AF: "Afganistan",
    AG: "Antigva i Barbuda",
    AI: "Angvila",
    AL: "Albanija",
    AM: "Armenija",
    AO: "Angola",
    AQ: "Antarktika",
    AR: "Argentina",
    AS: "Američka Samoa",
    AT: "Austrija",
    AU: "Australija",
    AW: "Aruba",
    AX: "Ålandski otoci",
    AZ: "Azerbajdžan",
    BA: "Bosna i Hercegovina",
    BB: "Barbados",
    BD: "Bangladeš",
    BE: "Belgija",
    BF: "Burkina Faso",
    BG: "Bugarska",
    BH: "Bahrein",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint Barthélemy",
    BM: "Bermudi",
    BN: "Brunej",
    BO: "Bolivija",
    BQ: "Karipski otoci Nizozemske",
    BR: "Brazil",
    BS: "Bahami",
    BT: "Butan",
    BV: "Otok Bouvet",
    BW: "Bocvana",
    BY: "Bjelorusija",
    BZ: "Belize",
    CA: "Kanada",
    CC: "Kokosovi (Keelingovi) otoci",
    CD: "Kongo - Kinshasa",
    CF: "Srednjoafrička Republika",
    CG: "Kongo - Brazzaville",
    CH: "Švicarska",
    CI: "Obala Bjelokosti",
    CK: "Cookovi Otoci",
    CL: "Čile",
    CM: "Kamerun",
    CN: "Kina",
    CO: "Kolumbija",
    CR: "Kostarika",
    CU: "Kuba",
    CV: "Zelenortska Republika",
    CW: "Curaçao",
    CX: "Božićni otok",
    CY: "Cipar",
    CZ: "Češka",
    DE: "Njemačka",
    DJ: "Džibuti",
    DK: "Danska",
    DM: "Dominika",
    DO: "Dominikanska Republika",
    DZ: "Alžir",
    EC: "Ekvador",
    EE: "Estonija",
    EG: "Egipat",
    EH: "Zapadna Sahara",
    ER: "Eritreja",
    ES: "Španjolska",
    ET: "Etiopija",
    FI: "Finska",
    FJ: "Fidži",
    FK: "Falklandski otoci",
    FM: "Mikronezija",
    FO: "Farski otoci",
    FR: "Francuska",
    GA: "Gabon",
    GB: "Ujedinjeno Kraljevstvo",
    GD: "Grenada",
    GE: "Gruzija",
    GF: "Francuska Gijana",
    GG: "Guernsey",
    GH: "Gana",
    GI: "Gibraltar",
    GL: "Grenland",
    GM: "Gambija",
    GN: "Gvineja",
    GP: "Guadalupe",
    GQ: "Ekvatorska Gvineja",
    GR: "Grčka",
    GS: "Južna Georgija i Južni Sendvički Otoci",
    GT: "Gvatemala",
    GU: "Guam",
    GW: "Gvineja Bisau",
    GY: "Gvajana",
    HK: "PUP Hong Kong Kina",
    HM: "Otoci Heard i McDonald",
    HN: "Honduras",
    HR: "Hrvatska",
    HT: "Haiti",
    HU: "Mađarska",
    ID: "Indonezija",
    IE: "Irska",
    IL: "Izrael",
    IM: "Otok Man",
    IN: "Indija",
    IO: "Britanski Indijskooceanski teritorij",
    IQ: "Irak",
    IR: "Iran",
    IS: "Island",
    IT: "Italija",
    JE: "Jersey",
    JM: "Jamajka",
    JO: "Jordan",
    JP: "Japan",
    KE: "Kenija",
    KG: "Kirgistan",
    KH: "Kambodža",
    KI: "Kiribati",
    KM: "Komori",
    KN: "Sveti Kristofor i Nevis",
    KP: "Sjeverna Koreja",
    KR: "Južna Koreja",
    KW: "Kuvajt",
    KY: "Kajmanski otoci",
    KZ: "Kazahstan",
    LA: "Laos",
    LB: "Libanon",
    LC: "Sveta Lucija",
    LI: "Lihtenštajn",
    LK: "Šri Lanka",
    LR: "Liberija",
    LS: "Lesoto",
    LT: "Litva",
    LU: "Luksemburg",
    LV: "Latvija",
    LY: "Libija",
    MA: "Maroko",
    MC: "Monako",
    MD: "Moldavija",
    ME: "Crna Gora",
    MF: "Saint Martin",
    MG: "Madagaskar",
    MH: "Maršalovi Otoci",
    MK: "Makedonija",
    ML: "Mali",
    MM: "Mjanmar (Burma)",
    MN: "Mongolija",
    MO: "PUP Makao Kina",
    MP: "Sjevernomarijanski otoci",
    MQ: "Martinique",
    MR: "Mauretanija",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mauricijus",
    MV: "Maldivi",
    MW: "Malavi",
    MX: "Meksiko",
    MY: "Malezija",
    MZ: "Mozambik",
    NA: "Namibija",
    NC: "Nova Kaledonija",
    NE: "Niger",
    NF: "Otok Norfolk",
    NG: "Nigerija",
    NI: "Nikaragva",
    NL: "Nizozemska",
    NO: "Norveška",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "Novi Zeland",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PF: "Francuska Polinezija",
    PG: "Papua Nova Gvineja",
    PH: "Filipini",
    PK: "Pakistan",
    PL: "Poljska",
    PM: "Saint-Pierre-et-Miquelon",
    PN: "Otoci Pitcairn",
    PR: "Portoriko",
    PS: "Palestinsko Područje",
    PT: "Portugal",
    PW: "Palau",
    PY: "Paragvaj",
    QA: "Katar",
    RE: "Réunion",
    RO: "Rumunjska",
    RS: "Srbija",
    RU: "Rusija",
    RW: "Ruanda",
    SA: "Saudijska Arabija",
    SB: "Salomonski Otoci",
    SC: "Sejšeli",
    SD: "Sudan",
    SE: "Švedska",
    SG: "Singapur",
    SH: "Sveta Helena",
    SI: "Slovenija",
    SJ: "Svalbard i Jan Mayen",
    SK: "Slovačka",
    SL: "Sijera Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalija",
    SR: "Surinam",
    SS: "Južni Sudan",
    ST: "Sveti Toma i Princip",
    SV: "Salvador",
    SX: "Sint Maarten",
    SY: "Sirija",
    SZ: "Svazi",
    TC: "Otoci Turks i Caicos",
    TD: "Čad",
    TF: "Francuski južni i antarktički teritoriji",
    TG: "Togo",
    TH: "Tajland",
    TJ: "Tadžikistan",
    TK: "Tokelau",
    TL: "Timor-Leste",
    TM: "Turkmenistan",
    TN: "Tunis",
    TO: "Tonga",
    TR: "Turska",
    TT: "Trinidad i Tobago",
    TV: "Tuvalu",
    TW: "Tajvan",
    TZ: "Tanzanija",
    UA: "Ukrajina",
    UG: "Uganda",
    UM: "Mali udaljeni otoci SAD-a",
    US: "Sjedinjene Američke Države",
    UY: "Urugvaj",
    UZ: "Uzbekistan",
    VA: "Vatikanski Grad",
    VC: "Sveti Vincent i Grenadini",
    VE: "Venezuela",
    VG: "Britanski Djevičanski otoci",
    VI: "Američki Djevičanski otoci",
    VN: "Vijetnam",
    VU: "Vanuatu",
    WF: "Wallis i Futuna",
    WS: "Samoa",
    XK: "Kosovo",
    YE: "Jemen",
    YT: "Mayotte",
    ZA: "Južnoafrička Republika",
    ZM: "Zambija",
    ZW: "Zimbabv",
};

function from$s(country) {
    return names$r[country] || from$s(Alpha2.from(country));
}
function parse$s(country) {
    const result = Object.entries(names$r).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$r = {
    AF: "Afganisztán",
    AL: "Albánia",
    DZ: "Algéria",
    AS: "Amerikai Szamoa",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarktisz",
    AG: "Antigua és Barbuda",
    AR: "Argentína",
    AM: "Örményország",
    AW: "Aruba",
    AU: "Ausztrália",
    AT: "Ausztria",
    AZ: "Azerbajdzsán",
    BS: "Bahama-szigetek",
    BH: "Bahrein",
    BD: "Banglades",
    BB: "Barbados",
    BY: "Fehéroroszország",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhután",
    BO: "Bolívia",
    BA: "Bosznia-Hercegovina",
    BW: "Botswana",
    BV: "Bouvet-sziget",
    BR: "Brazília",
    IO: "Brit Indiai-óceáni Terület",
    BN: "Brunei",
    BG: "Bulgária",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Kambodzsa",
    CM: "Kamerun",
    CA: "Kanada",
    CV: "Zöld-foki Köztársaság",
    KY: "Kajmán-szigetek",
    CF: "Közép-afrikai Köztársaság",
    TD: "Csád",
    CL: "Chile",
    CN: "Kína",
    CX: "Karácsony-sziget",
    CC: "Kókusz (Keeling)-szigetek",
    CO: "Kolumbia",
    KM: "Comore-szigetek",
    CG: "Kongói Köztársaság",
    CD: "Kongói Demokratikus Köztársaság",
    CK: "Cook-szigetek",
    CR: "Costa Rica",
    CI: "Elefántcsontpart",
    HR: "Horvátország",
    CU: "Kuba",
    CY: "Ciprus",
    CZ: "Csehország",
    DK: "Dánia",
    DJ: "Dzsibuti",
    DM: "Dominikai Közösség",
    DO: "Dominikai Köztársaság",
    EC: "Ecuador",
    EG: "Egyiptom",
    SV: "Salvador",
    GQ: "Egyenlítői-Guinea",
    ER: "Eritrea",
    EE: "Észtország",
    ET: "Etiópia",
    FK: "Falkland-szigetek",
    FO: "Feröer",
    FJ: "Fidzsi-szigetek",
    FI: "Finnország",
    FR: "Franciaország",
    GF: "Francia Guyana",
    PF: "Francia Polinézia",
    TF: "Francia déli területek",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Grúzia",
    DE: "Németország",
    GH: "Ghána",
    GI: "Gibraltár",
    GR: "Görögország",
    GL: "Grönland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GN: "Guinea",
    GW: "Bissau-Guinea",
    GY: "Guyana",
    HT: "Haiti",
    HM: "Heard-sziget és McDonald-szigetek",
    VA: "Vatikán",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Magyarország",
    IS: "Izland",
    IN: "India",
    ID: "Indonézia",
    IR: "Irán",
    IQ: "Irak",
    IE: "Írország",
    IL: "Izrael",
    IT: "Olaszország",
    JM: "Jamaica",
    JP: "Japán",
    JO: "Jordánia",
    KZ: "Kazahsztán",
    KE: "Kenya",
    KI: "Kiribati",
    KP: "Észak-Korea",
    KR: "Dél-Korea",
    KW: "Kuvait",
    KG: "Kirgizisztán",
    LA: "Laosz",
    LV: "Lettország",
    LB: "Libanon",
    LS: "Lesotho",
    LR: "Libéria",
    LY: "Líbia",
    LI: "Liechtenstein",
    LT: "Litvánia",
    LU: "Luxemburg",
    MO: "Makao",
    MK: "Macedónia",
    MG: "Madagaszkár",
    MW: "Malawi",
    MY: "Malajzia",
    MV: "Maldív-szigetek",
    ML: "Mali",
    MT: "Málta",
    MH: "Marshall-szigetek",
    MQ: "Martinique",
    MR: "Mauritánia",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexikó",
    FM: "Mikronéziai Szövetségi Államok",
    MD: "Moldova",
    MC: "Monaco",
    MN: "Mongólia",
    MS: "Montserrat",
    MA: "Marokkó",
    MZ: "Mozambik",
    MM: "Mianmar",
    NA: "Namíbia",
    NR: "Nauru",
    NP: "Nepál",
    NL: "Hollandia",
    NC: "Új-Kaledónia",
    NZ: "Új-Zéland",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigéria",
    NU: "Niue",
    NF: "Norfolk-sziget",
    MP: "Északi-Mariana-szigetek",
    NO: "Norvégia",
    OM: "Omán",
    PK: "Pakisztán",
    PW: "Palau",
    PS: "Palesztina",
    PA: "Panama",
    PG: "Pápua Új-Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Fülöp-szigetek",
    PN: "Pitcairn-szigetek",
    PL: "Lengyelország",
    PT: "Portugália",
    PR: "Puerto Rico",
    QA: "Katar",
    RE: "Réunion",
    RO: "Románia",
    RU: "Oroszország",
    RW: "Ruanda",
    SH: "Saint Helena",
    KN: "Saint Kitts és Nevis",
    LC: "Saint Lucia",
    PM: "Saint Pierre and Miquelon",
    VC: "Saint Vincent és a Grenadine-szigetek",
    WS: "Szamoa",
    SM: "San Marino",
    ST: "São Tomé és Príncipe",
    SA: "Szaudi-Arábia",
    SN: "Szenegál",
    SC: "Seychelle-szigetek",
    SL: "Sierra Leone",
    SG: "Szingapúr",
    SK: "Szlovákia",
    SI: "Szlovénia",
    SB: "Salamon-szigetek",
    SO: "Szomália",
    ZA: "Dél-Afrika",
    GS: "Déli-Georgia és Déli-Sandwich-szigetek",
    ES: "Spanyolország",
    LK: "Sri Lanka",
    SD: "Szudán",
    SR: "Suriname",
    SJ: "Spitzbergák és Jan Mayen",
    SZ: "Szváziföld",
    SE: "Svédország",
    CH: "Svájc",
    SY: "Szíria",
    TW: "Tajvan",
    TJ: "Tádzsikisztán",
    TZ: "Tanzánia",
    TH: "Thaiföld",
    TL: "Kelet-Timor",
    TG: "Togo",
    TK: "Tokelau-szigetek",
    TO: "Tonga",
    TT: "Trinidad és Tobago",
    TN: "Tunézia",
    TR: "Törökország",
    TM: "Türkmenisztán",
    TC: "Turks- és Caicos-szigetek",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukrajna",
    AE: "Egyesült Arab Emírségek",
    GB: "Egyesült Királyság",
    US: "Amerikai Egyesült Államok",
    UM: "Az Amerikai Egyesült Államok lakatlan külbirtokai",
    UY: "Uruguay",
    UZ: "Üzbegisztán",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Vietnam",
    VG: "Brit Virgin-szigetek",
    VI: "Amerikai Virgin-szigetek",
    WF: "Wallis és Futuna",
    EH: "Nyugat-Szahara",
    YE: "Jemen",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    AX: "Åland",
    BQ: "Karibi Hollandia",
    CW: "Curaçao",
    GG: "Guernsey",
    IM: "Man-sziget",
    JE: "Jersey",
    ME: "Montenegró",
    BL: "Saint Barthélemy",
    MF: "Szent Márton-sziget (francia rész)",
    RS: "Szerbia",
    SX: "Szent Márton-sziget (holland rész)",
    SS: "Dél-Szudán",
    XK: "Koszov",
};

function from$r(country) {
    return names$q[country] || from$r(Alpha2.from(country));
}
function parse$r(country) {
    const result = Object.entries(names$q).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$q = {
    AD: "Անդորրա",
    AE: "Արաբական Միացյալ Էմիրություններ",
    AF: "Աֆղանստան",
    AG: "Անտիգուա և Բարբուդա",
    AI: "Անգուիլա",
    AL: "Ալբանիա",
    AM: "Հայաստան",
    AO: "Անգոլա",
    AQ: "Անտարկտիդա",
    AR: "Արգենտինա",
    AS: "Ամերիկյան Սամոա",
    AT: "Ավստրիա",
    AU: "Ավստրալիա",
    AW: "Արուբա",
    AX: "Ալանդյան կղզիներ",
    AZ: "Ադրբեջան",
    BA: "Բոսնիա և Հերցեգովինա",
    BB: "Բարբադոս",
    BD: "Բանգլադեշ",
    BE: "Բելգիա",
    BF: "Բուրկինա Ֆասո",
    BG: "Բուլղարիա",
    BH: "Բահրեյն",
    BI: "Բուրունդի",
    BJ: "Բենին",
    BL: "Սեն Բարտելմի",
    BM: "Բերմուդներ",
    BN: "Բրունեյ",
    BO: "Բոլիվիա",
    BQ: "Կարիբյան Նիդեռլանդներ",
    BR: "Բրազիլիա",
    BS: "Բահամաներ",
    BT: "Բութան",
    BV: "Բուվե կղզի",
    BW: "Բոթսվանա",
    BY: "Բելառուս",
    BZ: "Բելիզ",
    CA: "Կանադա",
    CC: "Կոկոսյան (Քիլինգ) կղզիներ",
    CD: "Կոնգո - Կինշասա",
    CF: "Կենտրոնական Աֆրիկյան Հանրապետություն",
    CG: "Կոնգո - Բրազավիլ",
    CH: "Շվեյցարիա",
    CI: "Կոտ դ’Իվուար",
    CK: "Կուկի կղզիներ",
    CL: "Չիլի",
    CM: "Կամերուն",
    CN: "Չինաստան",
    CO: "Կոլումբիա",
    CR: "Կոստա Ռիկա",
    CU: "Կուբա",
    CV: "Կաբո Վերդե",
    CW: "Կյուրասաո",
    CX: "Սուրբ Ծննդյան կղզի",
    CY: "Կիպրոս",
    CZ: "Չեխիա",
    DE: "Գերմանիա",
    DJ: "Ջիբութի",
    DK: "Դանիա",
    DM: "Դոմինիկա",
    DO: "Դոմինիկյան Հանրապետություն",
    DZ: "Ալժիր",
    EC: "Էկվադոր",
    EE: "Էստոնիա",
    EG: "Եգիպտոս",
    EH: "Արևմտյան Սահարա",
    ER: "Էրիթրեա",
    ES: "Իսպանիա",
    ET: "Եթովպիա",
    FI: "Ֆինլանդիա",
    FJ: "Ֆիջի",
    FK: "Ֆոլքլենդյան կղզիներ",
    FM: "Միկրոնեզիա",
    FO: "Ֆարերյան կղզիներ",
    FR: "Ֆրանսիա",
    GA: "Գաբոն",
    GB: "Միացյալ Թագավորություն",
    GD: "Գրենադա",
    GE: "Վրաստան",
    GF: "Ֆրանսիական Գվիանա",
    GG: "Գերնսի",
    GH: "Գանա",
    GI: "Ջիբրալթար",
    GL: "Գրենլանդիա",
    GM: "Գամբիա",
    GN: "Գվինեա",
    GP: "Գվադելուպա",
    GQ: "Հասարակածային Գվինեա",
    GR: "Հունաստան",
    GS: "Հարավային Ջորջիա և Հարավային Սենդվիչյան կղզիներ",
    GT: "Գվատեմալա",
    GU: "Գուամ",
    GW: "Գվինեա-Բիսսաու",
    GY: "Գայանա",
    HK: "Հոնկոնգի ՀՎՇ",
    HM: "Հերդ կղզի և ՄակԴոնալդի կղզիներ",
    HN: "Հոնդուրաս",
    HR: "Խորվաթիա",
    HT: "Հայիթի",
    HU: "Հունգարիա",
    ID: "Ինդոնեզիա",
    IE: "Իռլանդիա",
    IL: "Իսրայել",
    IM: "Մեն կղզի",
    IN: "Հնդկաստան",
    IO: "Բրիտանական Տարածք Հնդկական Օվկիանոսում",
    IQ: "Իրաք",
    IR: "Իրան",
    IS: "Իսլանդիա",
    IT: "Իտալիա",
    JE: "Ջերսի",
    JM: "Ճամայկա",
    JO: "Հորդանան",
    JP: "Ճապոնիա",
    KE: "Քենիա",
    KG: "Ղրղզստան",
    KH: "Կամբոջա",
    KI: "Կիրիբատի",
    KM: "Կոմորյան կղզիներ",
    KN: "Սենտ Քիտս և Նևիս",
    KP: "Հյուսիսային Կորեա",
    KR: "Հարավային Կորեա",
    KW: "Քուվեյթ",
    KY: "Կայմանյան կղզիներ",
    KZ: "Ղազախստան",
    LA: "Լաոս",
    LB: "Լիբանան",
    LC: "Սենթ Լյուսիա",
    LI: "Լիխտենշտեյն",
    LK: "Շրի Լանկա",
    LR: "Լիբերիա",
    LS: "Լեսոտո",
    LT: "Լիտվա",
    LU: "Լյուքսեմբուրգ",
    LV: "Լատվիա",
    LY: "Լիբիա",
    MA: "Մարոկկո",
    MC: "Մոնակո",
    MD: "Մոլդովա",
    ME: "Չեռնոգորիա",
    MF: "Սեն Մարտեն",
    MG: "Մադագասկար",
    MH: "Մարշալյան կղզիներ",
    MK: "Մակեդոնիա",
    ML: "Մալի",
    MM: "Մյանմա (Բիրմա)",
    MN: "Մոնղոլիա",
    MO: "Չինաստանի Մակաո ՀՎՇ",
    MP: "Հյուսիսային Մարիանյան կղզիներ",
    MQ: "Մարտինիկա",
    MR: "Մավրիտանիա",
    MS: "Մոնսեռատ",
    MT: "Մալթա",
    MU: "Մավրիկիոս",
    MV: "Մալդիվներ",
    MW: "Մալավի",
    MX: "Մեքսիկա",
    MY: "Մալայզիա",
    MZ: "Մոզամբիկ",
    NA: "Նամիբիա",
    NC: "Նոր Կալեդոնիա",
    NE: "Նիգեր",
    NF: "Նորֆոլկ կղզի",
    NG: "Նիգերիա",
    NI: "Նիկարագուա",
    NL: "Նիդեռլանդներ",
    NO: "Նորվեգիա",
    NP: "Նեպալ",
    NR: "Նաուրու",
    NU: "Նիուե",
    NZ: "Նոր Զելանդիա",
    OM: "Օման",
    PA: "Պանամա",
    PE: "Պերու",
    PF: "Ֆրանսիական Պոլինեզիա",
    PG: "Պապուա Նոր Գվինեա",
    PH: "Ֆիլիպիններ",
    PK: "Պակիստան",
    PL: "Լեհաստան",
    PM: "Սեն Պիեռ և Միքելոն",
    PN: "Պիտկեռն կղզիներ",
    PR: "Պուերտո Ռիկո",
    PS: "Պաղեստինյան տարածքներ",
    PT: "Պորտուգալիա",
    PW: "Պալաու",
    PY: "Պարագվայ",
    QA: "Կատար",
    RE: "Ռեյունիոն",
    RO: "Ռումինիա",
    RS: "Սերբիա",
    RU: "Ռուսաստան",
    RW: "Ռուանդա",
    SA: "Սաուդյան Արաբիա",
    SB: "Սողոմոնյան կղզիներ",
    SC: "Սեյշելներ",
    SD: "Սուդան",
    SE: "Շվեդիա",
    SG: "Սինգապուր",
    SH: "Սուրբ Հեղինեի կղզի",
    SI: "Սլովենիա",
    SJ: "Սվալբարդ և Յան Մայեն",
    SK: "Սլովակիա",
    SL: "Սիեռա Լեոնե",
    SM: "Սան Մարինո",
    SN: "Սենեգալ",
    SO: "Սոմալի",
    SR: "Սուրինամ",
    SS: "Հարավային Սուդան",
    ST: "Սան Տոմե և Փրինսիպի",
    SV: "Սալվադոր",
    SX: "Սինտ Մարտեն",
    SY: "Սիրիա",
    SZ: "Սվազիլենդ",
    TC: "Թըրքս և Կայկոս կղզիներ",
    TD: "Չադ",
    TF: "Ֆրանսիական Հարավային Տարածքներ",
    TG: "Տոգո",
    TH: "Թայլանդ",
    TJ: "Տաջիկստան",
    TK: "Տոկելաու",
    TL: "Թիմոր Լեշտի",
    TM: "Թուրքմենստան",
    TN: "Թունիս",
    TO: "Տոնգա",
    TR: "Թուրքիա",
    TT: "Տրինիդադ և Տոբագո",
    TV: "Տուվալու",
    TW: "Թայվան",
    TZ: "Տանզանիա",
    UA: "Ուկրաինա",
    UG: "Ուգանդա",
    UM: "Արտաքին կղզիներ (ԱՄՆ)",
    US: "Միացյալ Նահանգներ",
    UY: "Ուրուգվայ",
    UZ: "Ուզբեկստան",
    VA: "Վատիկան",
    VC: "Սենթ Վինսենթ և Գրենադիններ",
    VE: "Վենեսուելա",
    VG: "Բրիտանական Վիրջինյան կղզիներ",
    VI: "ԱՄՆ Վիրջինյան կղզիներ",
    VN: "Վիետնամ",
    VU: "Վանուատու",
    WF: "Ուոլիս և Ֆուտունա",
    WS: "Սամոա",
    XK: "Կոսովո",
    YE: "Եմեն",
    YT: "Մայոտ",
    ZA: "Հարավաֆրիկյան Հանրապետություն",
    ZM: "Զամբիա",
    ZW: "Զիմբաբվ",
};

function from$q(country) {
    return names$p[country] || from$q(Alpha2.from(country));
}
function parse$q(country) {
    const result = Object.entries(names$p).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$p = {
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
    AS: "Amerika Serikat",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarctica",
    AG: "Antigua dan Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahama",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarusia",
    BE: "Belgia",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia",
    BA: "Bosnia dan Herzegovina",
    BW: "Botswana",
    BV: "Kepulauan Bouvet",
    BR: "Brasil",
    IO: "Teritori Samudra Hindia Britania",
    BN: "Brunei Darussalam",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Kamboja",
    CM: "Kamerun",
    CA: "Kanada",
    CV: "Tanjung Verde",
    KY: "Kepulauan Cayman",
    CF: "Afrika Tengah",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CX: "Pulau Natal",
    CC: "Kepulauan Cocos (Keeling)",
    CO: "Kolombia",
    KM: "Komoro",
    CG: "Kongo",
    CD: "Republik Demokratik Kongo",
    CK: "Kepulauan Cook",
    CR: "Kosta Rika",
    CI: "Pantai Gading",
    HR: "Kroasia",
    CU: "Kuba",
    CY: "Siprus",
    CZ: "Republik Ceko",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominika",
    DO: "Republik Dominika",
    EC: "Ekuador",
    EG: "Mesir",
    SV: "El Salvador",
    GQ: "Guinea Khatulistiwa",
    ER: "Eritrea",
    EE: "Estonia",
    ET: "Ethiopia",
    FK: "Kepulauan Falkland(Malvinas)",
    FO: "Kepulauan Faroe",
    FJ: "Fiji",
    FI: "Finlandia",
    FR: "Perancis",
    GF: "Guyana Perancis",
    PF: "Polinesia Perancis",
    TF: "Antartika Perancis",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Jerman",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Yunani",
    GL: "Greenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatamala",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HM: "Pulau Heard dan Kepulauan McDonald",
    VA: "Vatikan",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Hungaria",
    IS: "Islandia",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran",
    IQ: "Irak",
    IE: "Irlandia",
    IL: "Israel",
    IT: "Italia",
    JM: "Jamaika",
    JP: "Jepang",
    JO: "Yordania",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KP: "Korea Utara",
    KR: "Korea Selatan",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "Laos",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxemburg",
    MO: "Makau",
    MK: "Makedonia",
    MG: "Madagaskar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Mali",
    MT: "Malta",
    MH: "Kepulauan Marshall",
    MQ: "Martinik",
    MR: "Mauritania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Meksiko",
    FM: "Federasi Mikronesia",
    MD: "Moldova",
    MC: "Monako",
    MN: "Mongolia",
    MS: "Montserrat",
    MA: "Moroko",
    MZ: "Mozambik",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Belanda",
    NC: "Kaledonia Baru",
    NZ: "Selandia Baru",
    NI: "Nikaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Kepulauan Norfolk",
    MP: "Kepulauan Mariana Utara",
    NO: "Norwegia",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestina",
    PA: "Panama",
    PG: "Papua Nugini",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Filipina",
    PN: "Pitcairn",
    PL: "Polandia",
    PT: "Portugal",
    PR: "Puerto Riko",
    QA: "Qatar",
    RE: "Reunion",
    RO: "Rumania",
    RU: "Rusia",
    RW: "Rwanda",
    SH: "Saint Helena",
    KN: "Saint Kitts dan Nevis",
    LC: "Saint Lucia",
    PM: "Saint Pierre dan Miquelon",
    VC: "Saint Vincent dan the Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Sao Tome dan Principe",
    SA: "Arab Saudi",
    SN: "Senegal",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SG: "Singapura",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Kepulauan Solomon",
    SO: "Somalia",
    ZA: "Afrika Selatan",
    GS: "Georgia Selatan dan Kepulauan Sandwich Selatan",
    ES: "Spanyol",
    LK: "Sri Lanka",
    SD: "Sudan",
    SR: "Suriname",
    SJ: "Svalbard dan Jan Mayen",
    SZ: "Swaziland",
    SE: "Sweden",
    CH: "Swiss",
    SY: "Suriah",
    TW: "Taiwan",
    TJ: "Tajikistan",
    TZ: "Tanzania",
    TH: "Thailand",
    TL: "Timor-Leste",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad dan Tobago",
    TN: "Tunisia",
    TR: "Turki",
    TM: "Turkmenistan",
    TC: "Turks dan Caicos Islands",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraina",
    AE: "Uni Emirat Arab",
    GB: "Britania Raya",
    US: "Amerika Serikat",
    UM: "United States Minor Outlying Islands",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Viet Nam",
    VG: "Virgin Islands, British",
    VI: "Virgin Islands, U.S.",
    WF: "Wallis and Futuna",
    EH: "Sahara Barat",
    YE: "Yaman",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    AX: "Åland Islands",
    BQ: "Bonaire, Sint Eustatius and Saba",
    CW: "Curaçao",
    GG: "Guernsey",
    IM: "Isle of Man",
    JE: "Jersey",
    ME: "Montenegro",
    BL: "Saint Barthélemy",
    MF: "Saint Martin (French part)",
    RS: "Serbia",
    SX: "Sint Maarten (Dutch part)",
    SS: "Sudan Selatan",
    XK: "Kosov",
};

function from$p(country) {
    return names$o[country] || from$p(Alpha2.from(country));
}
function parse$p(country) {
    const result = Object.entries(names$o).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$o = {
    AD: "Andorra",
    AE: "Emirati Arabi Uniti",
    AF: "Afghanistan",
    AG: "Antigua e Barbuda",
    AI: "Anguilla",
    AL: "Albania",
    AM: "Armenia",
    AO: "Angola",
    AQ: "Antartide",
    AR: "Argentina",
    AS: "Samoa Americane",
    AT: "Austria",
    AU: "Australia",
    AW: "Aruba",
    AX: "Isole Åland",
    AZ: "Azerbaigian",
    BA: "Bosnia ed Erzegovina",
    BB: "Barbados",
    BD: "Bangladesh",
    BE: "Belgio",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint-Barthélemy",
    BM: "Bermuda",
    BN: "Brunei",
    BO: "Bolivia",
    BQ: "Isole BES",
    BR: "Brasile",
    BS: "Bahamas",
    BT: "Bhutan",
    BV: "Isola Bouvet",
    BW: "Botswana",
    BY: "Bielorussia",
    BZ: "Belize",
    CA: "Canada",
    CC: "Isole Cocos e Keeling",
    CD: "Repubblica Democratica del Congo",
    CF: "Repubblica Centrafricana",
    CG: "Repubblica del Congo",
    CH: "Svizzera",
    CI: "Costa d'Avorio",
    CK: "Isole Cook",
    CL: "Cile",
    CM: "Camerun",
    CN: "Cina",
    CO: "Colombia",
    CR: "Costa Rica",
    CU: "Cuba",
    CV: "Capo Verde",
    CW: "Curaçao",
    CX: "Isola del Natale",
    CY: "Cipro",
    CZ: "Repubblica Ceca",
    DE: "Germania",
    DJ: "Gibuti",
    DK: "Danimarca",
    DM: "Dominica",
    DO: "Repubblica Dominicana",
    DZ: "Algeria",
    EC: "Ecuador",
    EE: "Estonia",
    EG: "Egitto",
    EH: "Sahara Occidentale",
    ER: "Eritrea",
    ES: "Spagna",
    ET: "Etiopia",
    FI: "Finlandia",
    FJ: "Figi",
    FK: "Isole Falkland",
    FM: "Stati Federati di Micronesia",
    FO: "Isole Fær Øer",
    FR: "Francia",
    GA: "Gabon",
    GB: "Regno Unito",
    GD: "Grenada",
    GE: "Georgia",
    GF: "Guyana Francese",
    GG: "Guernsey",
    GH: "Ghana",
    GI: "Gibilterra",
    GL: "Groenlandia",
    GM: "Gambia",
    GN: "Guinea",
    GP: "Guadalupa",
    GQ: "Guinea Equatoriale",
    GR: "Grecia",
    GS: "Georgia del Sud e isole Sandwich meridionali",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HK: "Hong Kong",
    HM: "Isole Heard e McDonald",
    HN: "Honduras",
    HR: "Croazia",
    HT: "Haiti",
    HU: "Ungheria",
    ID: "Indonesia",
    IE: "Irlanda",
    IL: "Israele",
    IM: "Isola di Man",
    IN: "India",
    IO: "Territori Britannici dell'Oceano Indiano",
    IQ: "Iraq",
    IR: "Iran",
    IS: "Islanda",
    IT: "Italia",
    JE: "Jersey",
    JM: "Giamaica",
    JO: "Giordania",
    JP: "Giappone",
    KE: "Kenya",
    KG: "Kirghizistan",
    KH: "Cambogia",
    KI: "Kiribati",
    KM: "Comore",
    KN: "Saint Kitts e Nevis",
    KP: "Corea del Nord",
    KR: "Corea del Sud",
    KW: "Kuwait",
    KY: "Isole Cayman",
    KZ: "Kazakistan",
    LA: "Laos",
    LB: "Libano",
    LC: "Santa Lucia",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Liberia",
    LS: "Lesotho",
    LT: "Lituania",
    LU: "Lussemburgo",
    LV: "Lettonia",
    LY: "Libia",
    MA: "Marocco",
    MC: "Monaco",
    MD: "Moldavia",
    ME: "Montenegro",
    MF: "Saint-Martin",
    MG: "Madagascar",
    MH: "Isole Marshall",
    MK: "Macedonia",
    ML: "Mali",
    MM: "Birmania  Myanmar",
    MN: "Mongolia",
    MO: "Macao",
    MP: "Isole Marianne Settentrionali",
    MQ: "Martinica",
    MR: "Mauritania",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mauritius",
    MV: "Maldive",
    MW: "Malawi",
    MX: "Messico",
    MY: "Malesia",
    MZ: "Mozambico",
    NA: "Namibia",
    NC: "Nuova Caledonia",
    NE: "Niger",
    NF: "Isola Norfolk",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Paesi Bassi",
    NO: "Norvegia",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "Nuova Zelanda",
    OM: "Oman",
    PA: "Panamá",
    PE: "Perù",
    PF: "Polinesia Francese",
    PG: "Papua Nuova Guinea",
    PH: "Filippine",
    PK: "Pakistan",
    PL: "Polonia",
    PM: "Saint Pierre e Miquelon",
    PN: "Isole Pitcairn",
    PR: "Porto Rico",
    PS: "Stato di Palestina",
    PT: "Portogallo",
    PW: "Palau",
    PY: "Paraguay",
    QA: "Qatar",
    RE: "Réunion",
    RO: "Romania",
    RS: "Serbia",
    RU: "Russia",
    RW: "Ruanda",
    SA: "Arabia Saudita",
    SB: "Isole Salomone",
    SC: "Seychelles",
    SD: "Sudan",
    SE: "Svezia",
    SG: "Singapore",
    SH: "Sant'Elena, Isola di Ascensione e Tristan da Cunha",
    SI: "Slovenia",
    SJ: "Svalbard e Jan Mayen",
    SK: "Slovacchia",
    SL: "Sierra Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalia",
    SR: "Suriname",
    SS: "Sudan del Sud",
    ST: "São Tomé e Príncipe",
    SV: "El Salvador",
    SX: "Sint Maarten",
    SY: "Siria",
    SZ: "Swaziland",
    TC: "Isole Turks e Caicos",
    TD: "Ciad",
    TF: "Territori Francesi del Sud",
    TG: "Togo",
    TH: "Thailandia",
    TJ: "Tagikistan",
    TK: "Tokelau",
    TL: "Timor Est",
    TM: "Turkmenistan",
    TN: "Tunisia",
    TO: "Tonga",
    TR: "Turchia",
    TT: "Trinidad e Tobago",
    TV: "Tuvalu",
    TW: "Repubblica di Cina",
    TZ: "Tanzania",
    UA: "Ucraina",
    UG: "Uganda",
    UM: "Isole minori esterne degli Stati Uniti",
    US: "Stati Uniti d'America",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VA: "Città del Vaticano",
    VC: "Saint Vincent e Grenadine",
    VE: "Venezuela",
    VG: "Isole Vergini Britanniche",
    VI: "Isole Vergini Americane",
    VN: "Vietnam",
    VU: "Vanuatu",
    WF: "Wallis e Futuna",
    WS: "Samoa",
    YE: "Yemen",
    YT: "Mayotte",
    ZA: "Sudafrica",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    XK: "Kosov",
};

function from$o(country) {
    return names$n[country] || from$o(Alpha2.from(country));
}
function parse$o(country) {
    const result = Object.entries(names$n).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$n = {
    AF: "アフガニスタン",
    AL: "アルバニア",
    DZ: "アルジェリア",
    AS: "アメリカ領サモア",
    AD: "アンドラ",
    AO: "アンゴラ",
    AI: "アンギラ",
    AQ: "南極",
    AG: "アンティグア・バーブーダ",
    AR: "アルゼンチン",
    AM: "アルメニア",
    AW: "アルバ",
    AU: "オーストラリア",
    AT: "オーストリア",
    AZ: "アゼルバイジャン",
    BS: "バハマ",
    BH: "バーレーン",
    BD: "バングラデシュ",
    BB: "バルバドス",
    BY: "ベラルーシ",
    BE: "ベルギー",
    BZ: "ベリーズ",
    BJ: "ベナン",
    BM: "バミューダ",
    BT: "ブータン",
    BO: "ボリビア多民族国",
    BA: "ボスニア・ヘルツェゴビナ",
    BW: "ボツワナ",
    BV: "ブーベ島",
    BR: "ブラジル",
    IO: "イギリス領インド洋地域",
    BN: "ブルネイ・ダルサラーム",
    BG: "ブルガリア",
    BF: "ブルキナファソ",
    BI: "ブルンジ",
    KH: "カンボジア",
    CM: "カメルーン",
    CA: "カナダ",
    CV: "カーボベルデ",
    KY: "ケイマン諸島",
    CF: "中央アフリカ共和国",
    TD: "チャド",
    CL: "チリ",
    CN: "中華人民共和国",
    CX: "クリスマス島",
    CC: "ココス（キーリング）諸島",
    CO: "コロンビア",
    KM: "小諸",
    CG: "コンゴ共和国",
    CD: "コンゴ民主共和国",
    CK: "クック諸島",
    CR: "コスタリカ",
    CI: "コートジボワール",
    HR: "クロアチア",
    CU: "キューバ",
    CY: "キプロス",
    CZ: "チェコ",
    DK: "デンマーク",
    DJ: "ジブチ",
    DM: "ドミニカ国",
    DO: "ドミニカ共和国",
    EC: "エクアドル",
    EG: "エジプト",
    SV: "エルサルバドル",
    GQ: "赤道ギニア",
    ER: "エリトリア",
    EE: "エストニア",
    ET: "エチオピア",
    FK: "フォークランド（マルビナス）諸島",
    FO: "フェロー諸島",
    FJ: "フィジー",
    FI: "フィンランド",
    FR: "フランス",
    GF: "フランス領ギアナ",
    PF: "フランス領ポリネシア",
    TF: "フランス領南方・南極地域",
    GA: "ガボン",
    GM: "ガンビア",
    GE: "ジョージア",
    DE: "ドイツ",
    GH: "ガーナ",
    GI: "ジブラルタル",
    GR: "ギリシャ",
    GL: "グリーンランド",
    GD: "グレナダ",
    GP: "グアドループ",
    GU: "グアム",
    GT: "グアテマラ",
    GN: "ギニア",
    GW: "ギニアビサウ",
    GY: "ガイアナ",
    HT: "ハイチ",
    HM: "ハード島とマクドナルド諸島",
    VA: "バチカン市国",
    HN: "ホンジュラス",
    HK: "香港",
    HU: "ハンガリー",
    IS: "アイスランド",
    IN: "インド",
    ID: "インドネシア",
    IR: "イラン・イスラム共和国",
    IQ: "イラク",
    IE: "アイルランド",
    IL: "イスラエル",
    IT: "イタリア",
    JM: "ジャマイカ",
    JP: "日本",
    JO: "ヨルダン",
    KZ: "カザフスタン",
    KE: "ケニア",
    KI: "キリバス",
    KP: "朝鮮民主主義人民共和国",
    KR: "大韓民国",
    KW: "クウェート",
    KG: "キルギス",
    LA: "ラオス人民民主共和国",
    LV: "ラトビア",
    LB: "レバノン",
    LS: "レソト",
    LR: "リベリア",
    LY: "リビア",
    LI: "リヒテンシュタイン",
    LT: "リトアニア",
    LU: "ルクセンブルク",
    MO: "マカオ",
    MK: "マケドニア旧ユーゴスラビア共和国",
    MG: "マダガスカル",
    MW: "マラウイ",
    MY: "マレーシア",
    MV: "モルディブ",
    ML: "マリ",
    MT: "マルタ",
    MH: "マーシャル諸島",
    MQ: "マルティニーク",
    MR: "モーリタニア",
    MU: "モーリシャス",
    YT: "マヨット",
    MX: "メキシコ",
    FM: "ミクロネシア連邦",
    MD: "モルドバ共和国",
    MC: "モナコ",
    MN: "モンゴル",
    MS: "モントセラト",
    MA: "モロッコ",
    MZ: "モザンビーク",
    MM: "ミャンマー",
    NA: "ナミビア",
    NR: "ナウル",
    NP: "ネパール",
    NL: "オランダ",
    NC: "ニューカレドニア",
    NZ: "ニュージーランド",
    NI: "ニカラグア",
    NE: "ニジェール",
    NG: "ナイジェリア",
    NU: "ニウエ",
    NF: "ノーフォーク島",
    MP: "北マリアナ諸島",
    NO: "ノルウェー",
    OM: "オマーン",
    PK: "パキスタン",
    PW: "パラオ",
    PS: "パレスチナ",
    PA: "パナマ",
    PG: "パプアニューギニア",
    PY: "パラグアイ",
    PE: "ペルー",
    PH: "フィリピン",
    PN: "ピトケアン",
    PL: "ポーランド",
    PT: "ポルトガル",
    PR: "プエルトリコ",
    QA: "カタール",
    RE: "レユニオン",
    RO: "ルーマニア",
    RU: "ロシア連邦",
    RW: "ルワンダ",
    SH: "セントヘレナ・アセンションおよびトリスタンダクーニャ",
    KN: "セントクリストファー・ネイビス",
    LC: "セントルシア",
    PM: "サンピエール島・ミクロン島",
    VC: "セントビンセントおよびグレナディーン諸島",
    WS: "サモア",
    SM: "サンマリノ",
    ST: "サントメ・プリンシペ",
    SA: "サウジアラビア",
    SN: "セネガル",
    SC: "セーシェル",
    SL: "シエラレオネ",
    SG: "シンガポール",
    SK: "スロバキア",
    SI: "スロベニア",
    SB: "ソロモン諸島",
    SO: "ソマリア",
    ZA: "南アフリカ",
    GS: "サウスジョージア・サウスサンドウィッチ諸島",
    ES: "スペイン",
    LK: "スリランカ",
    SD: "スーダン",
    SR: "スリナム",
    SJ: "スヴァールバル諸島およびヤンマイエン島",
    SZ: "スワジランド",
    SE: "スウェーデン",
    CH: "スイス",
    SY: "シリア・アラブ共和国",
    TW: "台湾",
    TJ: "タジキスタン",
    TZ: "タンザニア",
    TH: "タイ",
    TL: "東ティモール",
    TG: "トーゴ",
    TK: "トケラウ",
    TO: "トンガ",
    TT: "トリニダード・トバゴ",
    TN: "チュニジア",
    TR: "トルコ",
    TM: "トルクメニスタン",
    TC: "タークス・カイコス諸島",
    TV: "ツバル",
    UG: "ウガンダ",
    UA: "ウクライナ",
    AE: "アラブ首長国連邦",
    GB: "イギリス",
    US: "アメリカ合衆国",
    UM: "合衆国領有小離島",
    UY: "ウルグアイ",
    UZ: "ウズベキスタン",
    VU: "バヌアツ",
    VE: "ベネズエラ・ボリバル共和国",
    VN: "ベトナム",
    VG: "イギリス領ヴァージン諸島",
    VI: "アメリカ領ヴァージン諸島",
    WF: "ウォリス・フツナ",
    EH: "西サハラ",
    YE: "イエメン",
    ZM: "ザンビア",
    ZW: "ジンバブエ",
    AX: "オーランド諸島",
    BQ: "ボネール、シント・ユースタティウスおよびサバ",
    CW: "キュラソー",
    GG: "ガーンジー",
    IM: "マン島",
    JE: "ジャージー",
    ME: "モンテネグロ",
    BL: "サン・バルテルミー",
    MF: "サン・マルタン（フランス領）",
    RS: "セルビア",
    SX: "シント・マールテン（オランダ領）",
    SS: "南スーダン",
    XK: "コソ",
};

function from$n(country) {
    return names$m[country] || from$n(Alpha2.from(country));
}
function parse$n(country) {
    const result = Object.entries(names$m).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$m = {
    AD: "ანდორა",
    AE: "არაბთა გაერთიანებული საამიროები",
    AF: "ავღანეთი",
    AG: "ანტიგუა და ბარბუდა",
    AI: "ანგვილა",
    AL: "ალბანეთი",
    AM: "სომხეთი",
    AO: "ანგოლა",
    AQ: "ანტარქტიკა",
    AR: "არგენტინა",
    AS: "ამერიკის სამოა",
    AT: "ავსტრია",
    AU: "ავსტრალია",
    AW: "არუბა",
    AX: "ალანდის კუნძულები",
    AZ: "აზერბაიჯანი",
    BA: "ბოსნია და ჰერცეგოვინა",
    BB: "ბარბადოსი",
    BD: "ბანგლადეში",
    BE: "ბელგია",
    BF: "ბურკინა-ფასო",
    BG: "ბულგარეთი",
    BH: "ბაჰრეინი",
    BI: "ბურუნდი",
    BJ: "ბენინი",
    BL: "სენ-ბართელმი",
    BM: "ბერმუდა",
    BN: "ბრუნეი",
    BO: "ბოლივია",
    BQ: "კარიბის ნიდერლანდები",
    BR: "ბრაზილია",
    BS: "ბაჰამის კუნძულები",
    BT: "ბუტანი",
    BV: "ბუვე",
    BW: "ბოტსვანა",
    BY: "ბელარუსი",
    BZ: "ბელიზი",
    CA: "კანადა",
    CC: "ქოქოსის (კილინგის) კუნძულები",
    CD: "კონგო - კინშასა",
    CF: "ცენტრალური აფრიკის რესპუბლიკა",
    CG: "კონგო - ბრაზავილი",
    CH: "შვეიცარია",
    CI: "კოტ-დივუარი",
    CK: "კუკის კუნძულები",
    CL: "ჩილე",
    CM: "კამერუნი",
    CN: "ჩინეთი",
    CO: "კოლუმბია",
    CR: "კოსტა-რიკა",
    CU: "კუბა",
    CV: "კაბო-ვერდე",
    CW: "კიურასაო",
    CX: "შობის კუნძული",
    CY: "კვიპროსი",
    CZ: "ჩეხეთის რესპუბლიკა",
    DE: "გერმანია",
    DJ: "ჯიბუტი",
    DK: "დანია",
    DM: "დომინიკა",
    DO: "დომინიკელთა რესპუბლიკა",
    DZ: "ალჟირი",
    EC: "ეკვადორი",
    EE: "ესტონეთი",
    EG: "ეგვიპტე",
    EH: "დასავლეთ საჰარა",
    ER: "ერიტრეა",
    ES: "ესპანეთი",
    ET: "ეთიოპია",
    FI: "ფინეთი",
    FJ: "ფიჯი",
    FK: "ფოლკლენდის კუნძულები",
    FM: "მიკრონეზია",
    FO: "ფარერის კუნძულები",
    FR: "საფრანგეთი",
    GA: "გაბონი",
    GB: "გაერთიანებული სამეფო",
    GD: "გრენადა",
    GE: "საქართველო",
    GF: "საფრანგეთის გვიანა",
    GG: "გერნსი",
    GH: "განა",
    GI: "გიბრალტარი",
    GL: "გრენლანდია",
    GM: "გამბია",
    GN: "გვინეა",
    GP: "გვადელუპა",
    GQ: "ეკვატორული გვინეა",
    GR: "საბერძნეთი",
    GS: "სამხრეთ ჯორჯია და სამხრეთ სენდვიჩის კუნძულები",
    GT: "გვატემალა",
    GU: "გუამი",
    GW: "გვინეა-ბისაუ",
    GY: "გაიანა",
    HK: "ჰონკონგი",
    HM: "ჰერდი და მაკდონალდის კუნძულები",
    HN: "ჰონდურასი",
    HR: "ხორვატია",
    HT: "ჰაიტი",
    HU: "უნგრეთი",
    ID: "ინდონეზია",
    IE: "ირლანდია",
    IL: "ისრაელი",
    IM: "მენის კუნძული",
    IN: "ინდოეთი",
    IO: "ბრიტანეთის ტერიტორია ინდოეთის ოკეანეში",
    IQ: "ერაყი",
    IR: "ირანი",
    IS: "ისლანდია",
    IT: "იტალია",
    JE: "ჯერსი",
    JM: "იამაიკა",
    JO: "იორდანია",
    JP: "იაპონია",
    KE: "კენია",
    KG: "ყირგიზეთი",
    KH: "კამბოჯა",
    KI: "კირიბატი",
    KM: "კომორის კუნძულები",
    KN: "სენტ-კიტსი და ნევისი",
    KP: "ჩრდილოეთ კორეა",
    KR: "სამხრეთ კორეა",
    KW: "ქუვეითი",
    KY: "კაიმანის კუნძულები",
    KZ: "ყაზახეთი",
    LA: "ლაოსი",
    LB: "ლიბანი",
    LC: "სენტ-ლუსია",
    LI: "ლიხტენშტაინი",
    LK: "შრი-ლანკა",
    LR: "ლიბერია",
    LS: "ლესოთო",
    LT: "ლიტვა",
    LU: "ლუქსემბურგი",
    LV: "ლატვია",
    LY: "ლიბია",
    MA: "მაროკო",
    MC: "მონაკო",
    MD: "მოლდოვა",
    ME: "მონტენეგრო",
    MF: "სენ-მარტენი",
    MG: "მადაგასკარი",
    MH: "მარშალის კუნძულები",
    MK: "მაკედონია",
    ML: "მალი",
    MM: "მიანმარი (ბირმა)",
    MN: "მონღოლეთი",
    MO: "მაკაო",
    MP: "ჩრდილოეთ მარიანას კუნძულები",
    MQ: "მარტინიკა",
    MR: "მავრიტანია",
    MS: "მონსერატი",
    MT: "მალტა",
    MU: "მავრიკი",
    MV: "მალდივები",
    MW: "მალავი",
    MX: "მექსიკა",
    MY: "მალაიზია",
    MZ: "მოზამბიკი",
    NA: "ნამიბია",
    NC: "ახალი კალედონია",
    NE: "ნიგერი",
    NF: "ნორფოლკის კუნძული",
    NG: "ნიგერია",
    NI: "ნიკარაგუა",
    NL: "ნიდერლანდები",
    NO: "ნორვეგია",
    NP: "ნეპალი",
    NR: "ნაურუ",
    NU: "ნიუე",
    NZ: "ახალი ზელანდია",
    OM: "ომანი",
    PA: "პანამა",
    PE: "პერუ",
    PF: "საფრანგეთის პოლინეზია",
    PG: "პაპუა-ახალი გვინეა",
    PH: "ფილიპინები",
    PK: "პაკისტანი",
    PL: "პოლონეთი",
    PM: "სენ-პიერი და მიკელონი",
    PN: "პიტკერნის კუნძულები",
    PR: "პუერტო-რიკო",
    PS: "პალესტინის ტერიტორიები",
    PT: "პორტუგალია",
    PW: "პალაუ",
    PY: "პარაგვაი",
    QA: "კატარი",
    RE: "რეუნიონი",
    RO: "რუმინეთი",
    RS: "სერბეთი",
    RU: "რუსეთი",
    RW: "რუანდა",
    SA: "საუდის არაბეთი",
    SB: "სოლომონის კუნძულები",
    SC: "სეიშელის კუნძულები",
    SD: "სუდანი",
    SE: "შვედეთი",
    SG: "სინგაპური",
    SH: "წმინდა ელენეს კუნძული",
    SI: "სლოვენია",
    SJ: "შპიცბერგენი და იან-მაიენი",
    SK: "სლოვაკეთი",
    SL: "სიერა-ლეონე",
    SM: "სან-მარინო",
    SN: "სენეგალი",
    SO: "სომალი",
    SR: "სურინამი",
    SS: "სამხრეთ სუდანი",
    ST: "სან-ტომე და პრინსიპი",
    SV: "სალვადორი",
    SX: "სინტ-მარტენი",
    SY: "სირია",
    SZ: "სვაზილენდი",
    TC: "თერქს-ქაიქოსის კუნძულები",
    TD: "ჩადი",
    TF: "ფრანგული სამხრეთის ტერიტორიები",
    TG: "ტოგო",
    TH: "ტაილანდი",
    TJ: "ტაჯიკეთი",
    TK: "ტოკელაუ",
    TL: "ტიმორ-ლესტე",
    TM: "თურქმენეთი",
    TN: "ტუნისი",
    TO: "ტონგა",
    TR: "თურქეთი",
    TT: "ტრინიდადი და ტობაგო",
    TV: "ტუვალუ",
    TW: "ტაივანი",
    TZ: "ტანზანია",
    UA: "უკრაინა",
    UG: "უგანდა",
    UM: "აშშ-ის შორეული კუნძულები",
    US: "ამერიკის შეერთებული შტატები",
    UY: "ურუგვაი",
    UZ: "უზბეკეთი",
    VA: "ქალაქი ვატიკანი",
    VC: "სენტ-ვინსენტი და გრენადინები",
    VE: "ვენესუელა",
    VG: "ბრიტანეთის ვირჯინის კუნძულები",
    VI: "აშშ-ის ვირჯინის კუნძულები",
    VN: "ვიეტნამი",
    VU: "ვანუატუ",
    WF: "უოლისი და ფუტუნა",
    WS: "სამოა",
    XK: "კოსოვო",
    YE: "იემენი",
    YT: "მაიოტა",
    ZA: "სამხრეთ აფრიკის რესპუბლიკა",
    ZM: "ზამბია",
    ZW: "ზიმბაბვ",
};

function from$m(country) {
    return names$l[country] || from$m(Alpha2.from(country));
}
function parse$m(country) {
    const result = Object.entries(names$l).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$l = {
    AD: "Андорра",
    AE: "Біріккен Араб Әмірліктері",
    AF: "Ауғанстан",
    AG: "Антигуа және Барбуда",
    AI: "Ангилья",
    AL: "Албания",
    AM: "Армения",
    AO: "Ангола",
    AQ: "Антарктида",
    AR: "Аргентина",
    AS: "Америкалық Самоа",
    AT: "Австрия",
    AU: "Австралия",
    AW: "Аруба",
    AX: "Аланд аралдары",
    AZ: "Әзірбайжан",
    BA: "Босния және Герцеговина",
    BB: "Барбадос",
    BD: "Бангладеш",
    BE: "Бельгия",
    BF: "Буркина-Фасо",
    BG: "Болгария",
    BH: "Бахрейн",
    BI: "Бурунди",
    BJ: "Бенин",
    BL: "Сен-Бартелеми",
    BM: "Бермуд аралдары",
    BN: "Бруней",
    BO: "Боливия",
    BQ: "Кариб Нидерландысы",
    BR: "Бразилия",
    BS: "Багам аралдары",
    BT: "Бутан",
    BV: "Буве аралы",
    BW: "Ботсвана",
    BY: "Беларусь",
    BZ: "Белиз",
    CA: "Канада",
    CC: "Кокос (Килинг) аралдары",
    CD: "Конго",
    CF: "Орталық Африка Республикасы",
    CG: "Конго Республикасы",
    CH: "Швейцария",
    CI: "Кот-д’Ивуар",
    CK: "Кук аралдары",
    CL: "Чили",
    CM: "Камерун",
    CN: "Қытай",
    CO: "Колумбия",
    CR: "Коста-Рика",
    CU: "Куба",
    CV: "Кабо-Верде",
    CW: "Кюрасао",
    CX: "Рождество аралы",
    CY: "Кипр",
    CZ: "Чех Республикасы",
    DE: "Германия",
    DJ: "Джибути",
    DK: "Дания",
    DM: "Доминика",
    DO: "Доминикан Республикасы",
    DZ: "Алжир",
    EC: "Эквадор",
    EE: "Эстония",
    EG: "Мысыр",
    EH: "Батыс Сахара",
    ER: "Эритрея",
    ES: "Испания",
    ET: "Эфиопия",
    FI: "Финляндия",
    FJ: "Фиджи",
    FK: "Фолкленд аралдары",
    FM: "Микронезия",
    FO: "Фарер аралдары",
    FR: "Франция",
    GA: "Габон",
    GB: "Ұлыбритания",
    GD: "Гренада",
    GE: "Грузия",
    GF: "Француз Гвианасы",
    GG: "Гернси",
    GH: "Гана",
    GI: "Гибралтар",
    GL: "Гренландия",
    GM: "Гамбия",
    GN: "Гвинея",
    GP: "Гваделупа",
    GQ: "Экваторлық Гвинея",
    GR: "Грекия",
    GS: "Оңтүстік Георгия және Оңтүстік Сандвич аралдары",
    GT: "Гватемала",
    GU: "Гуам",
    GW: "Гвинея-Бисау",
    GY: "Гайана",
    HK: "Гонконг",
    HM: "Херд аралы және Макдональд аралдары",
    HN: "Гондурас",
    HR: "Хорватия",
    HT: "Гаити",
    HU: "Венгрия",
    ID: "Индонезия",
    IE: "Ирландия",
    IL: "Израиль",
    IM: "Мэн аралы",
    IN: "Үндістан",
    IO: "Үнді мұхитындағы Британ аймағы",
    IQ: "Ирак",
    IR: "Иран",
    IS: "Исландия",
    IT: "Италия",
    JE: "Джерси",
    JM: "Ямайка",
    JO: "Иордания",
    JP: "Жапония",
    KE: "Кения",
    KG: "Қырғызстан",
    KH: "Камбоджа",
    KI: "Кирибати",
    KM: "Комор аралдары",
    KN: "Сент-Китс және Невис",
    KP: "Солтүстік Корея",
    KR: "Оңтүстік Корея",
    KW: "Кувейт",
    KY: "Кайман аралдары",
    KZ: "Қазақстан",
    LA: "Лаос",
    LB: "Ливан",
    LC: "Сент-Люсия",
    LI: "Лихтенштейн",
    LK: "Шри-Ланка",
    LR: "Либерия",
    LS: "Лесото",
    LT: "Литва",
    LU: "Люксембург",
    LV: "Латвия",
    LY: "Ливия",
    MA: "Марокко",
    MC: "Монако",
    MD: "Молдова",
    ME: "Черногория",
    MF: "Сен-Мартен",
    MG: "Мадагаскар",
    MH: "Маршалл аралдары",
    MK: "Македония Республикасы",
    ML: "Мали",
    MM: "Мьянма (Бирма)",
    MN: "Моңғолия",
    MO: "Макао",
    MP: "Солтүстік Мариана аралдары",
    MQ: "Мартиника",
    MR: "Мавритания",
    MS: "Монтсеррат",
    MT: "Мальта",
    MU: "Маврикий",
    MV: "Мальдив аралдары",
    MW: "Малави",
    MX: "Мексика",
    MY: "Малайзия",
    MZ: "Мозамбик",
    NA: "Намибия",
    NC: "Жаңа Каледония",
    NE: "Нигер",
    NF: "Норфолк аралы",
    NG: "Нигерия",
    NI: "Никарагуа",
    NL: "Нидерланд",
    NO: "Норвегия",
    NP: "Непал",
    NR: "Науру",
    NU: "Ниуэ",
    NZ: "Жаңа Зеландия",
    OM: "Оман",
    PA: "Панама",
    PE: "Перу",
    PF: "Француз Полинезиясы",
    PG: "Папуа — Жаңа Гвинея",
    PH: "Филиппин",
    PK: "Пәкістан",
    PL: "Польша",
    PM: "Сен-Пьер және Микелон",
    PN: "Питкэрн аралдары",
    PR: "Пуэрто-Рико",
    PS: "Палестина аймақтары",
    PT: "Португалия",
    PW: "Палау",
    PY: "Парагвай",
    QA: "Катар",
    RE: "Реюньон",
    RO: "Румыния",
    RS: "Сербия",
    RU: "Ресей",
    RW: "Руанда",
    SA: "Сауд Арабиясы",
    SB: "Соломон аралдары",
    SC: "Сейшель аралдары",
    SD: "Судан",
    SE: "Швеция",
    SG: "Сингапур",
    SH: "Әулие Елена аралы",
    SI: "Словения",
    SJ: "Шпицберген және Ян-Майен",
    SK: "Словакия",
    SL: "Сьерра-Леоне",
    SM: "Сан-Марино",
    SN: "Сенегал",
    SO: "Сомали",
    SR: "Суринам",
    SS: "Оңтүстік Судан",
    ST: "Сан-Томе және Принсипи",
    SV: "Сальвадор",
    SX: "Синт-Мартен",
    SY: "Сирия",
    SZ: "Свазиленд",
    TC: "Теркс және Кайкос аралдары",
    TD: "Чад",
    TF: "Францияның оңтүстік аймақтары",
    TG: "Того",
    TH: "Тайланд",
    TJ: "Тәжікстан",
    TK: "Токелау",
    TL: "Тимор-Лесте",
    TM: "Түрікменстан",
    TN: "Тунис",
    TO: "Тонга",
    TR: "Түркия",
    TT: "Тринидад және Тобаго",
    TV: "Тувалу",
    TW: "Тайвань",
    TZ: "Танзания",
    UA: "Украина",
    UG: "Уганда",
    UM: "АҚШ-тың сыртқы кіші аралдары",
    US: "Америка Құрама Штаттары",
    UY: "Уругвай",
    UZ: "Өзбекстан",
    VA: "Ватикан",
    VC: "Сент-Винсент және Гренадин аралдары",
    VE: "Венесуэла",
    VG: "Британдық Виргин аралдары",
    VI: "АҚШ-тың Виргин аралдары",
    VN: "Вьетнам",
    VU: "Вануату",
    WF: "Уоллис және Футуна",
    WS: "Самоа",
    XK: "Косово",
    YE: "Йемен",
    YT: "Майотта",
    ZA: "Оңтүстік Африка Республикасы",
    ZM: "Замбия",
    ZW: "Зимбабв",
};

function from$l(country) {
    return names$k[country] || from$l(Alpha2.from(country));
}
function parse$l(country) {
    const result = Object.entries(names$k).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$k = {
    AF: "아프가니스탄",
    AL: "알바니아",
    DZ: "알제리",
    AS: "아메리칸 사모아",
    AD: "안도라",
    AO: "앙골라",
    AI: "앵 귈라",
    AQ: "남극 대륙",
    AG: "앤티가 바부 다",
    AR: "아르헨티나",
    AM: "아르메니아",
    AW: "아루바",
    AU: "호주",
    AT: "오스트리아",
    AZ: "아제르바이잔",
    BS: "바하마",
    BH: "바레인",
    BD: "방글라데시",
    BB: "바베이도스",
    BY: "벨라루스",
    BE: "벨기에",
    BZ: "벨리즈",
    BJ: "베냉",
    BM: "버뮤다",
    BT: "부탄",
    BO: "볼리비아",
    BA: "보스니아 헤르체고비나",
    BW: "보츠와나",
    BV: "부베 섬",
    BR: "브라질",
    IO: "영국령 인도양 지역",
    BN: "브루나이 다루 살람",
    BG: "불가리아",
    BF: "부키 나 파소",
    BI: "부룬디",
    KH: "캄보디아",
    CM: "카메룬",
    CA: "캐나다",
    CV: "카보 베르데",
    KY: "케이맨 제도",
    CF: "중앙 아프리카 공화국",
    TD: "차드",
    CL: "칠레",
    CN: "중국",
    CX: "크리스마스 섬",
    CC: "코코스 군도",
    CO: "콜롬비아",
    KM: "코모로",
    CG: "콩고",
    CD: "콩고 민주 공화국",
    CK: "쿡 제도",
    CR: "코스타리카",
    CI: "코트 디부 아르",
    HR: "크로아티아",
    CU: "쿠바",
    CY: "키프로스",
    CZ: "체코 공화국",
    DK: "덴마크",
    DJ: "지부티",
    DM: "도미니카 공화국",
    DO: "도미니카 공화국",
    EC: "에콰도르",
    EG: "이집트",
    SV: "엘살바도르",
    GQ: "적도 기니",
    ER: "에리트레아",
    EE: "에스토니아",
    ET: "에티오피아",
    FK: "포클랜드 제도 (말 비나 스)",
    FO: "페로 제도",
    FJ: "피지",
    FI: "핀란드",
    FR: "프랑스",
    GF: "프랑스 령 기아나",
    PF: "프랑스 령 폴리네시아의",
    TF: "프랑스 남부 지역",
    GA: "가봉",
    GM: "감비아",
    GE: "그루지야",
    DE: "독일",
    GH: "가나",
    GI: "지브롤터",
    GR: "그리스",
    GL: "그린란드",
    GD: "그레나다",
    GP: "과들루프",
    GU: "괌",
    GT: "과테말라",
    GN: "기니",
    GW: "기니 비사우",
    GY: "가이아나",
    HT: "아이티",
    HM: "허드 섬 및 맥도널드 제도",
    VA: "성좌 (바티칸 시국)",
    HN: "온두라스",
    HK: "홍콩",
    HU: "헝가리",
    IS: "아이슬란드",
    IN: "인도",
    ID: "인도네시아 공화국",
    IR: "이란, 이슬람 공화국",
    IQ: "이라크",
    IE: "아일랜드",
    IL: "이스라엘",
    IT: "이탈리아",
    JM: "자메이카",
    JP: "일본",
    JO: "요르단",
    KZ: "카자흐스탄",
    KE: "케냐",
    KI: "키리바시",
    KP: "한국, 조선 민주주의 인민 공화국",
    KR: "대한민국",
    KW: "쿠웨이트",
    KG: "키르기즈스탄",
    LA: "라오스 인민 민주주의 공화국",
    LV: "라트비아",
    LB: "레바논",
    LS: "레소토",
    LR: "라이베리아",
    LY: "리비아 아랍 자 마히리 야",
    LI: "리히텐슈타인",
    LT: "리투아니아",
    LU: "룩셈부르크",
    MO: "마카오",
    MK: "마케도니아, 이전의 유고 슬라비아 공화국",
    MG: "마다가스카르",
    MW: "말라위",
    MY: "말레이시아",
    MV: "몰디브",
    ML: "말리",
    MT: "몰타",
    MH: "마샬 군도",
    MQ: "마르티니크",
    MR: "모리타니",
    MU: "모리셔스",
    YT: "마 요트",
    MX: "멕시코",
    FM: "미크로네시아,",
    MD: "몰도바, 공화국",
    MC: "모나코",
    MN: "몽골리아",
    MS: "몬세 라트",
    MA: "모로코",
    MZ: "모잠비크",
    MM: "미얀마",
    NA: "나미비아",
    NR: "나우루",
    NP: "네팔",
    NL: "네덜란드",
    NC: "뉴 칼레도니아",
    NZ: "뉴질랜드",
    NI: "니카라과",
    NE: "니제르",
    NG: "나이지리아",
    NU: "니우에",
    NF: "노퍽 섬",
    MP: "북 마리아나 제도",
    NO: "노르웨이",
    OM: "오만",
    PK: "파키스탄",
    PW: "팔라우",
    PS: "팔레스타인 자치구, 점령 자",
    PA: "파나마",
    PG: "파푸아 뉴기니",
    PY: "파라과이",
    PE: "페루",
    PH: "필리핀 제도",
    PN: "핏 케언",
    PL: "폴란드",
    PT: "포르투갈",
    PR: "푸에르토 리코",
    QA: "카타르",
    RE: "재결합",
    RO: "루마니아",
    RU: "러시아 연방",
    RW: "르완다",
    SH: "세인트 헬레나",
    KN: "세인트 키츠 네비스",
    LC: "세인트 루시아",
    PM: "생 피에르 미 클롱",
    VC: "세인트 빈센트 그레나딘",
    WS: "사모아",
    SM: "산 마리노",
    ST: "상투 메 프린시 페",
    SA: "사우디 아라비아",
    SN: "세네갈",
    SC: "세이셸",
    SL: "시에라 리온",
    SG: "싱가포르",
    SK: "슬로바키아",
    SI: "슬로베니아",
    SB: "솔로몬 제도",
    SO: "소말리아",
    ZA: "남아프리카",
    GS: "사우스 조지아 및 사우스 샌드위치 제도",
    ES: "스페인",
    LK: "스리랑카",
    SD: "수단",
    SR: "수리남",
    SJ: "스발 바르와 얀 메이 엔",
    SZ: "스와질란드",
    SE: "스웨덴",
    CH: "스위스",
    SY: "시리아",
    TW: "대만",
    TJ: "타지키스탄",
    TZ: "탄자니아, 유엔",
    TH: "태국",
    TL: "동 티모르",
    TG: "가다",
    TK: "토켈 라우",
    TO: "통가",
    TT: "트리니다드 토바고",
    TN: "튀니지",
    TR: "터키",
    TM: "투르크 메니스탄",
    TC: "터크 스 케이 커스 제도",
    TV: "투발루",
    UG: "우간다",
    UA: "우크라이나",
    AE: "아랍 에미리트",
    GB: "영국",
    US: "미국",
    UM: "미국령 군소 제도",
    UY: "우루과이",
    UZ: "우즈베키스탄",
    VU: "바누아투",
    VE: "베네수엘라",
    VN: "베트남",
    VG: "영국령 버진 아일랜드",
    VI: "미국령 버진 아일랜드",
    WF: "월리스 푸 투나",
    EH: "서사하라",
    YE: "예멘 아랍 공화국",
    ZM: "잠비아",
    ZW: "짐바브웨",
    AX: "올란드 제도",
    BQ: "보네르, 신트 유스 타티 우스, 사바",
    CW: "쿠라 사오",
    GG: "건지 섬",
    IM: "아일 오브 맨",
    JE: "저지",
    ME: "몬테네그로",
    BL: "생 바르 텔레 미",
    MF: "세인트 마틴 (프랑스어 부분)",
    RS: "세르비아",
    SX: "신트 마틴 (네덜란드어 부분)",
    SS: "남 수단",
    XK: "코소",
};

function from$k(country) {
    return names$j[country] || from$k(Alpha2.from(country));
}
function parse$k(country) {
    const result = Object.entries(names$j).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$j = {
    AD: "Андорра",
    AE: "Бириккен Араб Эмираттары",
    AF: "Афганистан",
    AG: "Антигуа жана Барбуда",
    AI: "Ангуила",
    AL: "Албания",
    AM: "Армения",
    AO: "Ангола",
    AQ: "Антарктика",
    AR: "Аргентина",
    AS: "Америка Самоасы",
    AT: "Австрия",
    AU: "Австралия",
    AW: "Аруба",
    AX: "Аланд аралдары",
    AZ: "Азербайжан",
    BA: "Босния жана Герцеговина",
    BB: "Барбадос",
    BD: "Бангладеш",
    BE: "Бельгия",
    BF: "Буркина-Фасо",
    BG: "Болгария",
    BH: "Бахрейн",
    BI: "Бурунди",
    BJ: "Бенин",
    BL: "Сент Бартелеми",
    BM: "Бермуд аралдары",
    BN: "Бруней",
    BO: "Боливия",
    BQ: "Кариб Нидерланддары",
    BR: "Бразилия",
    BS: "Багам аралдары",
    BT: "Бутан",
    BV: "Буве аралдары",
    BW: "Ботсвана",
    BY: "Беларусь",
    BZ: "Белиз",
    CA: "Канада",
    CC: "Кокос (Килиӊ) аралдары",
    CD: "Конго-Киншаса",
    CF: "Борбордук Африка Республикасы",
    CG: "Конго-Браззавил",
    CH: "Швейцария",
    CI: "Кот-д’Ивуар",
    CK: "Кук аралдары",
    CL: "Чили",
    CM: "Камерун",
    CN: "Кытай",
    CO: "Колумбия",
    CR: "Коста-Рика",
    CU: "Куба",
    CV: "Капе Верде",
    CW: "Кюрасао",
    CX: "Крисмас аралы",
    CY: "Кипр",
    CZ: "Чехия",
    DE: "Германия",
    DJ: "Джибути",
    DK: "Дания",
    DM: "Доминика",
    DO: "Доминика Республикасы",
    DZ: "Алжир",
    EC: "Эквадор",
    EE: "Эстония",
    EG: "Египет",
    EH: "Батыш Сахара",
    ER: "Эритрея",
    ES: "Испания",
    ET: "Эфиопия",
    FI: "Финляндия",
    FJ: "Фиджи",
    FK: "Фолклэнд аралдары",
    FM: "Микронезия",
    FO: "Фарер аралдары",
    FR: "Франция",
    GA: "Габон",
    GB: "Улуу Британия",
    GD: "Гренада",
    GE: "Грузия",
    GF: "Гвиана (Франция)",
    GG: "Гернси",
    GH: "Гана",
    GI: "Гибралтар",
    GL: "Гренландия",
    GM: "Гамбия",
    GN: "Гвинея",
    GP: "Гваделупа",
    GQ: "Экваториалдык Гвинея",
    GR: "Греция",
    GS: "Түштүк Жоржия жана Түштүк Сэндвич аралдары",
    GT: "Гватемала",
    GU: "Гуам",
    GW: "Гвинея-Бисау",
    GY: "Гайана",
    HK: "Гонконг Кытай ААА",
    HM: "Херд жана Макдоналд аралдары",
    HN: "Гондурас",
    HR: "Хорватия",
    HT: "Гаити",
    HU: "Венгрия",
    ID: "Индонезия",
    IE: "Ирландия",
    IL: "Израиль",
    IM: "Мэн аралы",
    IN: "Индия",
    IO: "Британиянын Индия океанындагы аймагы",
    IQ: "Ирак",
    IR: "Иран",
    IS: "Исландия",
    IT: "Италия",
    JE: "Жерси",
    JM: "Ямайка",
    JO: "Иордания",
    JP: "Япония",
    KE: "Кения",
    KG: "Кыргызстан",
    KH: "Камбоджа",
    KI: "Кирибати",
    KM: "Коморос",
    KN: "Сент-Китс жана Невис",
    KP: "Түндүк Корея",
    KR: "Түштүк Корея",
    KW: "Кувейт",
    KY: "Кайман Аралдары",
    KZ: "Казакстан",
    LA: "Лаос",
    LB: "Ливан",
    LC: "Сент-Люсия",
    LI: "Лихтенштейн",
    LK: "Шри-Ланка",
    LR: "Либерия",
    LS: "Лесото",
    LT: "Литва",
    LU: "Люксембург",
    LV: "Латвия",
    LY: "Ливия",
    MA: "Марокко",
    MC: "Монако",
    MD: "Молдова",
    ME: "Черногория",
    MF: "Сент-Мартин",
    MG: "Мадагаскар",
    MH: "Маршалл аралдары",
    MK: "Македония",
    ML: "Мали",
    MM: "Мьянма (Бирма)",
    MN: "Монголия",
    MO: "Макау Кытай ААА",
    MP: "Түндүк Мариана аралдары",
    MQ: "Мартиника",
    MR: "Мавритания",
    MS: "Монсеррат",
    MT: "Мальта",
    MU: "Маврикий",
    MV: "Малдив аралдары",
    MW: "Малави",
    MX: "Мексика",
    MY: "Малайзия",
    MZ: "Мозамбик",
    NA: "Намибия",
    NC: "Жаӊы Каледония",
    NE: "Нигер",
    NF: "Норфолк аралы",
    NG: "Нигерия",
    NI: "Никарагуа",
    NL: "Нидерланддар",
    NO: "Норвегия",
    NP: "Непал",
    NR: "Науру",
    NU: "Ниуэ",
    NZ: "Жаӊы Зеландия",
    OM: "Оман",
    PA: "Панама",
    PE: "Перу",
    PF: "Француз Полинезиясы",
    PG: "Папуа Жаңы-Гвинея",
    PH: "Филлипин",
    PK: "Пакистан",
    PL: "Польша",
    PM: "Сен-Пьер жана Микелон",
    PN: "Питкэрн аралдары",
    PR: "Пуэрто-Рико",
    PS: "Палестина аймактары",
    PT: "Португалия",
    PW: "Палау",
    PY: "Парагвай",
    QA: "Катар",
    RE: "Реюнион",
    RO: "Румыния",
    RS: "Сербия",
    RU: "Россия",
    RW: "Руанда",
    SA: "Сауд Арабиясы",
    SB: "Соломон аралдары",
    SC: "Сейшелдер",
    SD: "Судан",
    SE: "Швеция",
    SG: "Сингапур",
    SH: "Ыйык Елена",
    SI: "Словения",
    SJ: "Свалбард жана Жан Майен",
    SK: "Словакия",
    SL: "Сьерра-Леоне",
    SM: "Сан Марино",
    SN: "Сенегал",
    SO: "Сомали",
    SR: "Суринаме",
    SS: "Түштүк Судан",
    ST: "Сан-Томе жана Принсипи",
    SV: "Эл Салвадор",
    SX: "Синт Маартен",
    SY: "Сирия",
    SZ: "Свазиленд",
    TC: "Түркс жана Кайкос аралдары",
    TD: "Чад",
    TF: "Франциянын Түштүктөгү аймактары",
    TG: "Того",
    TH: "Таиланд",
    TJ: "Тажикстан",
    TK: "Токелау",
    TL: "Тимор-Лесте",
    TM: "Түркмөнстан",
    TN: "Тунис",
    TO: "Тонга",
    TR: "Түркия",
    TT: "Тринидад жана Тобаго",
    TV: "Тувалу",
    TW: "Тайвань",
    TZ: "Танзания",
    UA: "Украина",
    UG: "Уганда",
    UM: "АКШнын сырткы аралдары",
    US: "Америка Кошмо Штаттары",
    UY: "Уругвай",
    UZ: "Өзбекстан",
    VA: "Ватикан",
    VC: "Сент-Винсент жана Гренадиналар",
    VE: "Венесуэла",
    VG: "Виргин аралдары (Британия)",
    VI: "Виргин аралдары (АКШ)",
    VN: "Вьетнам",
    VU: "Вануату",
    WF: "Уоллис жана Футуна",
    WS: "Самоа",
    XK: "Косово",
    YE: "Йемен",
    YT: "Майотта",
    ZA: "Түштүк Африка Республикасы",
    ZM: "Замбия",
    ZW: "Зимбабв",
};

function from$j(country) {
    return names$i[country] || from$j(Alpha2.from(country));
}
function parse$j(country) {
    const result = Object.entries(names$i).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$i = {
    AD: "Andora",
    AE: "Jungtiniai Arabų Emyratai",
    AF: "Afganistanas",
    AG: "Antigva ir Barbuda",
    AI: "Angilija",
    AL: "Albanija",
    AM: "Armėnija",
    AO: "Angola",
    AQ: "Antarktida",
    AR: "Argentina",
    AS: "Amerikos Samoa",
    AT: "Austrija",
    AU: "Australija",
    AW: "Aruba",
    AX: "Alandų Salos",
    AZ: "Azerbaidžanas",
    BA: "Bosnija ir Hercegovina",
    BB: "Barbadosas",
    BD: "Bangladešas",
    BE: "Belgija",
    BF: "Burkina Fasas",
    BG: "Bulgarija",
    BH: "Bahreinas",
    BI: "Burundis",
    BJ: "Beninas",
    BL: "Sen Bartelemi",
    BM: "Bermuda",
    BN: "Brunėjus",
    BO: "Bolivija",
    BQ: "Karibų Nyderlandai",
    BR: "Brazilija",
    BS: "Bahamos",
    BT: "Butanas",
    BV: "Buvė Sala",
    BW: "Botsvana",
    BY: "Baltarusija",
    BZ: "Belizas",
    CA: "Kanada",
    CC: "Kokosų (Kilingo) Salos",
    CD: "Kongas-Kinšasa",
    CF: "Centrinės Afrikos Respublika",
    CG: "Kongas-Brazavilis",
    CH: "Šveicarija",
    CI: "Dramblio Kaulo Krantas",
    CK: "Kuko Salos",
    CL: "Čilė",
    CM: "Kamerūnas",
    CN: "Kinija",
    CO: "Kolumbija",
    CR: "Kosta Rika",
    CU: "Kuba",
    CV: "Žaliasis Kyšulys",
    CW: "Kiurasao",
    CX: "Kalėdų Sala",
    CY: "Kipras",
    CZ: "Čekija",
    DE: "Vokietija",
    DJ: "Džibutis",
    DK: "Danija",
    DM: "Dominika",
    DO: "Dominikos Respublika",
    DZ: "Alžyras",
    EC: "Ekvadoras",
    EE: "Estija",
    EG: "Egiptas",
    EH: "Vakarų Sachara",
    ER: "Eritrėja",
    ES: "Ispanija",
    ET: "Etiopija",
    FI: "Suomija",
    FJ: "Fidžis",
    FK: "Folklando Salos",
    FM: "Mikronezija",
    FO: "Farerų Salos",
    FR: "Prancūzija",
    GA: "Gabonas",
    GB: "Jungtinė Karalystė",
    GD: "Grenada",
    GE: "Gruzija",
    GF: "Prancūzijos Gviana",
    GG: "Gernsis",
    GH: "Gana",
    GI: "Gibraltaras",
    GL: "Grenlandija",
    GM: "Gambija",
    GN: "Gvinėja",
    GP: "Gvadelupa",
    GQ: "Pusiaujo Gvinėja",
    GR: "Graikija",
    GS: "Pietų Džordžija ir Pietų Sandvičo salos",
    GT: "Gvatemala",
    GU: "Guamas",
    GW: "Bisau Gvinėja",
    GY: "Gajana",
    HK: "Honkongas",
    HM: "Herdo ir Makdonaldo Salos",
    HN: "Hondūras",
    HR: "Kroatija",
    HT: "Haitis",
    HU: "Vengrija",
    ID: "Indonezija",
    IE: "Airija",
    IL: "Izraelis",
    IM: "Meno Sala",
    IN: "Indija",
    IO: "Indijos Vandenyno Britų Sritis",
    IQ: "Irakas",
    IR: "Iranas",
    IS: "Islandija",
    IT: "Italija",
    JE: "Džersis",
    JM: "Jamaika",
    JO: "Jordanija",
    JP: "Japonija",
    KE: "Kenija",
    KG: "Kirgizija",
    KH: "Kambodža",
    KI: "Kiribatis",
    KM: "Komorai",
    KN: "Sent Kitsas ir Nevis",
    KP: "Šiaurės Korėja",
    KR: "Pietų Korėja",
    KW: "Kuveitas",
    KY: "Kaimanų Salos",
    KZ: "Kazachstanas",
    LA: "Laosas",
    LB: "Libanas",
    LC: "Sent Lusija",
    LI: "Lichtenšteinas",
    LK: "Šri Lanka",
    LR: "Liberija",
    LS: "Lesotas",
    LT: "Lietuva",
    LU: "Liuksemburgas",
    LV: "Latvija",
    LY: "Libija",
    MA: "Marokas",
    MC: "Monakas",
    MD: "Moldova",
    ME: "Juodkalnija",
    MF: "Sen Martenas",
    MG: "Madagaskaras",
    MH: "Maršalo Salos",
    MK: "Makedonija",
    ML: "Malis",
    MM: "Mianmaras (Birma)",
    MN: "Mongolija",
    MO: "Makao",
    MP: "Marianos Šiaurinės Salos",
    MQ: "Martinika",
    MR: "Mauritanija",
    MS: "Montseratas",
    MT: "Malta",
    MU: "Mauricijus",
    MV: "Maldyvai",
    MW: "Malavis",
    MX: "Meksika",
    MY: "Malaizija",
    MZ: "Mozambikas",
    NA: "Namibija",
    NC: "Naujoji Kaledonija",
    NE: "Nigeris",
    NF: "Norfolko sala",
    NG: "Nigerija",
    NI: "Nikaragva",
    NL: "Nyderlandai",
    NO: "Norvegija",
    NP: "Nepalas",
    NR: "Nauru",
    NU: "Niujė",
    NZ: "Naujoji Zelandija",
    OM: "Omanas",
    PA: "Panama",
    PE: "Peru",
    PF: "Prancūzijos Polinezija",
    PG: "Papua Naujoji Gvinėja",
    PH: "Filipinai",
    PK: "Pakistanas",
    PL: "Lenkija",
    PM: "Sen Pjeras ir Mikelonas",
    PN: "Pitkerno salos",
    PR: "Puerto Rikas",
    PS: "Palestinos teritorija",
    PT: "Portugalija",
    PW: "Palau",
    PY: "Paragvajus",
    QA: "Kataras",
    RE: "Reunjonas",
    RO: "Rumunija",
    RS: "Serbija",
    RU: "Rusija",
    RW: "Ruanda",
    SA: "Saudo Arabija",
    SB: "Saliamono Salos",
    SC: "Seišeliai",
    SD: "Sudanas",
    SE: "Švedija",
    SG: "Singapūras",
    SH: "Šv. Elenos Sala",
    SI: "Slovėnija",
    SJ: "Svalbardas ir Janas Majenas",
    SK: "Slovakija",
    SL: "Siera Leonė",
    SM: "San Marinas",
    SN: "Senegalas",
    SO: "Somalis",
    SR: "Surinamas",
    SS: "Pietų Sudanas",
    ST: "San Tomė ir Prinsipė",
    SV: "Salvadoras",
    SX: "Sint Martenas",
    SY: "Sirija",
    SZ: "Svazilandas",
    TC: "Terkso ir Kaikoso Salos",
    TD: "Čadas",
    TF: "Prancūzijos Pietų sritys",
    TG: "Togas",
    TH: "Tailandas",
    TJ: "Tadžikija",
    TK: "Tokelau",
    TL: "Rytų Timoras",
    TM: "Turkmėnistanas",
    TN: "Tunisas",
    TO: "Tonga",
    TR: "Turkija",
    TT: "Trinidadas ir Tobagas",
    TV: "Tuvalu",
    TW: "Taivanas",
    TZ: "Tanzanija",
    UA: "Ukraina",
    UG: "Uganda",
    UM: "Jungtinių Valstijų Mažosios Tolimosios Salos",
    US: "Jungtinės Valstijos",
    UY: "Urugvajus",
    UZ: "Uzbekistanas",
    VA: "Vatikano Miesto Valstybė",
    VC: "Šventasis Vincentas ir Grenadinai",
    VE: "Venesuela",
    VG: "Didžiosios Britanijos Mergelių Salos",
    VI: "Jungtinių Valstijų Mergelių Salos",
    VN: "Vietnamas",
    VU: "Vanuatu",
    WF: "Volisas ir Futūna",
    WS: "Samoa",
    XK: "Kosovas",
    YE: "Jemenas",
    YT: "Majotas",
    ZA: "Pietų Afrika",
    ZM: "Zambija",
    ZW: "Zimbabv",
};

function from$i(country) {
    return names$h[country] || from$i(Alpha2.from(country));
}
function parse$i(country) {
    const result = Object.entries(names$h).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$h = {
    AD: "Andora",
    AE: "Apvienotie Arābu Emirāti",
    AF: "Afganistāna",
    AG: "Antigva un Barbuda",
    AI: "Angilja",
    AL: "Albānija",
    AM: "Armēnija",
    AO: "Angola",
    AQ: "Antarktika",
    AR: "Argentīna",
    AS: "ASV Samoa",
    AT: "Austrija",
    AU: "Austrālija",
    AW: "Aruba",
    AX: "Olandes salas",
    AZ: "Azerbaidžāna",
    BA: "Bosnija un Hercegovina",
    BB: "Barbadosa",
    BD: "Bangladeša",
    BE: "Beļģija",
    BF: "Burkinafaso",
    BG: "Bulgārija",
    BH: "Bahreina",
    BI: "Burundija",
    BJ: "Benina",
    BL: "Senbartelmī",
    BM: "Bermudu salas",
    BN: "Bruneja",
    BO: "Bolīvija",
    BQ: "Nīderlandes Karību salas",
    BR: "Brazīlija",
    BS: "Bahamu salas",
    BT: "Butāna",
    BV: "Buvē sala",
    BW: "Botsvāna",
    BY: "Baltkrievija",
    BZ: "Beliza",
    CA: "Kanāda",
    CC: "Kokosu (Kīlinga) salas",
    CD: "Kongo (Kinšasa)",
    CF: "Centrālāfrikas Republika",
    CG: "Kongo (Brazavila)",
    CH: "Šveice",
    CI: "Kotdivuāra",
    CK: "Kuka salas",
    CL: "Čīle",
    CM: "Kamerūna",
    CN: "Ķīna",
    CO: "Kolumbija",
    CR: "Kostarika",
    CU: "Kuba",
    CV: "Kaboverde",
    CW: "Kirasao",
    CX: "Ziemsvētku sala",
    CY: "Kipra",
    CZ: "Čehija",
    DE: "Vācija",
    DJ: "Džibutija",
    DK: "Dānija",
    DM: "Dominika",
    DO: "Dominikāna",
    DZ: "Alžīrija",
    EC: "Ekvadora",
    EE: "Igaunija",
    EG: "Ēģipte",
    EH: "Rietumsahāra",
    ER: "Eritreja",
    ES: "Spānija",
    ET: "Etiopija",
    FI: "Somija",
    FJ: "Fidži",
    FK: "Folklenda salas",
    FM: "Mikronēzija",
    FO: "Fēru salas",
    FR: "Francija",
    GA: "Gabona",
    GB: "Lielbritānija",
    GD: "Grenāda",
    GE: "Gruzija",
    GF: "Francijas Gviāna",
    GG: "Gērnsija",
    GH: "Gana",
    GI: "Gibraltārs",
    GL: "Grenlande",
    GM: "Gambija",
    GN: "Gvineja",
    GP: "Gvadelupa",
    GQ: "Ekvatoriālā Gvineja",
    GR: "Grieķija",
    GS: "Dienviddžordžija un Dienvidsendviču salas",
    GT: "Gvatemala",
    GU: "Guama",
    GW: "Gvineja-Bisava",
    GY: "Gajāna",
    HK: "Ķīnas īpašās pārvaldes apgabals Honkonga",
    HM: "Hērda sala un Makdonalda salas",
    HN: "Hondurasa",
    HR: "Horvātija",
    HT: "Haiti",
    HU: "Ungārija",
    ID: "Indonēzija",
    IE: "Īrija",
    IL: "Izraēla",
    IM: "Mena",
    IN: "Indija",
    IO: "Indijas okeāna Britu teritorija",
    IQ: "Irāka",
    IR: "Irāna",
    IS: "Islande",
    IT: "Itālija",
    JE: "Džērsija",
    JM: "Jamaika",
    JO: "Jordānija",
    JP: "Japāna",
    KE: "Kenija",
    KG: "Kirgizstāna",
    KH: "Kambodža",
    KI: "Kiribati",
    KM: "Komoru salas",
    KN: "Sentkitsa un Nevisa",
    KP: "Ziemeļkoreja",
    KR: "Dienvidkoreja",
    KW: "Kuveita",
    KY: "Kaimanu salas",
    KZ: "Kazahstāna",
    LA: "Laosa",
    LB: "Libāna",
    LC: "Sentlūsija",
    LI: "Lihtenšteina",
    LK: "Šrilanka",
    LR: "Libērija",
    LS: "Lesoto",
    LT: "Lietuva",
    LU: "Luksemburga",
    LV: "Latvija",
    LY: "Lībija",
    MA: "Maroka",
    MC: "Monako",
    MD: "Moldova",
    ME: "Melnkalne",
    MF: "Senmartēna",
    MG: "Madagaskara",
    MH: "Māršala salas",
    MK: "Maķedonija",
    ML: "Mali",
    MM: "Mjanma (Birma)",
    MN: "Mongolija",
    MO: "Ķīnas īpašās pārvaldes apgabals Makao",
    MP: "Ziemeļu Marianas salas",
    MQ: "Martinika",
    MR: "Mauritānija",
    MS: "Montserrata",
    MT: "Malta",
    MU: "Maurīcija",
    MV: "Maldīvija",
    MW: "Malāvija",
    MX: "Meksika",
    MY: "Malaizija",
    MZ: "Mozambika",
    NA: "Namībija",
    NC: "Jaunkaledonija",
    NE: "Nigēra",
    NF: "Norfolkas sala",
    NG: "Nigērija",
    NI: "Nikaragva",
    NL: "Nīderlande",
    NO: "Norvēģija",
    NP: "Nepāla",
    NR: "Nauru",
    NU: "Niue",
    NZ: "Jaunzēlande",
    OM: "Omāna",
    PA: "Panama",
    PE: "Peru",
    PF: "Francijas Polinēzija",
    PG: "Papua-Jaungvineja",
    PH: "Filipīnas",
    PK: "Pakistāna",
    PL: "Polija",
    PM: "Senpjēra un Mikelona",
    PN: "Pitkērnas salas",
    PR: "Puertoriko",
    PS: "Palestīna",
    PT: "Portugāle",
    PW: "Palau",
    PY: "Paragvaja",
    QA: "Katara",
    RE: "Reinjona",
    RO: "Rumānija",
    RS: "Serbija",
    RU: "Krievija",
    RW: "Ruanda",
    SA: "Saūda Arābija",
    SB: "Zālamana salas",
    SC: "Seišelu salas",
    SD: "Sudāna",
    SE: "Zviedrija",
    SG: "Singapūra",
    SH: "Sv.Helēnas sala",
    SI: "Slovēnija",
    SJ: "Svalbāra un Jana Majena sala",
    SK: "Slovākija",
    SL: "Sjerraleone",
    SM: "Sanmarīno",
    SN: "Senegāla",
    SO: "Somālija",
    SR: "Surinama",
    SS: "Dienvidsudāna",
    ST: "Santome un Prinsipi",
    SV: "Salvadora",
    SX: "Sintmārtena",
    SY: "Sīrija",
    SZ: "Svazilenda",
    TC: "Tērksas un Kaikosas salas",
    TD: "Čada",
    TF: "Francijas Dienvidjūru teritorija",
    TG: "Togo",
    TH: "Taizeme",
    TJ: "Tadžikistāna",
    TK: "Tokelau",
    TL: "Austrumtimora",
    TM: "Turkmenistāna",
    TN: "Tunisija",
    TO: "Tonga",
    TR: "Turcija",
    TT: "Trinidāda un Tobāgo",
    TV: "Tuvalu",
    TW: "Taivāna",
    TZ: "Tanzānija",
    UA: "Ukraina",
    UG: "Uganda",
    UM: "ASV Mazās Aizjūras salas",
    US: "Amerikas Savienotās Valstis",
    UY: "Urugvaja",
    UZ: "Uzbekistāna",
    VA: "Vatikāns",
    VC: "Sentvinsenta un Grenadīnas",
    VE: "Venecuēla",
    VG: "Britu Virdžīnas",
    VI: "ASV Virdžīnas",
    VN: "Vjetnama",
    VU: "Vanuatu",
    WF: "Volisa un Futunas salas",
    WS: "Samoa",
    XK: "Kosova",
    YE: "Jemena",
    YT: "Majota",
    ZA: "Dienvidāfrikas Republika",
    ZM: "Zambija",
    ZW: "Zimbabv",
};

function from$h(country) {
    return names$g[country] || from$h(Alpha2.from(country));
}
function parse$h(country) {
    const result = Object.entries(names$g).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$g = {
    AD: "Андора",
    AE: "Обединети Арапски Емирати",
    AF: "Авганистан",
    AG: "Антигва и Барбуда",
    AI: "Ангвила",
    AL: "Албанија",
    AM: "Ерменија",
    AO: "Ангола",
    AQ: "Антарктик",
    AR: "Аргентина",
    AS: "Американска Самоа",
    AT: "Австрија",
    AU: "Австралија",
    AW: "Аруба",
    AX: "Оландски Острови",
    AZ: "Азербејџан",
    BA: "Босна и Херцеговина",
    BB: "Барбадос",
    BD: "Бангладеш",
    BE: "Белгија",
    BF: "Буркина Фасо",
    BG: "Бугарија",
    BH: "Бахреин",
    BI: "Бурунди",
    BJ: "Бенин",
    BL: "Свети Вартоломеј",
    BM: "Бермуди",
    BN: "Брунеј",
    BO: "Боливија",
    BQ: "Карипска Холандија",
    BR: "Бразил",
    BS: "Бахами",
    BT: "Бутан",
    BV: "Остров Буве",
    BW: "Боцвана",
    BY: "Белорусија",
    BZ: "Белизе",
    CA: "Канада",
    CC: "Кокосови (Килиншки) Острови",
    CD: "Конго - Киншаса",
    CF: "Централноафриканска Република",
    CG: "Конго - Бразавил",
    CH: "Швајцарија",
    CI: "Брегот на Слоновата Коска",
    CK: "Кукови Острови",
    CL: "Чиле",
    CM: "Камерун",
    CN: "Кина",
    CO: "Колумбија",
    CR: "Костарика",
    CU: "Куба",
    CV: "Зелен ’Рт",
    CW: "Курасао",
    CX: "Божиќен Остров",
    CY: "Кипар",
    CZ: "Чешка",
    DE: "Германија",
    DJ: "Џибути",
    DK: "Данска",
    DM: "Доминика",
    DO: "Доминиканска Република",
    DZ: "Алжир",
    EC: "Еквадор",
    EE: "Естонија",
    EG: "Египет",
    EH: "Западна Сахара",
    ER: "Еритреја",
    ES: "Шпанија",
    ET: "Етиопија",
    FI: "Финска",
    FJ: "Фиџи",
    FK: "Фолкландски Острови",
    FM: "Микронезија",
    FO: "Фарски Острови",
    FR: "Франција",
    GA: "Габон",
    GB: "Обединето Кралство",
    GD: "Гренада",
    GE: "Грузија",
    GF: "Француска Гвајана",
    GG: "Гернзи",
    GH: "Гана",
    GI: "Гибралтар",
    GL: "Гренланд",
    GM: "Гамбија",
    GN: "Гвинеја",
    GP: "Гвадалупе",
    GQ: "Екваторска Гвинеја",
    GR: "Грција",
    GS: "Јужна Џорџија и Јужни Сендвички Острови",
    GT: "Гватемала",
    GU: "Гуам",
    GW: "Гвинеја-Бисау",
    GY: "Гвајана",
    HK: "Хонг Конг С.А.Р Кина",
    HM: "Остров Херд и Острови Мекдоналд",
    HN: "Хондурас",
    HR: "Хрватска",
    HT: "Хаити",
    HU: "Унгарија",
    ID: "Индонезија",
    IE: "Ирска",
    IL: "Израел",
    IM: "Остров Ман",
    IN: "Индија",
    IO: "Британска Индоокеанска Територија",
    IQ: "Ирак",
    IR: "Иран",
    IS: "Исланд",
    IT: "Италија",
    JE: "Џерси",
    JM: "Јамајка",
    JO: "Јордан",
    JP: "Јапонија",
    KE: "Кенија",
    KG: "Киргистан",
    KH: "Камбоџа",
    KI: "Кирибати",
    KM: "Коморски Острови",
    KN: "Свети Кристофер и Невис",
    KP: "Северна Кореја",
    KR: "Јужна Кореја",
    KW: "Кувајт",
    KY: "Кајмански Острови",
    KZ: "Казахстан",
    LA: "Лаос",
    LB: "Либан",
    LC: "Света Луција",
    LI: "Лихтенштајн",
    LK: "Шри Ланка",
    LR: "Либерија",
    LS: "Лесото",
    LT: "Литванија",
    LU: "Луксембург",
    LV: "Латвија",
    LY: "Либија",
    MA: "Мароко",
    MC: "Монако",
    MD: "Молдавија",
    ME: "Црна Гора",
    MF: "Сент Мартин",
    MG: "Мадагаскар",
    MH: "Маршалски Острови",
    MK: "Македонија",
    ML: "Мали",
    MM: "Мјанмар (Бурма)",
    MN: "Монголија",
    MO: "Макао САР",
    MP: "Северни Маријански Острови",
    MQ: "Мартиник",
    MR: "Мавританија",
    MS: "Монсерат",
    MT: "Малта",
    MU: "Маврициус",
    MV: "Малдиви",
    MW: "Малави",
    MX: "Мексико",
    MY: "Малезија",
    MZ: "Мозамбик",
    NA: "Намибија",
    NC: "Нова Каледонија",
    NE: "Нигер",
    NF: "Норфолшки Остров",
    NG: "Нигерија",
    NI: "Никарагва",
    NL: "Холандија",
    NO: "Норвешка",
    NP: "Непал",
    NR: "Науру",
    NU: "Ниује",
    NZ: "Нов Зеланд",
    OM: "Оман",
    PA: "Панама",
    PE: "Перу",
    PF: "Француска Полинезија",
    PG: "Папуа Нова Гвинеја",
    PH: "Филипини",
    PK: "Пакистан",
    PL: "Полска",
    PM: "Сент Пјер и Микелан",
    PN: "Питкернски Острови",
    PR: "Порторико",
    PS: "Палестински територии",
    PT: "Португалија",
    PW: "Палау",
    PY: "Парагвај",
    QA: "Катар",
    RE: "Реунион",
    RO: "Романија",
    RS: "Србија",
    RU: "Русија",
    RW: "Руанда",
    SA: "Саудиска Арабија",
    SB: "Соломонски Острови",
    SC: "Сејшели",
    SD: "Судан",
    SE: "Шведска",
    SG: "Сингапур",
    SH: "Света Елена",
    SI: "Словенија",
    SJ: "Свалбард и Жан Мејен",
    SK: "Словачка",
    SL: "Сиера Леоне",
    SM: "Сан Марино",
    SN: "Сенегал",
    SO: "Сомалија",
    SR: "Суринам",
    SS: "Јужен Судан",
    ST: "Сао Томе и Принсипе",
    SV: "Ел Салвадор",
    SX: "Свети Мартин",
    SY: "Сирија",
    SZ: "Свазиленд",
    TC: "Острови Туркс и Каикос",
    TD: "Чад",
    TF: "Француски Јужни Територии",
    TG: "Того",
    TH: "Тајланд",
    TJ: "Таџикистан",
    TK: "Токелау",
    TL: "Источен Тимор (Тимор Лесте)",
    TM: "Туркменистан",
    TN: "Тунис",
    TO: "Тонга",
    TR: "Турција",
    TT: "Тринидад и Тобаго",
    TV: "Тувалу",
    TW: "Тајван",
    TZ: "Танзанија",
    UA: "Украина",
    UG: "Уганда",
    UM: "Американски територии во Пацификот",
    US: "Соединети Американски Држави",
    UY: "Уругвај",
    UZ: "Узбекистан",
    VA: "Ватикан",
    VC: "Свети Винсент и Гренадините",
    VE: "Венецуела",
    VG: "Британски Девствени Острови",
    VI: "Американски Девствени Острови",
    VN: "Виетнам",
    VU: "Вануату",
    WF: "Валис и Футуна",
    WS: "Самоа",
    XK: "Косово",
    YE: "Јемен",
    YT: "Мајот",
    ZA: "Јужноафриканска Република",
    ZM: "Замбија",
    ZW: "Зимбабв",
};

function from$g(country) {
    return names$f[country] || from$g(Alpha2.from(country));
}
function parse$g(country) {
    const result = Object.entries(names$f).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$f = {
    AD: "Андорра",
    AE: "Арабын Нэгдсэн Эмират",
    AF: "Афганистан",
    AG: "Антигуа ба Барбуда",
    AI: "Ангила",
    AL: "Албани",
    AM: "Армени",
    AO: "Ангол",
    AQ: "Антарктик",
    AR: "Аргентин",
    AS: "Америкийн Самоа",
    AT: "Австри",
    AU: "Австрали",
    AW: "Аруба",
    AX: "Аландын Арлууд",
    AZ: "Азербайжан",
    BA: "Босни Герцеговин",
    BB: "Барбадос",
    BD: "Бангладеш",
    BE: "Белги",
    BF: "Буркина фасо",
    BG: "Болгар",
    BH: "Бахрейн",
    BI: "Бурунди",
    BJ: "Бенин",
    BL: "Сент Бартельми",
    BM: "Бермуд",
    BN: "Бруней",
    BO: "Боливи",
    BQ: "Карибын Нидерланд",
    BR: "Бразил",
    BS: "Багам",
    BT: "Бутан",
    BV: "Буветын арлууд",
    BW: "Ботсвана",
    BY: "Беларусь",
    BZ: "Белиз",
    CA: "Канад",
    CC: "Кокос (Кийлинг) арлууд",
    CD: "Конго-Киншаса",
    CF: "Төв Африкийн Бүгд Найрамдах Улс",
    CG: "Конго Браззавиль",
    CH: "Швейцари",
    CI: "Кот д’Ивуар",
    CK: "Күүкийн арлууд",
    CL: "Чили",
    CM: "Камерун",
    CN: "Хятад",
    CO: "Колумб",
    CR: "Коста Рика",
    CU: "Куба",
    CV: "Капе Верде",
    CW: "Куракао",
    CX: "Зул сарын арал",
    CY: "Кипр",
    CZ: "Чех",
    DE: "Герман",
    DJ: "Джибути",
    DK: "Дани",
    DM: "Доминик",
    DO: "Бүгд Найрамдах Доминикан Улс",
    DZ: "Алжир",
    EC: "Эквадор",
    EE: "Эстони",
    EG: "Египет",
    EH: "Баруун Сахар",
    ER: "Эритри",
    ES: "Испани",
    ET: "Этиоп",
    FI: "Финланд",
    FJ: "Фижи",
    FK: "Фолькландын Арлууд",
    FM: "Микронези",
    FO: "Фароэ Арлууд",
    FR: "Франц",
    GA: "Габон",
    GB: "Их Британи",
    GD: "Гренада",
    GE: "Гүрж",
    GF: "Францын Гайана",
    GG: "Гернси",
    GH: "Гана",
    GI: "Гибралтар",
    GL: "Гренланд",
    GM: "Гамби",
    GN: "Гвиней",
    GP: "Гваделуп",
    GQ: "Экваторын Гвиней",
    GR: "Грек",
    GS: "Өмнөд Жоржиа ба Өмнөд Сэндвичийн Арлууд",
    GT: "Гватемал",
    GU: "Гуам",
    GW: "Гвиней-Бисау",
    GY: "Гайана",
    HK: "Хонг Конг",
    HM: "Хэрд болон Макдоналд арлууд",
    HN: "Гондурас",
    HR: "Хорват",
    HT: "Гаити",
    HU: "Унгар",
    ID: "Индонези",
    IE: "Ирланд",
    IL: "Израиль",
    IM: "Мэн Арал",
    IN: "Энэтхэг",
    IO: "Британийн харьяа Энэтхэгийн далай дахь нутаг дэвсгэрүүд",
    IQ: "Ирак",
    IR: "Иран",
    IS: "Исланд",
    IT: "Итали",
    JE: "Жерси",
    JM: "Ямайк",
    JO: "Йордан",
    JP: "Япон",
    KE: "Кени",
    KG: "Кыргызстан",
    KH: "Камбож",
    KI: "Кирибати",
    KM: "Коморос",
    KN: "Сент-Киттс ба Невис",
    KP: "Хойд Солонгос",
    KR: "Өмнөд Солонгос",
    KW: "Кувейт",
    KY: "Кайманы Арлууд",
    KZ: "Казахстан",
    LA: "Лаос",
    LB: "Ливан",
    LC: "Сент Люсиа",
    LI: "Лихтенштейн",
    LK: "Шри Ланка",
    LR: "Либери",
    LS: "Лесото",
    LT: "Литва",
    LU: "Люксембург",
    LV: "Латви",
    LY: "Ливи",
    MA: "Марокко",
    MC: "Монако",
    MD: "Молдав",
    ME: "Монтенегро",
    MF: "Сент-Мартин",
    MG: "Мадагаскар",
    MH: "Маршаллын арлууд",
    MK: "Македон",
    ML: "Мали",
    MM: "Мьянмар (Бурма)",
    MN: "Монгол",
    MO: "Макао",
    MP: "Хойд Марианы арлууд",
    MQ: "Мартиник",
    MR: "Мавритани",
    MS: "Монтсеррат",
    MT: "Мальта",
    MU: "Мавритус",
    MV: "Мальдив",
    MW: "Малави",
    MX: "Мексик",
    MY: "Малайз",
    MZ: "Мозамбик",
    NA: "Намиби",
    NC: "Шинэ Каледони",
    NE: "Нигер",
    NF: "Норфолк арлууд",
    NG: "Нигери",
    NI: "Никарагуа",
    NL: "Нидерланд",
    NO: "Норвеги",
    NP: "Балба",
    NR: "Науру",
    NU: "Ниуэ",
    NZ: "Шинэ Зеланд",
    OM: "Оман",
    PA: "Панам",
    PE: "Перу",
    PF: "Францын Полинез",
    PG: "Папуа Шинэ Гвиней",
    PH: "Филиппин",
    PK: "Пакистан",
    PL: "Польш",
    PM: "Сэнт Пьер ба Микелон",
    PN: "Питкэрн арлууд",
    PR: "Пуэрто Рико",
    PS: "Палестины нутаг дэвсгэрүүд",
    PT: "Португаль",
    PW: "Палау",
    PY: "Парагвай",
    QA: "Катар",
    RE: "Реюньон",
    RO: "Румын",
    RS: "Серби",
    RU: "Орос",
    RW: "Руанда",
    SA: "Саудын Араб",
    SB: "Соломоны Арлууд",
    SC: "Сейшел",
    SD: "Судан",
    SE: "Швед",
    SG: "Сингапур",
    SH: "Сент Хелена",
    SI: "Словени",
    SJ: "Свалбард ба Ян Майен",
    SK: "Словак",
    SL: "Сьерра-Леоне",
    SM: "Сан-Марино",
    SN: "Сенегал",
    SO: "Сомали",
    SR: "Суринам",
    SS: "Өмнөд Судан",
    ST: "Сан-Томе ба Принсипи",
    SV: "Эль Сальвадор",
    SX: "Синт Мартен",
    SY: "Сири",
    SZ: "Свазиланд",
    TC: "Турк ба Кайкосын Арлууд",
    TD: "Чад",
    TF: "Францын өмнөд газар нутаг",
    TG: "Того",
    TH: "Тайланд",
    TJ: "Тажикистан",
    TK: "Токелау",
    TL: "Тимор-Лесте",
    TM: "Туркменистан",
    TN: "Тунис",
    TO: "Тонга",
    TR: "Турк",
    TT: "Тринидад Тобаго",
    TV: "Тувалу",
    TW: "Тайвань",
    TZ: "Танзани",
    UA: "Украин",
    UG: "Уганда",
    UM: "АНУ-ын тойрсон арлууд",
    US: "Америкийн Нэгдсэн Улс",
    UY: "Уругвай",
    UZ: "Узбекистан",
    VA: "Ватикан хот улс",
    VC: "Сэнт Винсэнт ба Гренадин",
    VE: "Венесуэл",
    VG: "Британийн Виржиний Арлууд",
    VI: "АНУ-ын Виржиний Арлууд",
    VN: "Вьетнам",
    VU: "Вануату",
    WF: "Уоллис ба Футуна",
    WS: "Самоа",
    XK: "Косово",
    YE: "Йемен",
    YT: "Майотте",
    ZA: "Өмнөд Африк тив",
    ZM: "Замби",
    ZW: "Зимбабв",
};

function from$f(country) {
    return names$e[country] || from$f(Alpha2.from(country));
}
function parse$f(country) {
    const result = Object.entries(names$e).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$e = {
    AD: "Andorra",
    AE: "De forente arabiske emirater",
    AF: "Afghanistan",
    AG: "Antigua og Barbuda",
    AI: "Anguilla",
    AL: "Albania",
    AM: "Armenia",
    AO: "Angola",
    AQ: "Antarktis",
    AR: "Argentina",
    AS: "Amerikansk Samoa",
    AT: "Østerrike",
    AU: "Australia",
    AW: "Aruba",
    AX: "Åland",
    AZ: "Aserbajdsjan",
    BA: "Bosnia-Hercegovina",
    BB: "Barbados",
    BD: "Bangladesh",
    BE: "Belgia",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint-Barthélemy",
    BM: "Bermuda",
    BN: "Brunei",
    BO: "Bolivia",
    BQ: "Karibisk Nederland",
    BR: "Brasil",
    BS: "Bahamas",
    BT: "Bhutan",
    BV: "Bouvetøya",
    BW: "Botswana",
    BY: "Hviterussland",
    BZ: "Belize",
    CA: "Canada",
    CC: "Kokosøyene",
    CD: "Kongo",
    CF: "Den sentralafrikanske republikk",
    CG: "Kongo-Brazzaville",
    CH: "Sveits",
    CI: "Elfenbenskysten",
    CK: "Cookøyene",
    CL: "Chile",
    CM: "Kamerun",
    CN: "Kina",
    CO: "Colombia",
    CR: "Costa Rica",
    CU: "Cuba",
    CV: "Kapp Verde",
    CW: "Curaçao",
    CX: "Christmasøya",
    CY: "Kypros",
    CZ: "Tsjekkia",
    DE: "Tyskland",
    DJ: "Djibouti",
    DK: "Danmark",
    DM: "Dominica",
    DO: "Den dominikanske republikk",
    DZ: "Algerie",
    EC: "Ecuador",
    EE: "Estland",
    EG: "Egypt",
    EH: "Vest-Sahara",
    ER: "Eritrea",
    ES: "Spania",
    ET: "Etiopia",
    FI: "Finland",
    FJ: "Fiji",
    FK: "Falklandsøyene",
    FM: "Mikronesiaføderasjonen",
    FO: "Færøyene",
    FR: "Frankrike",
    GA: "Gabon",
    GB: "Storbritannia",
    GD: "Grenada",
    GE: "Georgia",
    GF: "Fransk Guyana",
    GG: "Guernsey",
    GH: "Ghana",
    GI: "Gibraltar",
    GL: "Grønland",
    GM: "Gambia",
    GN: "Guinea",
    GP: "Guadeloupe",
    GQ: "Ekvatorial-Guinea",
    GR: "Hellas",
    GS: "Sør-Georgia og de søre Sandwichøyene",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HK: "Hongkong",
    HM: "Heard- og McDonald-øyene",
    HN: "Honduras",
    HR: "Kroatia",
    HT: "Haiti",
    HU: "Ungarn",
    ID: "Indonesia",
    IE: "Irland",
    IL: "Israel",
    IM: "Man",
    IN: "India",
    IO: "Britisk territorium i Indiahavet",
    IQ: "Irak",
    IR: "Iran",
    IS: "Island",
    IT: "Italia",
    JE: "Jersey",
    JM: "Jamaica",
    JO: "Jordan",
    JP: "Japan",
    KE: "Kenya",
    KG: "Kirgisistan",
    KH: "Kambodsja",
    KI: "Kiribati",
    KM: "Komorene",
    KN: "Saint Kitts og Nevis",
    KP: "Nord-Korea",
    KR: "Sør-Korea",
    KW: "Kuwait",
    KY: "Caymanøyene",
    KZ: "Kasakhstan",
    LA: "Laos",
    LB: "Libanon",
    LC: "Saint Lucia",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Liberia",
    LS: "Lesotho",
    LT: "Litauen",
    LU: "Luxembourg",
    LV: "Latvia",
    LY: "Libya",
    MA: "Marokko",
    MC: "Monaco",
    MD: "Moldova",
    ME: "Montenegro",
    MF: "Saint-Martin",
    MG: "Madagaskar",
    MH: "Marshalløyene",
    MK: "Makedonia",
    ML: "Mali",
    MM: "Burma",
    MN: "Mongolia",
    MO: "Macao",
    MP: "Nord-Marianene",
    MQ: "Martinique",
    MR: "Mauritania",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mauritius",
    MV: "Maldivene",
    MW: "Malawi",
    MX: "Mexico",
    MY: "Malaysia",
    MZ: "Mosambik",
    NA: "Namibia",
    NC: "Ny-Caledonia",
    NE: "Niger",
    NF: "Norfolk Island",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Nederland",
    NO: "Norge",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "New Zealand",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PF: "Fransk Polynesia",
    PG: "Papua Ny-Guinea",
    PH: "Filippinene",
    PK: "Pakistan",
    PL: "Polen",
    PM: "Saint-Pierre-et-Miquelon",
    PN: "Pitcairn",
    PR: "Puerto Rico",
    PS: "De okkuperte palestinske områdene",
    PT: "Portugal",
    PW: "Palau",
    PY: "Paraguay",
    QA: "Qatar",
    RE: "Réunion",
    RO: "Romania",
    RS: "Serbia",
    RU: "Russland",
    RW: "Rwanda",
    SA: "Saudi-Arabia",
    SB: "Salomonøyene",
    SC: "Seychellene",
    SD: "Sudan",
    SE: "Sverige",
    SG: "Singapore",
    SH: "St. Helena",
    SI: "Slovenia",
    SJ: "Svalbard og Jan Mayen",
    SK: "Slovakia",
    SL: "Sierra Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalia",
    SR: "Surinam",
    SS: "Sør-Sudan",
    ST: "São Tomé og Príncipe",
    SV: "El Salvador",
    SX: "Sint Maarten (Nederlandsk del)",
    SY: "Syria",
    SZ: "Swaziland",
    TC: "Turks- og Caicosøyene",
    TD: "Tsjad",
    TF: "Søre franske territorier",
    TG: "Togo",
    TH: "Thailand",
    TJ: "Tadsjikistan",
    TK: "Tokelau",
    TL: "Øst-Timor",
    TM: "Turkmenistan",
    TN: "Tunisia",
    TO: "Tonga",
    TR: "Tyrkia",
    TT: "Trinidad og Tobago",
    TV: "Tuvalu",
    TW: "Taiwan",
    TZ: "Tanzania",
    UA: "Ukraina",
    UG: "Uganda",
    UM: "USA, mindre, utenforliggende øyer",
    US: "USA",
    UY: "Uruguay",
    UZ: "Usbekistan",
    VA: "Vatikanstaten",
    VC: "Saint Vincent og Grenadinene",
    VE: "Venezuela",
    VG: "Jomfruøyene (Britisk)",
    VI: "Jomfruøyene (USA)",
    VN: "Vietnam",
    VU: "Vanuatu",
    WF: "Wallis- og Futunaøyene",
    WS: "Samoa",
    YE: "Jemen",
    YT: "Mayotte",
    ZA: "Sør-Afrika",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    XK: "Kosov",
};

function from$e(country) {
    return names$d[country] || from$e(Alpha2.from(country));
}
function parse$e(country) {
    const result = Object.entries(names$d).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$d = {
    AF: "Afghanistan",
    AL: "Albanië",
    DZ: "Algerije",
    AS: "Amerikaans-Samoa",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarctica",
    AG: "Antigua en Barbuda",
    AR: "Argentinië",
    AM: "Armenië",
    AW: "Aruba",
    AU: "Australië",
    AT: "Oostenrijk",
    AZ: "Azerbeidzjan",
    BS: "Bahama's",
    BH: "Bahrein",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Wit-Rusland",
    BE: "België",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivië",
    BA: "Bosnië-Herzegovina",
    BW: "Botswana",
    BV: "Bouvet Eiland",
    BR: "Brazilië",
    IO: "Brits Indische oceaan",
    BN: "Brunei Darussalam",
    BG: "Bulgarije",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Cambodja",
    CM: "Kameroen",
    CA: "Canada",
    CV: "Kaapverdië",
    KY: "Kaaimaneilanden",
    CF: "Centraal-Afrikaanse Republiek",
    TD: "Tsjaad",
    CL: "Chili",
    CN: "China",
    CX: "Christmaseiland",
    CC: "Cocoseilanden",
    CO: "Colombia",
    KM: "Comoren",
    CG: "Congo, Volksrepubliek",
    CD: "Congo, Democratische Republiek",
    CK: "Cookeilanden",
    CR: "Costa Rica",
    CI: "Ivoorkust",
    HR: "Kroatië",
    CU: "Cuba",
    CY: "Cyprus",
    CZ: "Tsjechië",
    DK: "Denemarken",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominicaanse Republiek",
    EC: "Ecuador",
    EG: "Egypte",
    SV: "El Salvador",
    GQ: "Equatoriaal-Guinea",
    ER: "Eritrea",
    EE: "Estland",
    ET: "Ethiopië",
    FK: "Falklandeilanden",
    FO: "Faeröer",
    FJ: "Fiji",
    FI: "Finland",
    FR: "Frankrijk",
    GF: "Frans-Guyana",
    PF: "Frans-Polynesië",
    TF: "Franse Zuidelijke Gebieden",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgië",
    DE: "Duitsland",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Griekenland",
    GL: "Groenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GN: "Guinea",
    GW: "Guinee-Bissau",
    GY: "Guyana",
    HT: "Haïti",
    HM: "Heard en McDonaldeilanden",
    VA: "Heilige Stoel",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Hongarije",
    IS: "IJsland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran",
    IQ: "Irak",
    IE: "Ierland",
    IL: "Israël",
    IT: "Italië",
    JM: "Jamaica",
    JP: "Japan",
    JO: "Jordanië",
    KZ: "Kazachstan",
    KE: "Kenia",
    KI: "Kiribati",
    KP: "Noord-Korea",
    KR: "Zuid-Korea",
    KW: "Koeweit",
    KG: "Kirgizstan",
    LA: "Laos",
    LV: "Letland",
    LB: "Libanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libië",
    LI: "Liechtenstein",
    LT: "Litouwen",
    LU: "Luxemburg",
    MO: "Macao",
    MK: "Macedonië, Ex-Joegoslavische Republiek",
    MG: "Madagaskar",
    MW: "Malawi",
    MY: "Maleisië",
    MV: "Maldiven",
    ML: "Mali",
    MT: "Malta",
    MH: "Marshalleilanden",
    MQ: "Martinique",
    MR: "Mauritanië",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexico",
    FM: "Micronesië, Federale Staten",
    MD: "Moldavië",
    MC: "Monaco",
    MN: "Mongolië",
    MS: "Montserrat",
    MA: "Marokko",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibië",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Nederland",
    NC: "Nieuw-Caledonië",
    NZ: "Nieuw-Zeeland",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Norfolk",
    MP: "Noordelijke Marianen",
    NO: "Noorwegen",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestina",
    PA: "Panama",
    PG: "Papoea-Nieuw-Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Filipijnen",
    PN: "Pitcairn",
    PL: "Polen",
    PT: "Portugal",
    PR: "Puerto Rico",
    QA: "Qatar",
    RE: "Réunion",
    RO: "Roemenië",
    RU: "Rusland",
    RW: "Rwanda",
    SH: "Sint-Helena",
    KN: "Saint Kitts en Nevis",
    LC: "Saint Lucia",
    PM: "Saint-Pierre en Miquelon",
    VC: "Saint Vincent en de Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "São Tomé en Principe",
    SA: "Saudi-Arabië",
    SN: "Senegal",
    SC: "Seychellen",
    SL: "Sierra Leone",
    SG: "Singapore",
    SK: "Slowakije",
    SI: "Slovenië",
    SB: "Salomonseilanden",
    SO: "Somalië",
    ZA: "Zuid-Afrika",
    GS: "Zuid-Georgia en de Zuidelijke Sandwicheilanden",
    ES: "Spanje",
    LK: "Sri Lanka",
    SD: "Soedan",
    SR: "Suriname",
    SJ: "Spitsbergen en Jan Mayen",
    SZ: "Ngwane, Koninkrijk Swaziland",
    SE: "Zweden",
    CH: "Zwitserland",
    SY: "Syrië",
    TW: "Taiwan",
    TJ: "Tadzjikistan",
    TZ: "Tanzania, Verenigde Republiek",
    TH: "Thailand",
    TL: "Timor Leste",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad en Tobago",
    TN: "Tunesië",
    TR: "Turkije",
    TM: "Turkmenistan",
    TC: "Turks- en Caicoseilanden",
    TV: "Tuvalu",
    UG: "Oeganda",
    UA: "Oekraïne",
    AE: "Verenigde Arabische Emiraten",
    GB: "Verenigd Koninkrijk",
    US: "Verenigde Staten van Amerika",
    UM: "Ver afgelegen eilandjes van de Verenigde Staten",
    UY: "Uruguay",
    UZ: "Oezbekistan",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Vietnam",
    VG: "Maagdeneilanden, Britse",
    VI: "Maagdeneilanden, Amerikaanse",
    WF: "Wallis en Futuna",
    EH: "Westelijke Sahara",
    YE: "Jemen",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    AX: "Åland",
    BQ: "Bonaire, Sint Eustatius en Saba",
    CW: "Curaçao",
    GG: "Guernsey",
    IM: "Man Eiland",
    JE: "Jersey",
    ME: "Montenegro",
    BL: "Saint Barthélemy",
    MF: "Sint-Maarten (Frans deel)",
    RS: "Servië",
    SX: "Sint Maarten (Nederlands deel)",
    SS: "Zuid-Soedan",
    XK: "Kosov",
};

function from$d(country) {
    return names$c[country] || from$d(Alpha2.from(country));
}
function parse$d(country) {
    const result = Object.entries(names$c).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$c = {
    AD: "Andorra",
    AE: "Dei sameinte arabiske emirata",
    AF: "Afghanistan",
    AG: "Antigua og Barbuda",
    AI: "Anguilla",
    AL: "Albania",
    AM: "Armenia",
    AO: "Angola",
    AQ: "Antarktis",
    AR: "Argentina",
    AS: "Amerikansk Samoa",
    AT: "Austerrike",
    AU: "Australia",
    AW: "Aruba",
    AX: "Åland",
    AZ: "Aserbajdsjan",
    BA: "Bosnia-Hercegovina",
    BB: "Barbados",
    BD: "Bangladesh",
    BE: "Belgia",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint-Barthélemy",
    BM: "Bermuda",
    BN: "Brunei",
    BO: "Bolivia",
    BQ: "Karibisk Nederland",
    BR: "Brasil",
    BS: "Bahamas",
    BT: "Bhutan",
    BV: "Bouvetøya",
    BW: "Botswana",
    BY: "Kviterussland",
    BZ: "Belize",
    CA: "Canada",
    CC: "Kokosøyane",
    CD: "Kongo",
    CF: "Den sentralafrikanske republikken",
    CG: "Kongo-Brazzaville",
    CH: "Sveits",
    CI: "Elfenbeinskysten",
    CK: "Cookøyane",
    CL: "Chile",
    CM: "Kamerun",
    CN: "Kina",
    CO: "Colombia",
    CR: "Costa Rica",
    CU: "Cuba",
    CV: "Kapp Verde",
    CW: "Curaçao",
    CX: "Christmasøya",
    CY: "Kypros",
    CZ: "Tsjekkia",
    DE: "Tyskland",
    DJ: "Djibouti",
    DK: "Danmark",
    DM: "Dominica",
    DO: "Den dominikanske republikken",
    DZ: "Algerie",
    EC: "Ecuador",
    EE: "Estland",
    EG: "Egypt",
    EH: "Vest-Sahara",
    ER: "Eritrea",
    ES: "Spania",
    ET: "Etiopia",
    FI: "Finland",
    FJ: "Fiji",
    FK: "Falklandsøyane",
    FM: "Mikronesiaføderasjonen",
    FO: "Færøyane",
    FR: "Frankrike",
    GA: "Gabon",
    GB: "Storbritannia",
    GD: "Grenada",
    GE: "Georgia",
    GF: "Fransk Guyana",
    GG: "Guernsey",
    GH: "Ghana",
    GI: "Gibraltar",
    GL: "Grønland",
    GM: "Gambia",
    GN: "Guinea",
    GP: "Guadeloupe",
    GQ: "Ekvatorial-Guinea",
    GR: "Hellas",
    GS: "Sør-Georgia og de søre Sandwichøyane",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HK: "Hongkong",
    HM: "Heard- og McDonald-øyane",
    HN: "Honduras",
    HR: "Kroatia",
    HT: "Haiti",
    HU: "Ungarn",
    ID: "Indonesia",
    IE: "Irland",
    IL: "Israel",
    IM: "Man",
    IN: "India",
    IO: "Britisk territorium i Indiahavet",
    IQ: "Irak",
    IR: "Iran",
    IS: "Island",
    IT: "Italia",
    JE: "Jersey",
    JM: "Jamaica",
    JO: "Jordan",
    JP: "Japan",
    KE: "Kenya",
    KG: "Kirgisistan",
    KH: "Kambodsja",
    KI: "Kiribati",
    KM: "Komorane",
    KN: "Saint Kitts og Nevis",
    KP: "Nord-Korea",
    KR: "Sør-Korea",
    KW: "Kuwait",
    KY: "Caymanøyane",
    KZ: "Kasakhstan",
    LA: "Laos",
    LB: "Libanon",
    LC: "Saint Lucia",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Liberia",
    LS: "Lesotho",
    LT: "Litauen",
    LU: "Luxembourg",
    LV: "Latvia",
    LY: "Libya",
    MA: "Marokko",
    MC: "Monaco",
    MD: "Moldova",
    ME: "Montenegro",
    MF: "Saint-Martin",
    MG: "Madagaskar",
    MH: "Marshalløyane",
    MK: "Makedonia",
    ML: "Mali",
    MM: "Burma",
    MN: "Mongolia",
    MO: "Macao",
    MP: "Nord-Marianane",
    MQ: "Martinique",
    MR: "Mauritania",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mauritius",
    MV: "Maldivane",
    MW: "Malawi",
    MX: "Mexico",
    MY: "Malaysia",
    MZ: "Mosambik",
    NA: "Namibia",
    NC: "Ny-Caledonia",
    NE: "Niger",
    NF: "Norfolk Island",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Nederland",
    NO: "Noreg",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "New Zealand",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PF: "Fransk Polynesia",
    PG: "Papua Ny-Guinea",
    PH: "Filippinane",
    PK: "Pakistan",
    PL: "Polen",
    PM: "Saint-Pierre-et-Miquelon",
    PN: "Pitcairn",
    PR: "Puerto Rico",
    PS: "Dei okkuperte palestinske områda",
    PT: "Portugal",
    PW: "Palau",
    PY: "Paraguay",
    QA: "Qatar",
    RE: "Réunion",
    RO: "Romania",
    RS: "Serbia",
    RU: "Russland",
    RW: "Rwanda",
    SA: "Saudi-Arabia",
    SB: "Salomonøyane",
    SC: "Seychellane",
    SD: "Sudan",
    SE: "Sverige",
    SG: "Singapore",
    SH: "St. Helena",
    SI: "Slovenia",
    SJ: "Svalbard og Jan Mayen",
    SK: "Slovakia",
    SL: "Sierra Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalia",
    SR: "Surinam",
    SS: "Sør-Sudan",
    ST: "São Tomé og Príncipe",
    SV: "El Salvador",
    SX: "Sint Maarten (Nederlandsk del)",
    SY: "Syria",
    SZ: "Swaziland",
    TC: "Turks- og Caicosøyane",
    TD: "Tsjad",
    TF: "Søre franske territorier",
    TG: "Togo",
    TH: "Thailand",
    TJ: "Tadsjikistan",
    TK: "Tokelau",
    TL: "Aust-Timor",
    TM: "Turkmenistan",
    TN: "Tunisia",
    TO: "Tonga",
    TR: "Tyrkia",
    TT: "Trinidad og Tobago",
    TV: "Tuvalu",
    TW: "Taiwan",
    TZ: "Tanzania",
    UA: "Ukraina",
    UG: "Uganda",
    UM: "USA, mindre, utanforliggande øyar",
    US: "USA",
    UY: "Uruguay",
    UZ: "Usbekistan",
    VA: "Vatikanstaten",
    VC: "Saint Vincent og Grenadinane",
    VE: "Venezuela",
    VG: "Jomfruøyane (Britisk)",
    VI: "Jomfruøyane (USA)",
    VN: "Vietnam",
    VU: "Vanuatu",
    WF: "Wallis- og Futunaøyane",
    WS: "Samoa",
    YE: "Jemen",
    YT: "Mayotte",
    ZA: "Sør-Afrika",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    XK: "Kosov",
};

function from$c(country) {
    return names$b[country] || from$c(Alpha2.from(country));
}
function parse$c(country) {
    const result = Object.entries(names$b).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$b = {
    AF: "Afganistan",
    AL: "Albania",
    DZ: "Algieria",
    AS: "Samoa Amerykańskie",
    AD: "Andora",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarktyka",
    AG: "Antigua i Barbuda",
    AR: "Argentyna",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbejdżan",
    BS: "Bahamy",
    BH: "Bahrajn",
    BD: "Bangladesz",
    BB: "Barbados",
    BY: "Białoruś",
    BE: "Belgia",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermudy",
    BT: "Bhutan",
    BO: "Boliwia",
    BA: "Bośnia i Hercegowina",
    BW: "Botswana",
    BV: "Wyspa Bouveta",
    BR: "Brazylia",
    IO: "Brytyjskie Terytorium Oceanu Indyjskiego",
    BN: "Brunei",
    BG: "Bułgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Kambodża",
    CM: "Kamerun",
    CA: "Kanada",
    CV: "Republika Zielonego Przylądka",
    KY: "Kajmany",
    CF: "Republika Środkowoafrykańska",
    TD: "Czad",
    CL: "Chile",
    CN: "Chiny",
    CX: "Wyspa Bożego Narodzenia",
    CC: "Wyspy Kokosowe",
    CO: "Kolumbia",
    KM: "Komory",
    CG: "Kongo",
    CD: "Demokratyczna Republika Konga",
    CK: "Wyspy Cooka",
    CR: "Kostaryka",
    CI: "Wybrzeże Kości Słoniowej",
    HR: "Chorwacja",
    CU: "Kuba",
    CY: "Cypr",
    CZ: "Czechy",
    DK: "Dania",
    DJ: "Dżibuti",
    DM: "Dominika",
    DO: "Dominikana",
    EC: "Ekwador",
    EG: "Egipt",
    SV: "Salwador",
    GQ: "Gwinea Równikowa",
    ER: "Erytrea",
    EE: "Estonia",
    ET: "Etiopia",
    FK: "Falklandy",
    FO: "Wyspy Owcze",
    FJ: "Fidżi",
    FI: "Finlandia",
    FR: "Francja",
    GF: "Gujana Francuska",
    PF: "Polinezja Francuska",
    TF: "Francuskie Terytoria Południowe i Antarktyczne",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Gruzja",
    DE: "Niemcy",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Grecja",
    GL: "Grenlandia",
    GD: "Grenada",
    GP: "Gwadelupa",
    GU: "Guam",
    GT: "Gwatemala",
    GN: "Gwinea",
    GW: "Gwinea Bissau",
    GY: "Gujana",
    HT: "Haiti",
    HM: "Wyspy Heard i McDonalda",
    VA: "Watykan",
    HN: "Honduras",
    HK: "Hongkong",
    HU: "Węgry",
    IS: "Islandia",
    IN: "Indie",
    ID: "Indonezja",
    IR: "Iran",
    IQ: "Irak",
    IE: "Irlandia",
    IL: "Izrael",
    IT: "Włochy",
    JM: "Jamajka",
    JP: "Japonia",
    JO: "Jordania",
    KZ: "Kazachstan",
    KE: "Kenia",
    KI: "Kiribati",
    KP: "Korea Północna",
    KR: "Korea Południowa",
    KW: "Kuwejt",
    KG: "Kirgistan",
    LA: "Laos",
    LV: "Łotwa",
    LB: "Liban",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libia",
    LI: "Liechtenstein",
    LT: "Litwa",
    LU: "Luksemburg",
    MO: "Makau",
    MK: "Macedonia",
    MG: "Madagaskar",
    MW: "Malawi",
    MY: "Malezja",
    MV: "Malediwy",
    ML: "Mali",
    MT: "Malta",
    MH: "Wyspy Marshalla",
    MQ: "Martynika",
    MR: "Mauretania",
    MU: "Mauritius",
    YT: "Majotta",
    MX: "Meksyk",
    FM: "Mikronezja",
    MD: "Mołdawia",
    MC: "Monako",
    MN: "Mongolia",
    MS: "Montserrat",
    MA: "Maroko",
    MZ: "Mozambik",
    MM: "Mjanma",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Holandia",
    NC: "Nowa Kaledonia",
    NZ: "Nowa Zelandia",
    NI: "Nikaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Norfolk",
    MP: "Mariany Północne",
    NO: "Norwegia",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestyna",
    PA: "Panama",
    PG: "Papua-Nowa Gwinea",
    PY: "Paragwaj",
    PE: "Peru",
    PH: "Filipiny",
    PN: "Pitcairn",
    PL: "Polska",
    PT: "Portugalia",
    PR: "Portoryko",
    QA: "Katar",
    RE: "Reunion",
    RO: "Rumunia",
    RU: "Rosja",
    RW: "Rwanda",
    SH: "Wyspa Świętej Heleny, Wyspa Wniebowstąpienia i Tristan da Cunha",
    KN: "Saint Kitts i Nevis",
    LC: "Saint Lucia",
    PM: "Saint-Pierre i Miquelon",
    VC: "Saint Vincent i Grenadyny",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Wyspy Świętego Tomasza i Książęca",
    SA: "Arabia Saudyjska",
    SN: "Senegal",
    SC: "Seszele",
    SL: "Sierra Leone",
    SG: "Singapur",
    SK: "Słowacja",
    SI: "Słowenia",
    SB: "Wyspy Salomona",
    SO: "Somalia",
    ZA: "Południowa Afryka",
    GS: "Georgia Południowa i Sandwich Południowy",
    ES: "Hiszpania",
    LK: "Sri Lanka",
    SD: "Sudan",
    SR: "Surinam",
    SJ: "Svalbard i Jan Mayen",
    SZ: "Suazi",
    SE: "Szwecja",
    CH: "Szwajcaria",
    SY: "Syria",
    TW: "Tajwan",
    TJ: "Tadżykistan",
    TZ: "Tanzania",
    TH: "Tajlandia",
    TL: "Timor Wschodni",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trynidad i Tobago",
    TN: "Tunezja",
    TR: "Turcja",
    TM: "Turkmenistan",
    TC: "Turks i Caicos",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraina",
    AE: "Zjednoczone Emiraty Arabskie",
    GB: "Wielka Brytania",
    US: "Stany Zjednoczone",
    UM: "Dalekie Wyspy Mniejsze Stanów Zjednoczonych",
    UY: "Urugwaj",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VE: "Wenezuela",
    VN: "Wietnam",
    VG: "Brytyjskie Wyspy Dziewicze",
    VI: "Wyspy Dziewicze Stanów Zjednoczonych",
    WF: "Wallis i Futuna",
    EH: "Sahara Zachodnia",
    YE: "Jemen",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    AX: "Wyspy Alandzkie",
    BQ: "Bonaire, Sint Eustatius i Saba",
    CW: "Curaçao",
    GG: "Guernsey",
    IM: "Wyspa Man",
    JE: "Jersey",
    ME: "Czarnogóra",
    BL: "Saint-Barthélemy",
    MF: "Saint-Martin",
    RS: "Serbia",
    SX: "Sint Maarten",
    SS: "Sudan Południowy",
    XK: "Kosow",
};

function from$b(country) {
    return names$a[country] || from$b(Alpha2.from(country));
}
function parse$b(country) {
    const result = Object.entries(names$a).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$a = {
    AF: "Afeganistão",
    ZA: "África do Sul",
    AL: "Albânia",
    DE: "Alemanha",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antártida",
    AG: "Antígua e Barbuda",
    SA: "Arábia Saudita",
    DZ: "Argélia",
    AR: "Argentina",
    AM: "Armênia",
    AW: "Aruba",
    AU: "Austrália",
    AT: "Áustria",
    AZ: "Azerbaijão",
    BS: "Bahamas",
    BH: "Bahrein",
    BD: "Bangladesh",
    BB: "Barbados",
    BE: "Bélgica",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermudas",
    BY: "Bielorrússia",
    BO: "Bolívia",
    BA: "Bósnia e Herzegovina",
    BW: "Botsuana",
    BR: "Brasil",
    BN: "Brunei",
    BG: "Bulgária",
    BF: "Burquina Faso",
    BI: "Burundi",
    BT: "Butão",
    CV: "Cabo Verde",
    KH: "Camboja",
    CA: "Canadá",
    QA: "Catar",
    KZ: "Cazaquistão",
    TD: "Chade",
    CL: "Chile",
    CN: "China",
    CY: "Chipre",
    VA: "Cidade do Vaticano",
    SG: "Cingapura",
    CO: "Colômbia",
    KM: "Comores",
    CG: "Congo - Brazzaville",
    CD: "Congo - Kinshasa",
    KP: "Coreia do Norte",
    KR: "Coreia do Sul",
    CI: "Costa do Marfim",
    CR: "Costa Rica",
    HR: "Croácia",
    CU: "Cuba",
    CW: "Curaçao",
    DK: "Dinamarca",
    DJ: "Djibuti",
    DM: "Dominica",
    EG: "Egito",
    SV: "El Salvador",
    AE: "Emirados Árabes Unidos",
    EC: "Equador",
    ER: "Eritreia",
    SK: "Eslováquia",
    SI: "Eslovênia",
    ES: "Espanha",
    US: "Estados Unidos",
    EE: "Estônia",
    ET: "Etiópia",
    FJ: "Fiji",
    PH: "Filipinas",
    FI: "Finlândia",
    FR: "França",
    GA: "Gabão",
    GM: "Gâmbia",
    GH: "Gana",
    GE: "Geórgia",
    GS: "Geórgia do Sul e Ilhas Sandwich do Sul",
    GI: "Gibraltar",
    GD: "Granada",
    GR: "Grécia",
    GL: "Groenlândia",
    GP: "Guadalupe",
    GU: "Guam",
    GT: "Guatemala",
    GG: "Guernsey",
    GY: "Guiana",
    GF: "Guiana Francesa",
    GN: "Guiné",
    GW: "Guiné Bissau",
    GQ: "Guiné Equatorial",
    HT: "Haiti",
    NL: "Holanda",
    HN: "Honduras",
    HK: "Hong Kong, RAE da China",
    HU: "Hungria",
    YE: "Iêmen",
    BV: "Ilhas Bouvet",
    CX: "Ilha Christmas",
    IM: "Ilha de Man",
    NF: "Ilha Norfolk",
    AX: "Ilhas Åland",
    KY: "Ilhas Caiman",
    CC: "Ilhas Cocos (Keeling)",
    CK: "Ilhas Cook",
    UM: "Ilhas Distantes dos EUA",
    HM: "Ilha Heard e Ilha McDonald",
    FO: "Ilhas Faroe",
    FK: "Ilhas Malvinas",
    MP: "Ilhas Marianas do Norte",
    MH: "Ilhas Marshall",
    PN: "Ilhas Pitcairn",
    SB: "Ilhas Salomão",
    TC: "Ilhas Turks e Caicos",
    VG: "Ilhas Virgens Britânicas",
    VI: "Ilhas Virgens dos EUA",
    IN: "Índia",
    ID: "Indonésia",
    IR: "Irã",
    IQ: "Iraque",
    IE: "Irlanda",
    IS: "Islândia",
    IL: "Israel",
    IT: "Itália",
    JM: "Jamaica",
    JP: "Japão",
    JE: "Jersey",
    JO: "Jordânia",
    KW: "Kuwait",
    LA: "Laos",
    LS: "Lesoto",
    LV: "Letônia",
    LB: "Líbano",
    LR: "Libéria",
    LY: "Líbia",
    LI: "Liechtenstein",
    LT: "Lituânia",
    LU: "Luxemburgo",
    MO: "Macau, RAE da China",
    MK: "Macedônia",
    MG: "Madagascar",
    MY: "Malásia",
    MW: "Malawi",
    MV: "Maldivas",
    ML: "Mali",
    MT: "Malta",
    MA: "Marrocos",
    MQ: "Martinica",
    MU: "Maurício",
    MR: "Mauritânia",
    YT: "Mayotte",
    MX: "México",
    MM: "Mianmar (Birmânia)",
    FM: "Micronésia",
    MZ: "Moçambique",
    MD: "Moldávia",
    MC: "Mônaco",
    MN: "Mongólia",
    ME: "Montenegro",
    MS: "Montserrat",
    NA: "Namíbia",
    NR: "Nauru",
    NP: "Nepal",
    NI: "Nicarágua",
    NE: "Níger",
    NG: "Nigéria",
    NU: "Niue",
    NO: "Noruega",
    NC: "Nova Caledônia",
    NZ: "Nova Zelândia",
    OM: "Omã",
    BQ: "Países Baixos Caribenhos",
    PW: "Palau",
    PA: "Panamá",
    PG: "Papua-Nova Guiné",
    PK: "Paquistão",
    PY: "Paraguai",
    PE: "Peru",
    PF: "Polinésia Francesa",
    PL: "Polônia",
    PR: "Porto Rico",
    PT: "Portugal",
    KE: "Quênia",
    KG: "Quirguistão",
    KI: "Quiribati",
    GB: "Reino Unido",
    CF: "República Centro-Africana",
    DO: "República Dominicana",
    CM: "República dos Camarões",
    CZ: "República Tcheca",
    RE: "Reunião",
    RO: "Romênia",
    RW: "Ruanda",
    RU: "Rússia",
    EH: "Saara Ocidental",
    PM: "Saint Pierre e Miquelon",
    WS: "Samoa",
    AS: "Samoa Americana",
    SM: "San Marino",
    SH: "Santa Helena",
    LC: "Santa Lúcia",
    BL: "São Bartolomeu",
    KN: "São Cristóvão e Nevis",
    MF: "São Martinho",
    ST: "São Tomé e Príncipe",
    VC: "São Vicente e Granadinas",
    SN: "Senegal",
    SL: "Serra Leoa",
    RS: "Sérvia",
    SC: "Seychelles",
    SX: "Sint Maarten",
    SY: "Síria",
    SO: "Somália",
    LK: "Sri Lanka",
    SZ: "Suazilândia",
    SD: "Sudão",
    SS: "Sudão do Sul",
    SE: "Suécia",
    CH: "Suíça",
    SR: "Suriname",
    SJ: "Svalbard e Jan Mayen",
    TH: "Tailândia",
    TW: "Taiwan",
    TJ: "Tajiquistão",
    TZ: "Tanzânia",
    IO: "Território Britânico do Oceano Índico",
    TF: "Territórios Franceses do Sul",
    PS: "Territórios palestinos",
    TL: "Timor-Leste",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad e Tobago",
    TN: "Tunísia",
    TM: "Turcomenistão",
    TR: "Turquia",
    TV: "Tuvalu",
    UA: "Ucrânia",
    UG: "Uganda",
    UY: "Uruguai",
    UZ: "Uzbequistão",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Vietnã",
    WF: "Wallis e Futuna",
    ZM: "Zâmbia",
    ZW: "Zimbábue",
    XK: "Kosov",
};

function from$a(country) {
    return names$9[country] || from$a(Alpha2.from(country));
}
function parse$a(country) {
    const result = Object.entries(names$9).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$9 = {
    AD: "Andorra",
    AE: "Emiratele Arabe Unite",
    AF: "Afganistan",
    AG: "Antigua și Barbuda",
    AI: "Anguilla",
    AL: "Albania",
    AM: "Armenia",
    AO: "Angola",
    AQ: "Antarctica",
    AR: "Argentina",
    AS: "Samoa Americană",
    AT: "Austria",
    AU: "Australia",
    AW: "Aruba",
    AX: "Insulele Åland",
    AZ: "Azerbaidjan",
    BA: "Bosnia și Herțegovina",
    BB: "Barbados",
    BD: "Bangladesh",
    BE: "Belgia",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Sfântul Bartolomeu",
    BM: "Bermuda",
    BN: "Brunei",
    BO: "Bolivia",
    BQ: "Insulele Caraibe Olandeze",
    BR: "Brazilia",
    BS: "Bahamas",
    BT: "Bhutan",
    BV: "Insula Bouvet",
    BW: "Botswana",
    BY: "Belarus",
    BZ: "Belize",
    CA: "Canada",
    CC: "Insulele Cocos (Keeling)",
    CD: "Congo - Kinshasa",
    CF: "Republica Centrafricană",
    CG: "Congo - Brazzaville",
    CH: "Elveția",
    CI: "Côte d’Ivoire",
    CK: "Insulele Cook",
    CL: "Chile",
    CM: "Camerun",
    CN: "China",
    CO: "Columbia",
    CR: "Costa Rica",
    CU: "Cuba",
    CV: "Capul Verde",
    CW: "Curaçao",
    CX: "Insula Christmas",
    CY: "Cipru",
    CZ: "Cehia",
    DE: "Germania",
    DJ: "Djibouti",
    DK: "Danemarca",
    DM: "Dominica",
    DO: "Republica Dominicană",
    DZ: "Algeria",
    EC: "Ecuador",
    EE: "Estonia",
    EG: "Egipt",
    EH: "Sahara Occidentală",
    ER: "Eritreea",
    ES: "Spania",
    ET: "Etiopia",
    FI: "Finlanda",
    FJ: "Fiji",
    FK: "Insulele Falkland",
    FM: "Micronezia",
    FO: "Insulele Feroe",
    FR: "Franța",
    GA: "Gabon",
    GB: "Regatul Unit",
    GD: "Grenada",
    GE: "Georgia",
    GF: "Guyana Franceză",
    GG: "Guernsey",
    GH: "Ghana",
    GI: "Gibraltar",
    GL: "Groenlanda",
    GM: "Gambia",
    GN: "Guineea",
    GP: "Guadelupa",
    GQ: "Guineea Ecuatorială",
    GR: "Grecia",
    GS: "Georgia de Sud și Insulele Sandwich de Sud",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guineea-Bissau",
    GY: "Guyana",
    HK: "R.A.S. Hong Kong a Chinei",
    HM: "Insula Heard și Insulele McDonald",
    HN: "Honduras",
    HR: "Croația",
    HT: "Haiti",
    HU: "Ungaria",
    ID: "Indonezia",
    IE: "Irlanda",
    IL: "Israel",
    IM: "Insula Man",
    IN: "India",
    IO: "Teritoriul Britanic din Oceanul Indian",
    IQ: "Irak",
    IR: "Iran",
    IS: "Islanda",
    IT: "Italia",
    JE: "Jersey",
    JM: "Jamaica",
    JO: "Iordania",
    JP: "Japonia",
    KE: "Kenya",
    KG: "Kârgâzstan",
    KH: "Cambodgia",
    KI: "Kiribati",
    KM: "Comore",
    KN: "Saint Kitts și Nevis",
    KP: "Coreea de Nord",
    KR: "Coreea de Sud",
    KW: "Kuweit",
    KY: "Insulele Cayman",
    KZ: "Kazahstan",
    LA: "Laos",
    LB: "Liban",
    LC: "Sfânta Lucia",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Liberia",
    LS: "Lesotho",
    LT: "Lituania",
    LU: "Luxemburg",
    LV: "Letonia",
    LY: "Libia",
    MA: "Maroc",
    MC: "Monaco",
    MD: "Republica Moldova",
    ME: "Muntenegru",
    MF: "Sfântul Martin",
    MG: "Madagascar",
    MH: "Insulele Marshall",
    MK: "Republica Macedonia",
    ML: "Mali",
    MM: "Myanmar",
    MN: "Mongolia",
    MO: "R.A.S. Macao a Chinei",
    MP: "Insulele Mariane de Nord",
    MQ: "Martinica",
    MR: "Mauritania",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mauritius",
    MV: "Maldive",
    MW: "Malawi",
    MX: "Mexic",
    MY: "Malaysia",
    MZ: "Mozambic",
    NA: "Namibia",
    NC: "Noua Caledonie",
    NE: "Niger",
    NF: "Insula Norfolk",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Țările de Jos",
    NO: "Norvegia",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "Noua Zeelandă",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PF: "Polinezia Franceză",
    PG: "Papua-Noua Guinee",
    PH: "Filipine",
    PK: "Pakistan",
    PL: "Polonia",
    PM: "Saint-Pierre și Miquelon",
    PN: "Insulele Pitcairn",
    PR: "Puerto Rico",
    PS: "Teritoriile Palestiniene",
    PT: "Portugalia",
    PW: "Palau",
    PY: "Paraguay",
    QA: "Qatar",
    RE: "Réunion",
    RO: "România",
    RS: "Serbia",
    RU: "Rusia",
    RW: "Rwanda",
    SA: "Arabia Saudită",
    SB: "Insulele Solomon",
    SC: "Seychelles",
    SD: "Sudan",
    SE: "Suedia",
    SG: "Singapore",
    SH: "Sfânta Elena",
    SI: "Slovenia",
    SJ: "Svalbard și Jan Mayen",
    SK: "Slovacia",
    SL: "Sierra Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalia",
    SR: "Suriname",
    SS: "Sudanul de Sud",
    ST: "Sao Tomé și Príncipe",
    SV: "El Salvador",
    SX: "Sint-Maarten",
    SY: "Siria",
    SZ: "Swaziland",
    TC: "Insulele Turks și Caicos",
    TD: "Ciad",
    TF: "Teritoriile Australe și Antarctice Franceze",
    TG: "Togo",
    TH: "Thailanda",
    TJ: "Tadjikistan",
    TK: "Tokelau",
    TL: "Timorul de Est",
    TM: "Turkmenistan",
    TN: "Tunisia",
    TO: "Tonga",
    TR: "Turcia",
    TT: "Trinidad și Tobago",
    TV: "Tuvalu",
    TW: "Taiwan",
    TZ: "Tanzania",
    UA: "Ucraina",
    UG: "Uganda",
    UM: "Insulele Îndepărtate ale S.U.A.",
    US: "Statele Unite ale Americii",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VA: "Statul Cetății Vaticanului",
    VC: "Saint Vincent și Grenadinele",
    VE: "Venezuela",
    VG: "Insulele Virgine Britanice",
    VI: "Insulele Virgine Americane",
    VN: "Vietnam",
    VU: "Vanuatu",
    WF: "Wallis și Futuna",
    WS: "Samoa",
    XK: "Kosovo",
    YE: "Yemen",
    YT: "Mayotte",
    ZA: "Africa de Sud",
    ZM: "Zambia",
    ZW: "Zimbabw",
};

function from$9(country) {
    return names$8[country] || from$9(Alpha2.from(country));
}
function parse$9(country) {
    const result = Object.entries(names$8).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$8 = {
    AU: "Австралия",
    AT: "Австрия",
    AZ: "Азербайджан",
    AX: "Аландские острова",
    AL: "Албания",
    DZ: "Алжир",
    VI: "Виргинские Острова (США)",
    AS: "Американское Самоа",
    AI: "Ангилья",
    AO: "Ангола",
    AD: "Андорра",
    AQ: "Антарктида",
    AG: "Антигуа и Барбуда",
    AR: "Аргентина",
    AM: "Армения",
    AW: "Аруба",
    AF: "Афганистан",
    BS: "Багамы",
    BD: "Бангладеш",
    BB: "Барбадос",
    BH: "Бахрейн",
    BZ: "Белиз",
    BY: "Беларусь",
    BE: "Бельгия",
    BJ: "Бенин",
    BM: "Бермуды",
    BG: "Болгария",
    BO: "Боливия",
    BQ: "Бонэйр, Синт-Эстатиус и Саба",
    BA: "Босния и Герцеговина",
    BW: "Ботсвана",
    BR: "Бразилия",
    IO: "Британская территория в Индийском океане",
    VG: "Виргинские Острова (Великобритания)",
    BN: "Бруней",
    BF: "Буркина-Фасо",
    BI: "Бурунди",
    BT: "Бутан",
    VU: "Вануату",
    VA: "Ватикан",
    GB: "Великобритания",
    HU: "Венгрия",
    VE: "Венесуэла",
    UM: "Внешние малые острова (США)",
    TL: "Восточный Тимор",
    VN: "Вьетнам",
    GA: "Габон",
    HT: "Гаити",
    GY: "Гайана",
    GM: "Гамбия",
    GH: "Гана",
    GP: "Гваделупа",
    GT: "Гватемала",
    GF: "Гвиана",
    GN: "Гвинея",
    GW: "Гвинея-Бисау",
    DE: "Германия",
    GG: "Гернси",
    GI: "Гибралтар",
    HN: "Гондурас",
    HK: "Гонконг",
    GD: "Гренада",
    GL: "Гренландия",
    GR: "Греция",
    GE: "Грузия",
    GU: "Гуам",
    DK: "Дания",
    JE: "Джерси",
    DJ: "Джибути",
    DM: "Доминика",
    DO: "Доминиканская Республика",
    CD: "Демократическая Республика Конго",
    EG: "Египет",
    ZM: "Замбия",
    EH: "САДР",
    ZW: "Зимбабве",
    IL: "Израиль",
    IN: "Индия",
    ID: "Индонезия",
    JO: "Иордания",
    IQ: "Ирак",
    IR: "Иран",
    IE: "Ирландия",
    IS: "Исландия",
    ES: "Испания",
    IT: "Италия",
    YE: "Йемен",
    CV: "Кабо-Верде",
    KZ: "Казахстан",
    KY: "Острова Кайман",
    KH: "Камбоджа",
    CM: "Камерун",
    CA: "Канада",
    QA: "Катар",
    KE: "Кения",
    CY: "Кипр",
    KG: "Киргизия",
    KI: "Кирибати",
    TW: "Китайская Республика",
    KP: "КНДР (Корейская Народно-Демократическая Республика)",
    CN: "КНР (Китайская Народная Республика)",
    CC: "Кокосовые острова",
    CO: "Колумбия",
    KM: "Коморы",
    CR: "Коста-Рика",
    CI: "Кот-д’Ивуар",
    CU: "Куба",
    KW: "Кувейт",
    CW: "Кюрасао",
    LA: "Лаос",
    LV: "Латвия",
    LS: "Лесото",
    LR: "Либерия",
    LB: "Ливан",
    LY: "Ливия",
    LT: "Литва",
    LI: "Лихтенштейн",
    LU: "Люксембург",
    MU: "Маврикий",
    MR: "Мавритания",
    MG: "Мадагаскар",
    YT: "Майотта",
    MO: "Макао",
    MK: "Македония",
    MW: "Малави",
    MY: "Малайзия",
    ML: "Мали",
    MV: "Мальдивы",
    MT: "Мальта",
    MA: "Марокко",
    MQ: "Мартиника",
    MH: "Маршалловы Острова",
    MX: "Мексика",
    FM: "Микронезия",
    MZ: "Мозамбик",
    MD: "Молдавия",
    MC: "Монако",
    MN: "Монголия",
    MS: "Монтсеррат",
    MM: "Мьянма",
    NA: "Намибия",
    NR: "Науру",
    NP: "Непал",
    NE: "Нигер",
    NG: "Нигерия",
    NL: "Нидерланды",
    NI: "Никарагуа",
    NU: "Ниуэ",
    NZ: "Новая Зеландия",
    NC: "Новая Каледония",
    NO: "Норвегия",
    AE: "ОАЭ",
    OM: "Оман",
    BV: "Остров Буве",
    IM: "Остров Мэн",
    CK: "Острова Кука",
    NF: "Остров Норфолк",
    CX: "Остров Рождества",
    PN: "Острова Питкэрн",
    SH: "Острова Святой Елены, Вознесения и Тристан-да-Кунья",
    PK: "Пакистан",
    PW: "Палау",
    PS: "Государство Палестина",
    PA: "Панама",
    PG: "Папуа — Новая Гвинея",
    PY: "Парагвай",
    PE: "Перу",
    PL: "Польша",
    PT: "Португалия",
    PR: "Пуэрто-Рико",
    CG: "Республика Конго",
    KR: "Республика Корея",
    RE: "Реюньон",
    RU: "Россия",
    RW: "Руанда",
    RO: "Румыния",
    SV: "Сальвадор",
    WS: "Самоа",
    SM: "Сан-Марино",
    ST: "Сан-Томе и Принсипи",
    SA: "Саудовская Аравия",
    SZ: "Свазиленд",
    MP: "Северные Марианские Острова",
    SC: "Сейшельские Острова",
    BL: "Сен-Бартелеми",
    MF: "Сен-Мартен",
    PM: "Сен-Пьер и Микелон",
    SN: "Сенегал",
    VC: "Сент-Винсент и Гренадины",
    KN: "Сент-Китс и Невис",
    LC: "Сент-Люсия",
    RS: "Сербия",
    SG: "Сингапур",
    SX: "Синт-Мартен",
    SY: "Сирия",
    SK: "Словакия",
    SI: "Словения",
    SB: "Соломоновы Острова",
    SO: "Сомали",
    SD: "Судан",
    SR: "Суринам",
    US: "США",
    SL: "Сьерра-Леоне",
    TJ: "Таджикистан",
    TH: "Таиланд",
    TZ: "Танзания",
    TC: "Теркс и Кайкос",
    TG: "Того",
    TK: "Токелау",
    TO: "Тонга",
    TT: "Тринидад и Тобаго",
    TV: "Тувалу",
    TN: "Тунис",
    TM: "Туркмения",
    TR: "Турция",
    UG: "Уганда",
    UZ: "Узбекистан",
    UA: "Украина",
    WF: "Уоллис и Футуна",
    UY: "Уругвай",
    FO: "Фареры",
    FJ: "Фиджи",
    PH: "Филиппины",
    FI: "Финляндия",
    FK: "Фолклендские острова",
    FR: "Франция",
    PF: "Французская Полинезия",
    TF: "Французские Южные и Антарктические Территории",
    HM: "Херд и Макдональд",
    HR: "Хорватия",
    CF: "ЦАР",
    TD: "Чад",
    ME: "Черногория",
    CZ: "Чехия",
    CL: "Чили",
    CH: "Швейцария",
    SE: "Швеция",
    SJ: "Шпицберген и Ян-Майен",
    LK: "Шри-Ланка",
    EC: "Эквадор",
    GQ: "Экваториальная Гвинея",
    ER: "Эритрея",
    EE: "Эстония",
    ET: "Эфиопия",
    ZA: "ЮАР",
    GS: "Южная Георгия и Южные Сандвичевы Острова",
    SS: "Южный Судан",
    JM: "Ямайка",
    JP: "Япония",
    XK: "Косов",
};

function from$8(country) {
    return names$7[country] || from$8(Alpha2.from(country));
}
function parse$8(country) {
    const result = Object.entries(names$7).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$7 = {
    AD: "Andorra",
    AE: "Spojené arabské emiráty",
    AF: "Afganistan",
    AG: "Antigua a Barbuda",
    AI: "Anguilla",
    AL: "Albánsko",
    AM: "Arménsko",
    AO: "Angola",
    AQ: "Antarktída",
    AR: "Argentína",
    AS: "Americká Samoa",
    AT: "Rakúsko",
    AU: "Austrália",
    AW: "Aruba",
    AX: "Alandy",
    AZ: "Azerbajdžan",
    BA: "Bosna a Hercegovina",
    BB: "Barbados",
    BD: "Bangladéš",
    BE: "Belgicko",
    BF: "Burkina Faso",
    BG: "Bulharsko",
    BH: "Bahrajn",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Svätý Bartolomej",
    BM: "Bermudy",
    BN: "Brunej",
    BO: "Bolívia",
    BQ: "Karibské Holandsko",
    BR: "Brazília",
    BS: "Bahamy",
    BT: "Bhután",
    BV: "Bouvetov ostrov",
    BW: "Botswana",
    BY: "Bielorusko",
    BZ: "Belize",
    CA: "Kanada",
    CC: "Kokosové ostrovy",
    CD: "Konžská demokratická republika",
    CF: "Stredoafrická republika",
    CG: "Konžská republika",
    CH: "Švajčiarsko",
    CI: "Pobrežie Slonoviny",
    CK: "Cookove ostrovy",
    CL: "Čile",
    CM: "Kamerun",
    CN: "Čína",
    CO: "Kolumbia",
    CR: "Kostarika",
    CU: "Kuba",
    CV: "Kapverdy",
    CW: "Curaçao",
    CX: "Vianočný ostrov",
    CY: "Cyprus",
    CZ: "Česko",
    DE: "Nemecko",
    DJ: "Džibutsko",
    DK: "Dánsko",
    DM: "Dominika",
    DO: "Dominikánska republika",
    DZ: "Alžírsko",
    EC: "Ekvádor",
    EE: "Estónsko",
    EG: "Egypt",
    EH: "Západná Sahara",
    ER: "Eritrea",
    ES: "Španielsko",
    ET: "Etiópia",
    FI: "Fínsko",
    FJ: "Fidži",
    FK: "Falklandy",
    FM: "Mikronézia",
    FO: "Faerské ostrovy",
    FR: "Francúzsko",
    GA: "Gabon",
    GB: "Spojené kráľovstvo",
    GD: "Grenada",
    GE: "Gruzínsko",
    GF: "Francúzska Guayana",
    GG: "Guernsey",
    GH: "Ghana",
    GI: "Gibraltár",
    GL: "Grónsko",
    GM: "Gambia",
    GN: "Guinea",
    GP: "Guadeloupe",
    GQ: "Rovníková Guinea",
    GR: "Grécko",
    GS: "Južná Georgia a Južné Sandwichove ostrovy",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinea-Bissau",
    GY: "Guayana",
    HK: "Hongkong – OAO Číny",
    HM: "Heardov ostrov a Macdonaldove ostrovy",
    HN: "Honduras",
    HR: "Chorvátsko",
    HT: "Haiti",
    HU: "Maďarsko",
    ID: "Indonézia",
    IE: "Írsko",
    IL: "Izrael",
    IM: "Ostrov Man",
    IN: "India",
    IO: "Britské indickooceánske územie",
    IQ: "Irak",
    IR: "Irán",
    IS: "Island",
    IT: "Taliansko",
    JE: "Jersey",
    JM: "Jamajka",
    JO: "Jordánsko",
    JP: "Japonsko",
    KE: "Keňa",
    KG: "Kirgizsko",
    KH: "Kambodža",
    KI: "Kiribati",
    KM: "Komory",
    KN: "Svätý Krištof a Nevis",
    KP: "Severná Kórea",
    KR: "Južná Kórea",
    KW: "Kuvajt",
    KY: "Kajmanie ostrovy",
    KZ: "Kazachstan",
    LA: "Laos",
    LB: "Libanon",
    LC: "Svätá Lucia",
    LI: "Lichtenštajnsko",
    LK: "Srí Lanka",
    LR: "Libéria",
    LS: "Lesotho",
    LT: "Litva",
    LU: "Luxembursko",
    LV: "Lotyšsko",
    LY: "Líbya",
    MA: "Maroko",
    MC: "Monako",
    MD: "Moldavsko",
    ME: "Čierna Hora",
    MF: "Svätý Martin (fr.)",
    MG: "Madagaskar",
    MH: "Marshallove ostrovy",
    MK: "Macedónsko",
    ML: "Mali",
    MM: "Mjanmarsko",
    MN: "Mongolsko",
    MO: "Macao – OAO Číny",
    MP: "Severné Mariány",
    MQ: "Martinik",
    MR: "Mauritánia",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Maurícius",
    MV: "Maldivy",
    MW: "Malawi",
    MX: "Mexiko",
    MY: "Malajzia",
    MZ: "Mozambik",
    NA: "Namíbia",
    NC: "Nová Kaledónia",
    NE: "Niger",
    NF: "Norfolk",
    NG: "Nigéria",
    NI: "Nikaragua",
    NL: "Holandsko",
    NO: "Nórsko",
    NP: "Nepál",
    NR: "Nauru",
    NU: "Niue",
    NZ: "Nový Zéland",
    OM: "Omán",
    PA: "Panama",
    PE: "Peru",
    PF: "Francúzska Polynézia",
    PG: "Papua Nová Guinea",
    PH: "Filipíny",
    PK: "Pakistan",
    PL: "Poľsko",
    PM: "Saint Pierre a Miquelon",
    PN: "Pitcairnove ostrovy",
    PR: "Portoriko",
    PS: "Palestínske územia",
    PT: "Portugalsko",
    PW: "Palau",
    PY: "Paraguaj",
    QA: "Katar",
    RE: "Réunion",
    RO: "Rumunsko",
    RS: "Srbsko",
    RU: "Rusko",
    RW: "Rwanda",
    SA: "Saudská Arábia",
    SB: "Šalamúnove ostrovy",
    SC: "Seychely",
    SD: "Sudán",
    SE: "Švédsko",
    SG: "Singapur",
    SH: "Svätá Helena",
    SI: "Slovinsko",
    SJ: "Svalbard a Jan Mayen",
    SK: "Slovensko",
    SL: "Sierra Leone",
    SM: "San Maríno",
    SN: "Senegal",
    SO: "Somálsko",
    SR: "Surinam",
    SS: "Južný Sudán",
    ST: "Svätý Tomáš a Princov ostrov",
    SV: "Salvádor",
    SX: "Svätý Martin (hol.)",
    SY: "Sýria",
    SZ: "Svazijsko",
    TC: "Turks a Caicos",
    TD: "Čad",
    TF: "Francúzske južné a antarktické územia",
    TG: "Togo",
    TH: "Thajsko",
    TJ: "Tadžikistan",
    TK: "Tokelau",
    TL: "Východný Timor",
    TM: "Turkménsko",
    TN: "Tunisko",
    TO: "Tonga",
    TR: "Turecko",
    TT: "Trinidad a Tobago",
    TV: "Tuvalu",
    TW: "Taiwan",
    TZ: "Tanzánia",
    UA: "Ukrajina",
    UG: "Uganda",
    UM: "Menšie odľahlé ostrovy USA",
    US: "Spojené štáty",
    UY: "Uruguaj",
    UZ: "Uzbekistan",
    VA: "Vatikán",
    VC: "Svätý Vincent a Grenadíny",
    VE: "Venezuela",
    VG: "Britské Panenské ostrovy",
    VI: "Americké Panenské ostrovy",
    VN: "Vietnam",
    VU: "Vanuatu",
    WF: "Wallis a Futuna",
    WS: "Samoa",
    XK: "Kosovo",
    YE: "Jemen",
    YT: "Mayotte",
    ZA: "Južná Afrika",
    ZM: "Zambia",
    ZW: "Zimbabw",
};

function from$7(country) {
    return names$6[country] || from$7(Alpha2.from(country));
}
function parse$7(country) {
    const result = Object.entries(names$6).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$6 = {
    AD: "Andora",
    AE: "Združeni arabski emirati",
    AF: "Afganistan",
    AG: "Antigva in Barbuda",
    AI: "Angvila",
    AL: "Albanija",
    AM: "Armenija",
    AO: "Angola",
    AQ: "Antarktika",
    AR: "Argentina",
    AS: "Ameriška Samoa",
    AT: "Avstrija",
    AU: "Avstralija",
    AW: "Aruba",
    AX: "Ålandski otoki",
    AZ: "Azerbajdžan",
    BA: "Bosna in Hercegovina",
    BB: "Barbados",
    BD: "Bangladeš",
    BE: "Belgija",
    BF: "Burkina Faso",
    BG: "Bolgarija",
    BH: "Bahrajn",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint Barthélemy",
    BM: "Bermudi",
    BN: "Brunej",
    BO: "Bolivija",
    BQ: "Nizozemski Karibi",
    BR: "Brazilija",
    BS: "Bahami",
    BT: "Butan",
    BV: "Bouvetov otok",
    BW: "Bocvana",
    BY: "Belorusija",
    BZ: "Belize",
    CA: "Kanada",
    CC: "Kokosovi otoki",
    CD: "Demokratična republika Kongo",
    CF: "Centralnoafriška republika",
    CG: "Kongo - Brazzaville",
    CH: "Švica",
    CI: "Slonokoščena obala",
    CK: "Cookovi otoki",
    CL: "Čile",
    CM: "Kamerun",
    CN: "Kitajska",
    CO: "Kolumbija",
    CR: "Kostarika",
    CU: "Kuba",
    CV: "Zelenortski otoki",
    CW: "Curaçao",
    CX: "Božični otok",
    CY: "Ciper",
    CZ: "Češka",
    DE: "Nemčija",
    DJ: "Džibuti",
    DK: "Danska",
    DM: "Dominika",
    DO: "Dominikanska republika",
    DZ: "Alžirija",
    EC: "Ekvador",
    EE: "Estonija",
    EG: "Egipt",
    EH: "Zahodna Sahara",
    ER: "Eritreja",
    ES: "Španija",
    ET: "Etiopija",
    FI: "Finska",
    FJ: "Fidži",
    FK: "Falklandski otoki",
    FM: "Mikronezija",
    FO: "Ferski otoki",
    FR: "Francija",
    GA: "Gabon",
    GB: "Združeno kraljestvo",
    GD: "Grenada",
    GE: "Gruzija",
    GF: "Francoska Gvajana",
    GG: "Guernsey",
    GH: "Gana",
    GI: "Gibraltar",
    GL: "Grenlandija",
    GM: "Gambija",
    GN: "Gvineja",
    GP: "Gvadalupe",
    GQ: "Ekvatorialna Gvineja",
    GR: "Grčija",
    GS: "Južna Georgia in Južni Sandwichevi otoki",
    GT: "Gvatemala",
    GU: "Guam",
    GW: "Gvineja Bissau",
    GY: "Gvajana",
    HK: "Hongkong",
    HM: "Heardov otok in McDonaldovi otoki",
    HN: "Honduras",
    HR: "Hrvaška",
    HT: "Haiti",
    HU: "Madžarska",
    ID: "Indonezija",
    IE: "Irska",
    IL: "Izrael",
    IM: "Otok Man",
    IN: "Indija",
    IO: "Britansko ozemlje v Indijskem oceanu",
    IQ: "Irak",
    IR: "Iran",
    IS: "Islandija",
    IT: "Italija",
    JE: "Jersey",
    JM: "Jamajka",
    JO: "Jordanija",
    JP: "Japonska",
    KE: "Kenija",
    KG: "Kirgizistan",
    KH: "Kambodža",
    KI: "Kiribati",
    KM: "Komori",
    KN: "Saint Kitts in Nevis",
    KP: "Severna Koreja",
    KR: "Južna Koreja",
    KW: "Kuvajt",
    KY: "Kajmanski otoki",
    KZ: "Kazahstan",
    LA: "Laos",
    LB: "Libanon",
    LC: "Saint Lucia",
    LI: "Lihtenštajn",
    LK: "Šrilanka",
    LR: "Liberija",
    LS: "Lesoto",
    LT: "Litva",
    LU: "Luksemburg",
    LV: "Latvija",
    LY: "Libija",
    MA: "Maroko",
    MC: "Monako",
    MD: "Moldavija",
    ME: "Črna gora",
    MF: "Saint Martin",
    MG: "Madagaskar",
    MH: "Marshallovi otoki",
    MK: "Makedonija",
    ML: "Mali",
    MM: "Mjanmar (Burma)",
    MN: "Mongolija",
    MO: "Macao",
    MP: "Severni Marianski otoki",
    MQ: "Martinik",
    MR: "Mavretanija",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mauritius",
    MV: "Maldivi",
    MW: "Malavi",
    MX: "Mehika",
    MY: "Malezija",
    MZ: "Mozambik",
    NA: "Namibija",
    NC: "Nova Kaledonija",
    NE: "Niger",
    NF: "Norfolški otok",
    NG: "Nigerija",
    NI: "Nikaragva",
    NL: "Nizozemska",
    NO: "Norveška",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "Nova Zelandija",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PF: "Francoska Polinezija",
    PG: "Papua Nova Gvineja",
    PH: "Filipini",
    PK: "Pakistan",
    PL: "Poljska",
    PM: "Saint Pierre in Miquelon",
    PN: "Pitcairn",
    PR: "Portoriko",
    PS: "Palestinsko ozemlje",
    PT: "Portugalska",
    PW: "Palau",
    PY: "Paragvaj",
    QA: "Katar",
    RE: "Reunion",
    RO: "Romunija",
    RS: "Srbija",
    RU: "Rusija",
    RW: "Ruanda",
    SA: "Saudova Arabija",
    SB: "Salomonovi otoki",
    SC: "Sejšeli",
    SD: "Sudan",
    SE: "Švedska",
    SG: "Singapur",
    SH: "Sveta Helena",
    SI: "Slovenija",
    SJ: "Svalbard in Jan Mayen",
    SK: "Slovaška",
    SL: "Sierra Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalija",
    SR: "Surinam",
    SS: "Južni Sudan",
    ST: "Sao Tome in Principe",
    SV: "Salvador",
    SX: "Sint Maarten",
    SY: "Sirija",
    SZ: "Svazi",
    TC: "Otoki Turks in Caicos",
    TD: "Čad",
    TF: "Francosko južno ozemlje",
    TG: "Togo",
    TH: "Tajska",
    TJ: "Tadžikistan",
    TK: "Tokelau",
    TL: "Timor-Leste",
    TM: "Turkmenistan",
    TN: "Tunizija",
    TO: "Tonga",
    TR: "Turčija",
    TT: "Trinidad in Tobago",
    TV: "Tuvalu",
    TW: "Tajvan",
    TZ: "Tanzanija",
    UA: "Ukrajina",
    UG: "Uganda",
    UM: "Stranski zunanji otoki Združenih držav",
    US: "Združene države Amerike",
    UY: "Urugvaj",
    UZ: "Uzbekistan",
    VA: "Vatikan",
    VC: "Saint Vincent in Grenadine",
    VE: "Venezuela",
    VG: "Britanski Deviški otoki",
    VI: "Ameriški Deviški otoki",
    VN: "Vietnam",
    VU: "Vanuatu",
    WF: "Wallis in Futuna",
    WS: "Samoa",
    XK: "Kosovo",
    YE: "Jemen",
    YT: "Mayotte",
    ZA: "Južnoafriška republika",
    ZM: "Zambija",
    ZW: "Zimbabv",
};

function from$6(country) {
    return names$5[country] || from$6(Alpha2.from(country));
}
function parse$6(country) {
    const result = Object.entries(names$5).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$5 = {
    AD: "Андора",
    AE: "Уједињени Арапски Емирати",
    AF: "Авганистан",
    AG: "Антигва и Барбуда",
    AI: "Ангвила",
    AL: "Албанија",
    AM: "Јерменија",
    AO: "Ангола",
    AQ: "Антарктик",
    AR: "Аргентина",
    AS: "Америчка Самоа",
    AT: "Аустрија",
    AU: "Аустралија",
    AW: "Аруба",
    AX: "Оландска Острва",
    AZ: "Азербејџан",
    BA: "Босна и Херцеговина",
    BB: "Барбадос",
    BD: "Бангладеш",
    BE: "Белгија",
    BF: "Буркина Фасо",
    BG: "Бугарска",
    BH: "Бахреин",
    BI: "Бурунди",
    BJ: "Бенин",
    BL: "Сен Бартелеми",
    BM: "Бермуда",
    BN: "Брунеј",
    BO: "Боливија",
    BQ: "Карипска Холандија",
    BR: "Бразил",
    BS: "Бахами",
    BT: "Бутан",
    BV: "Острво Буве",
    BW: "Боцвана",
    BY: "Белорусија",
    BZ: "Белизе",
    CA: "Канада",
    CC: "Кокосова (Килингова) Острва",
    CD: "Конго - Киншаса",
    CF: "Централноафричка Република",
    CG: "Конго - Бразавил",
    CH: "Швајцарска",
    CI: "Обала Слоноваче",
    CK: "Кукова Острва",
    CL: "Чиле",
    CM: "Камерун",
    CN: "Кина",
    CO: "Колумбија",
    CR: "Костарика",
    CU: "Куба",
    CV: "Зеленортска Острва",
    CW: "Курасао",
    CX: "Божићно Острво",
    CY: "Кипар",
    CZ: "Чешка",
    DE: "Немачка",
    DJ: "Џибути",
    DK: "Данска",
    DM: "Доминика",
    DO: "Доминиканска Република",
    DZ: "Алжир",
    EC: "Еквадор",
    EE: "Естонија",
    EG: "Египат",
    EH: "Западна Сахара",
    ER: "Еритреја",
    ES: "Шпанија",
    ET: "Етиопија",
    FI: "Финска",
    FJ: "Фиџи",
    FK: "Фокландска Острва",
    FM: "Микронезија",
    FO: "Фарска Острва",
    FR: "Француска",
    GA: "Габон",
    GB: "Уједињено Краљевство",
    GD: "Гренада",
    GE: "Грузија",
    GF: "Француска Гвајана",
    GG: "Гернзи",
    GH: "Гана",
    GI: "Гибралтар",
    GL: "Гренланд",
    GM: "Гамбија",
    GN: "Гвинеја",
    GP: "Гваделуп",
    GQ: "Екваторијална Гвинеја",
    GR: "Грчка",
    GS: "Јужна Џорџија и Јужна Сендвичка Острва",
    GT: "Гватемала",
    GU: "Гуам",
    GW: "Гвинеја-Бисао",
    GY: "Гвајана",
    HK: "САР Хонгконг (Кина)",
    HM: "Острво Херд и Мекдоналдова острва",
    HN: "Хондурас",
    HR: "Хрватска",
    HT: "Хаити",
    HU: "Мађарска",
    ID: "Индонезија",
    IE: "Ирска",
    IL: "Израел",
    IM: "Острво Ман",
    IN: "Индија",
    IO: "Британска територија Индијског океана",
    IQ: "Ирак",
    IR: "Иран",
    IS: "Исланд",
    IT: "Италија",
    JE: "Џерзи",
    JM: "Јамајка",
    JO: "Јордан",
    JP: "Јапан",
    KE: "Кенија",
    KG: "Киргистан",
    KH: "Камбоџа",
    KI: "Кирибати",
    KM: "Коморска Острва",
    KN: "Сент Китс и Невис",
    KP: "Северна Кореја",
    KR: "Јужна Кореја",
    KW: "Кувајт",
    KY: "Кајманска Острва",
    KZ: "Казахстан",
    LA: "Лаос",
    LB: "Либан",
    LC: "Света Луција",
    LI: "Лихтенштајн",
    LK: "Шри Ланка",
    LR: "Либерија",
    LS: "Лесото",
    LT: "Литванија",
    LU: "Луксембург",
    LV: "Летонија",
    LY: "Либија",
    MA: "Мароко",
    MC: "Монако",
    MD: "Молдавија",
    ME: "Црна Гора",
    MF: "Свети Мартин (Француска)",
    MG: "Мадагаскар",
    MH: "Маршалска Острва",
    MK: "Македонија",
    ML: "Мали",
    MM: "Мијанмар (Бурма)",
    MN: "Монголија",
    MO: "САР Макао (Кина)",
    MP: "Северна Маријанска Острва",
    MQ: "Мартиник",
    MR: "Мауританија",
    MS: "Монсерат",
    MT: "Малта",
    MU: "Маурицијус",
    MV: "Малдиви",
    MW: "Малави",
    MX: "Мексико",
    MY: "Малезија",
    MZ: "Мозамбик",
    NA: "Намибија",
    NC: "Нова Каледонија",
    NE: "Нигер",
    NF: "Острво Норфок",
    NG: "Нигерија",
    NI: "Никарагва",
    NL: "Холандија",
    NO: "Норвешка",
    NP: "Непал",
    NR: "Науру",
    NU: "Ниуе",
    NZ: "Нови Зеланд",
    OM: "Оман",
    PA: "Панама",
    PE: "Перу",
    PF: "Француска Полинезија",
    PG: "Папуа Нова Гвинеја",
    PH: "Филипини",
    PK: "Пакистан",
    PL: "Пољска",
    PM: "Сен Пјер и Микелон",
    PN: "Питкерн",
    PR: "Порторико",
    PS: "Палестинске територије",
    PT: "Португалија",
    PW: "Палау",
    PY: "Парагвај",
    QA: "Катар",
    RE: "Реинион",
    RO: "Румунија",
    RS: "Србија",
    RU: "Русија",
    RW: "Руанда",
    SA: "Саудијска Арабија",
    SB: "Соломонска Острва",
    SC: "Сејшели",
    SD: "Судан",
    SE: "Шведска",
    SG: "Сингапур",
    SH: "Света Јелена",
    SI: "Словенија",
    SJ: "Свалбард и Јан Мајен",
    SK: "Словачка",
    SL: "Сијера Леоне",
    SM: "Сан Марино",
    SN: "Сенегал",
    SO: "Сомалија",
    SR: "Суринам",
    SS: "Јужни Судан",
    ST: "Сао Томе и Принципе",
    SV: "Салвадор",
    SX: "Свети Мартин (Холандија)",
    SY: "Сирија",
    SZ: "Свазиленд",
    TC: "Острва Туркс и Каикос",
    TD: "Чад",
    TF: "Француске Јужне Територије",
    TG: "Того",
    TH: "Тајланд",
    TJ: "Таџикистан",
    TK: "Токелау",
    TL: "Источни Тимор",
    TM: "Туркменистан",
    TN: "Тунис",
    TO: "Тонга",
    TR: "Турска",
    TT: "Тринидад и Тобаго",
    TV: "Тувалу",
    TW: "Тајван",
    TZ: "Танзанија",
    UA: "Украјина",
    UG: "Уганда",
    UM: "Удаљена острва САД",
    US: "Сједињене Државе",
    UY: "Уругвај",
    UZ: "Узбекистан",
    VA: "Ватикан",
    VC: "Сент Винсент и Гренадини",
    VE: "Венецуела",
    VG: "Британска Девичанска Острва",
    VI: "Америчка Девичанска Острва",
    VN: "Вијетнам",
    VU: "Вануату",
    WF: "Валис и Футуна",
    WS: "Самоа",
    XK: "Косово",
    YE: "Јемен",
    YT: "Мајот",
    ZA: "Јужноафричка Република",
    ZM: "Замбија",
    ZW: "Зимбабв",
};

function from$5(country) {
    return names$4[country] || from$5(Alpha2.from(country));
}
function parse$5(country) {
    const result = Object.entries(names$4).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$4 = {
    AD: "Andorra",
    AE: "Förenade Arabemiraten",
    AF: "Afghanistan",
    AG: "Antigua och Barbuda",
    AI: "Anguilla",
    AL: "Albanien",
    AM: "Armenien",
    AO: "Angola",
    AQ: "Antarktis",
    AR: "Argentina",
    AS: "Amerikanska Samoa",
    AT: "Österrike",
    AU: "Australien",
    AW: "Aruba",
    AX: "Åland",
    AZ: "Azerbajdzjan",
    BA: "Bosnien och Hercegovina",
    BB: "Barbados",
    BD: "Bangladesh",
    BE: "Belgien",
    BF: "Burkina Faso",
    BG: "Bulgarien",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint-Barthélemy",
    BM: "Bermuda",
    BN: "Brunei",
    BO: "Bolivia",
    BQ: "Bonaire, Saint Eustatius och Saba",
    BR: "Brasilien",
    BS: "Bahamas",
    BT: "Bhutan",
    BV: "Bouvetön",
    BW: "Botswana",
    BY: "Vitryssland",
    BZ: "Belize",
    CA: "Kanada",
    CC: "Kokosöarna",
    CD: "Demokratiska republiken Kongo",
    CF: "Centralafrikanska republiken",
    CG: "Kongo-Brazzaville",
    CH: "Schweiz",
    CI: "Elfenbenskusten",
    CK: "Cooköarna",
    CL: "Chile",
    CM: "Kamerun",
    CN: "Kina",
    CO: "Colombia",
    CR: "Costa Rica",
    CU: "Kuba",
    CV: "Kap Verde",
    CW: "Curacao",
    CX: "Julön",
    CY: "Cypern",
    CZ: "Tjeckien",
    DE: "Tyskland",
    DJ: "Djibouti",
    DK: "Danmark",
    DM: "Dominica",
    DO: "Dominikanska republiken",
    DZ: "Algeriet",
    EC: "Ecuador",
    EE: "Estland",
    EG: "Egypten",
    EH: "Västsahara",
    ER: "Eritrea",
    ES: "Spanien",
    ET: "Etiopien",
    FI: "Finland",
    FJ: "Fiji",
    FK: "Falklandsöarna",
    FM: "Mikronesiska federationen",
    FO: "Färöarna",
    FR: "Frankrike",
    GA: "Gabon",
    GB: "Storbritannien",
    GD: "Grenada",
    GE: "Georgien",
    GF: "Franska Guyana",
    GG: "Guernsey",
    GH: "Ghana",
    GI: "Gibraltar",
    GL: "Grönland",
    GM: "Gambia",
    GN: "Guinea",
    GP: "Guadeloupe",
    GQ: "Ekvatorialguinea",
    GR: "Grekland",
    GS: "Sydgeorgien och Sydsandwichöarna",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinea Bissau",
    GY: "Guyana",
    HK: "Hongkong",
    HM: "Heard- och McDonaldsöarna",
    HN: "Honduras",
    HR: "Kroatien",
    HT: "Haiti",
    HU: "Ungern",
    ID: "Indonesien",
    IE: "Irland",
    IL: "Israel",
    IM: "Isle of Man",
    IN: "Indien",
    IO: "Brittiska territoriet i Indiska Oceanen",
    IQ: "Irak",
    IR: "Iran",
    IS: "Island",
    IT: "Italien",
    JE: "Jersey",
    JM: "Jamaica",
    JO: "Jordanien",
    JP: "Japan",
    KE: "Kenya",
    KG: "Kirgizistan",
    KH: "Kambodja",
    KI: "Kiribati",
    KM: "Komorerna",
    KN: "Saint Kitts och Nevis",
    KP: "Nordkorea",
    KR: "Sydkorea",
    KW: "Kuwait",
    KY: "Caymanöarna",
    KZ: "Kazakstan",
    LA: "Laos",
    LB: "Libanon",
    LC: "Saint Lucia",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Liberia",
    LS: "Lesotho",
    LT: "Litauen",
    LU: "Luxemburg",
    LV: "Lettland",
    LY: "Libyen",
    MA: "Marocko",
    MC: "Monaco",
    MD: "Moldavien",
    ME: "Montenegro",
    MF: "Saint Martin (franska delen)",
    MG: "Madagaskar",
    MH: "Marshallöarna",
    MK: "Makedonien",
    ML: "Mali",
    MM: "Burma",
    MN: "Mongoliet",
    MO: "Macau",
    MP: "Nordmarianerna",
    MQ: "Martinique",
    MR: "Mauretanien",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mauritius",
    MV: "Maldiverna",
    MW: "Malawi",
    MX: "Mexiko",
    MY: "Malaysia",
    MZ: "Moçambique",
    NA: "Namibia",
    NC: "Nya Kaledonien",
    NE: "Niger",
    NF: "Norfolkön",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Nederländerna",
    NO: "Norge",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "Nya Zeeland",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PF: "Franska Polynesien",
    PG: "Papua Nya Guinea",
    PH: "Filippinerna",
    PK: "Pakistan",
    PL: "Polen",
    PM: "Saint-Pierre och Miquelon",
    PN: "Pitcairnöarna",
    PR: "Puerto Rico",
    PS: "Palestinska territoriet, ockuperade",
    PT: "Portugal",
    PW: "Palau",
    PY: "Paraguay",
    QA: "Qatar",
    RE: "Réunion",
    RO: "Rumänien",
    RS: "Serbien",
    RU: "Ryssland",
    RW: "Rwanda",
    SA: "Saudiarabien",
    SB: "Salomonöarna",
    SC: "Seychellerna",
    SD: "Sudan",
    SE: "Sverige",
    SG: "Singapore",
    SH: "Sankta Helena",
    SI: "Slovenien",
    SJ: "Svalbard och Jan Mayen",
    SK: "Slovakien",
    SL: "Sierra Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalia",
    SR: "Surinam",
    SS: "Sydsudan",
    ST: "São Tomé och Príncipe",
    SV: "El Salvador",
    SX: "Sint Maarten (nederländska delen)",
    SY: "Syrien",
    SZ: "Swaziland",
    TC: "Turks- och Caicosöarna",
    TD: "Tchad",
    TF: "Franska södra territorierna",
    TG: "Togo",
    TH: "Thailand",
    TJ: "Tadzjikistan",
    TK: "Tokelauöarna",
    TL: "Östtimor",
    TM: "Turkmenistan",
    TN: "Tunisien",
    TO: "Tonga",
    TR: "Turkiet",
    TT: "Trinidad och Tobago",
    TV: "Tuvalu",
    TW: "Taiwan",
    TZ: "Tanzania",
    UA: "Ukraina",
    UG: "Uganda",
    UM: "USA:s yttre öar",
    US: "USA",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VA: "Vatikanstaten",
    VC: "Saint Vincent och Grenadinerna",
    VE: "Venezuela",
    VG: "Brittiska Jungfruöarna",
    VI: "Amerikanska Jungfruöarna",
    VN: "Vietnam",
    VU: "Vanuatu",
    WF: "Wallis- och Futunaöarna",
    WS: "Samoa",
    YE: "Jemen",
    YT: "Mayotte",
    ZA: "Sydafrika",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    XK: "Kosov",
};

function from$4(country) {
    return names$3[country] || from$4(Alpha2.from(country));
}
function parse$4(country) {
    const result = Object.entries(names$3).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$3 = {
    AD: "Andorra",
    AE: "Birleşik Arap Emirlikleri",
    AF: "Afganistan",
    AG: "Antigua ve Barbuda",
    AI: "Anguilla",
    AL: "Arnavutluk",
    AM: "Ermenistan",
    AO: "Angola",
    AQ: "Antarktika",
    AR: "Arjantin",
    AS: "Amerikan Samoası",
    AT: "Avusturya",
    AU: "Avustralya",
    AW: "Aruba",
    AX: "Åland Adaları",
    AZ: "Azerbaycan",
    BA: "Bosna Hersek",
    BB: "Barbados",
    BD: "Bangladeş",
    BE: "Belçika",
    BF: "Burkina Faso",
    BG: "Bulgaristan",
    BH: "Bahreyn",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint Barthelemy",
    BM: "Bermuda",
    BN: "Brunei",
    BO: "Bolivya",
    BQ: "Karayip Hollanda",
    BR: "Brezilya",
    BS: "Bahamalar",
    BT: "Butan",
    BV: "Bouvet Adası",
    BW: "Botsvana",
    BY: "Beyaz Rusya",
    BZ: "Belize",
    CA: "Kanada",
    CC: "Cocos (Keeling) Adaları",
    CD: "Kongo - Kinşasa",
    CF: "Orta Afrika Cumhuriyeti",
    CG: "Kongo - Brazavil",
    CH: "İsviçre",
    CI: "Fildişi Sahili",
    CK: "Cook Adaları",
    CL: "Şili",
    CM: "Kamerun",
    CN: "Çin",
    CO: "Kolombiya",
    CR: "Kosta Rika",
    CU: "Küba",
    CV: "Cape Verde",
    CW: "Curaçao",
    CX: "Christmas Adası",
    CY: "Güney Kıbrıs Rum Kesimi",
    CZ: "Çek Cumhuriyeti",
    DE: "Almanya",
    DJ: "Cibuti",
    DK: "Danimarka",
    DM: "Dominika",
    DO: "Dominik Cumhuriyeti",
    DZ: "Cezayir",
    EC: "Ekvador",
    EE: "Estonya",
    EG: "Mısır",
    EH: "Batı Sahara",
    ER: "Eritre",
    ES: "İspanya",
    ET: "Etiyopya",
    FI: "Finlandiya",
    FJ: "Fiji",
    FK: "Falkland Adaları",
    FM: "Mikronezya",
    FO: "Faroe Adaları",
    FR: "Fransa",
    GA: "Gabon",
    GB: "Birleşik Krallık",
    GD: "Grenada",
    GE: "Gürcistan",
    GF: "Fransız Guyanası",
    GG: "Guernsey",
    GH: "Gana",
    GI: "Cebelitarık",
    GL: "Grönland",
    GM: "Gambiya",
    GN: "Gine",
    GP: "Guadalupe",
    GQ: "Ekvator Ginesi",
    GR: "Yunanistan",
    GS: "Güney Georgia ve Güney Sandwich Adaları",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Gine-Bissau",
    GY: "Guyana",
    HK: "Çin Hong Kong ÖYB",
    HM: "Heard Adası ve McDonald Adaları",
    HN: "Honduras",
    HR: "Hırvatistan",
    HT: "Haiti",
    HU: "Macaristan",
    ID: "Endonezya",
    IE: "İrlanda",
    IL: "İsrail",
    IM: "Man Adası",
    IN: "Hindistan",
    IO: "Britanya Hint Okyanusu Toprakları",
    IQ: "Irak",
    IR: "İran",
    IS: "İzlanda",
    IT: "İtalya",
    JE: "Jersey",
    JM: "Jamaika",
    JO: "Ürdün",
    JP: "Japonya",
    KE: "Kenya",
    KG: "Kırgızistan",
    KH: "Kamboçya",
    KI: "Kiribati",
    KM: "Komorlar",
    KN: "Saint Kitts ve Nevis",
    KP: "Kuzey Kore",
    KR: "Güney Kore",
    KW: "Kuveyt",
    KY: "Cayman Adaları",
    KZ: "Kazakistan",
    LA: "Laos",
    LB: "Lübnan",
    LC: "Saint Lucia",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Liberya",
    LS: "Lesoto",
    LT: "Litvanya",
    LU: "Lüksemburg",
    LV: "Letonya",
    LY: "Libya",
    MA: "Fas",
    MC: "Monako",
    MD: "Moldova",
    ME: "Karadağ",
    MF: "Saint Martin",
    MG: "Madagaskar",
    MH: "Marshall Adaları",
    MK: "Makedonya",
    ML: "Mali",
    MM: "Myanmar (Burma)",
    MN: "Moğolistan",
    MO: "Çin Makao ÖYB",
    MP: "Kuzey Mariana Adaları",
    MQ: "Martinik",
    MR: "Moritanya",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mauritius",
    MV: "Maldivler",
    MW: "Malavi",
    MX: "Meksika",
    MY: "Malezya",
    MZ: "Mozambik",
    NA: "Namibya",
    NC: "Yeni Kaledonya",
    NE: "Nijer",
    NF: "Norfolk Adası",
    NG: "Nijerya",
    NI: "Nikaragua",
    NL: "Hollanda",
    NO: "Norveç",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "Yeni Zelanda",
    OM: "Umman",
    PA: "Panama",
    PE: "Peru",
    PF: "Fransız Polinezyası",
    PG: "Papua Yeni Gine",
    PH: "Filipinler",
    PK: "Pakistan",
    PL: "Polonya",
    PM: "Saint Pierre ve Miquelon",
    PN: "Pitcairn Adaları",
    PR: "Porto Riko",
    PS: "Filistin Bölgeleri",
    PT: "Portekiz",
    PW: "Palau",
    PY: "Paraguay",
    QA: "Katar",
    RE: "Réunion",
    RO: "Romanya",
    RS: "Sırbistan",
    RU: "Rusya",
    RW: "Ruanda",
    SA: "Suudi Arabistan",
    SB: "Solomon Adaları",
    SC: "Seyşeller",
    SD: "Sudan",
    SE: "İsveç",
    SG: "Singapur",
    SH: "Saint Helena",
    SI: "Slovenya",
    SJ: "Svalbard ve Jan Mayen Adaları",
    SK: "Slovakya",
    SL: "Sierra Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somali",
    SR: "Surinam",
    SS: "Güney Sudan",
    ST: "São Tomé ve Príncipe",
    SV: "El Salvador",
    SX: "Sint Maarten",
    SY: "Suriye",
    SZ: "Svaziland",
    TC: "Turks ve Caicos Adaları",
    TD: "Çad",
    TF: "Fransız Güney Toprakları",
    TG: "Togo",
    TH: "Tayland",
    TJ: "Tacikistan",
    TK: "Tokelau",
    TL: "Timor-Leste",
    TM: "Türkmenistan",
    TN: "Tunus",
    TO: "Tonga",
    TR: "Türkiye",
    TT: "Trinidad ve Tobago",
    TV: "Tuvalu",
    TW: "Tayvan",
    TZ: "Tanzanya",
    UA: "Ukrayna",
    UG: "Uganda",
    UM: "ABD Uzak Adaları",
    US: "ABD",
    UY: "Uruguay",
    UZ: "Özbekistan",
    VA: "Vatikan",
    VC: "Saint Vincent ve Grenadinler",
    VE: "Venezuela",
    VG: "Britanya Virjin Adaları",
    VI: "ABD Virjin Adaları",
    VN: "Vietnam",
    VU: "Vanuatu",
    WF: "Wallis ve Futuna Adaları",
    WS: "Samoa",
    YE: "Yemen",
    YT: "Mayotte",
    ZA: "Güney Afrika",
    ZM: "Zambiya",
    ZW: "Zimbabve",
    XK: "Kosov",
};

function from$3(country) {
    return names$2[country] || from$3(Alpha2.from(country));
}
function parse$3(country) {
    const result = Object.entries(names$2).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$2 = {
    AU: "Австралія",
    AT: "Австрія",
    AZ: "Азербайджан",
    AX: "Аландські острови",
    AL: "Албанія",
    DZ: "Алжир",
    AS: "Американське Самоа",
    AI: "Ангілья",
    AO: "Ангола",
    AD: "Андорра",
    AQ: "Антарктида",
    AG: "Антигуа і Барбуда",
    MO: "Аоминь",
    AR: "Аргентина",
    AM: "Арменія",
    AW: "Аруба",
    AF: "Афганістан",
    BS: "Багами",
    BD: "Бангладеш",
    BB: "Барбадос",
    BH: "Бахрейн",
    BZ: "Беліз",
    BE: "Бельгія",
    BJ: "Бенін",
    BM: "Бермуди",
    BY: "Білорусь",
    BG: "Болгарія",
    BO: "Болівія",
    BA: "Боснія і Герцеговина",
    BW: "Ботсвана",
    BR: "Бразилія",
    IO: "Британська Територія в Індійському Океані",
    VG: "Британські Віргінські Острови",
    BN: "Бруней Даруссалам",
    BF: "Буркіна-Фасо",
    BI: "Бурунді",
    BT: "Бутан",
    VU: "Вануату",
    VA: "Ватикан",
    GB: "Великобританія",
    VE: "Венесуела",
    VI: "Віргінські Острови (США)",
    WF: "Волліс і Футуна",
    VN: "В'єтнам",
    UM: "Зовнішні малі острови (США)",
    GA: "Габон",
    HT: "Гаїті",
    GY: "Гаяна",
    GM: "Гамбія",
    GH: "Гана",
    GP: "Гваделупа",
    GT: "Гватемала",
    GF: "Гвіана",
    GN: "Гвінея",
    GW: "Гвінея-Бісау",
    GG: "Гернсі",
    GI: "Гібралтар",
    HN: "Гондурас",
    HK: "Гонконг",
    GD: "Гренада",
    GR: "Греція",
    GE: "Грузія",
    GU: "Гуам",
    GL: "Ґренландія",
    DK: "Данія",
    JE: "Джерсі",
    DJ: "Джибуті",
    DM: "Домініка",
    DO: "Домініканська Республіка",
    CD: "Демократична Республіка Конго",
    EC: "Еквадор",
    GQ: "Екваторіальна Гвінея",
    ER: "Еритрея",
    EE: "Естонія",
    ET: "Ефіопія",
    EG: "Єгипет",
    YE: "Ємен",
    ZM: "Замбія",
    ZW: "Зімбабве",
    IL: "Ізраїль",
    IN: "Індія",
    ID: "Індонезія",
    IQ: "Ірак",
    IR: "Іран",
    IE: "Ірландія",
    IS: "Ісландія",
    ES: "Іспанія",
    IT: "Італія",
    JO: "Йорданія",
    CV: "Кабо-Верде",
    KZ: "Казахстан",
    KY: "Кайманові Острови",
    KH: "Камбоджа",
    CM: "Камерун",
    CA: "Канада",
    BQ: "Карибські Нідерланди",
    QA: "Катар",
    KE: "Кенія",
    CY: "Кіпр",
    KI: "Кірибаті",
    KG: "Киргизстан",
    TW: "Республіка Китай",
    KP: "КНДР (Корейська Народно-Демократична Республіка)",
    CN: "КНР (Китайська Народна Республіка)",
    CC: "Кокосові острови",
    CO: "Колумбія",
    KM: "Коморські Острови",
    XK: "Косово",
    CR: "Коста-Рика",
    CI: "Кот-д'Івуар",
    CU: "Куба",
    KW: "Кувейт",
    CW: "Кюрасао",
    LA: "Лаос",
    LV: "Латвія",
    LS: "Лесото",
    LR: "Ліберія",
    LB: "Ліван",
    LY: "Лівія",
    LT: "Литва",
    LI: "Ліхтенштейн",
    LU: "Люксембург",
    MU: "Маврикій",
    MR: "Мавританія",
    MG: "Мадагаскар",
    YT: "Майотта",
    MK: "Македонія",
    MW: "Малаві",
    MY: "Малайзія",
    ML: "Малі",
    MV: "Мальдівы",
    MT: "Мальта",
    MA: "Марокко",
    MQ: "Мартиніка",
    MH: "Маршаллові Острови",
    MX: "Мексика",
    FM: "Мікронезія",
    MZ: "Мозамбік",
    MD: "Молдова",
    MC: "Монако",
    MN: "Монголія",
    MS: "Монтсеррат",
    MM: "М'янма",
    NA: "Намібія",
    NR: "Науру",
    NP: "Непал",
    NE: "Нігер",
    NG: "Нігерія",
    NL: "Нідерланди",
    NI: "Нікарагуа",
    DE: "Німеччина",
    NU: "Ніуе",
    NZ: "Нова Зеландія",
    NC: "Нова Каледонія",
    NO: "Норвегія",
    AE: "Об'єднані Арабські Емірати",
    OM: "Оман",
    BV: "Острів Буве",
    HM: "Острів Герд і острови Макдональд",
    IM: "Острів Мен",
    NF: "Острів Норфолк",
    CX: "Острів Різдва",
    CK: "Острови Кука",
    SH: "Острови Святої Єлени, Вознесіння і Тристан-да-Кунья",
    TC: "Острови Теркс і Кайкос",
    PK: "Пакистан",
    PW: "Палау",
    PS: "Палестинська держава",
    PA: "Панама",
    PG: "Папуа Нова Гвінея",
    ZA: "ПАР",
    PY: "Парагвай",
    PE: "Перу",
    GS: "Південна Джорджія та Південні Сандвічеві Острови",
    KR: "Південна Корея",
    SS: "Південний Судан",
    MP: "Північні Маріанські Острови",
    PN: "Піткерн",
    PL: "Польша",
    PT: "Португалія",
    PR: "Пуерто-Ріко",
    CG: "Республіка Конго",
    RE: "Реюньйон",
    RU: "Росія",
    RW: "Руанда",
    RO: "Румунія",
    EH: "САДР",
    SV: "Сальвадор",
    WS: "Самоа",
    SM: "Сан-Маріно",
    ST: "Сан-Томе і Принсіпі",
    SA: "Саудівська Аравія",
    SZ: "Свазіленд",
    SJ: "Свальбард і Ян-Маєн",
    SC: "Сейшельські Острови",
    BL: "Сен-Бартельмі",
    MF: "Сен-Мартен",
    PM: "Сен-П'єр і Мікелон",
    SN: "Сенегал",
    VC: "Сент-Вінсент і Гренадини",
    KN: "Сент-Кіттс і Невіс",
    LC: "Сент-Люсія",
    RS: "Сербія",
    SG: "Сінгапур",
    SX: "Сінт-Мартен",
    SY: "Сірія",
    SK: "Словаччина",
    SI: "Словенія",
    SB: "Соломонові Острови",
    SO: "Сомалі",
    SD: "Судан",
    SR: "Суринам",
    TL: "Східний Тимор",
    US: "США",
    SL: "Сьєрра-Леоне",
    TJ: "Таджикистан",
    TH: "Таїланд",
    TZ: "Танзанія",
    TG: "Того",
    TK: "Токелау",
    TO: "Тонга",
    TT: "Тринідад і Тобаго",
    TV: "Тувалу",
    TN: "Туніс",
    TM: "Туркменістан",
    TR: "Турція",
    UG: "Уганда",
    HU: "Угорщина",
    UZ: "Узбекистан",
    UA: "Україна",
    UY: "Уругвай",
    FO: "Фарерські острови",
    FJ: "Фіджі",
    PH: "Філіппіни",
    FI: "Фінляндія",
    FK: "Фолклендські Острови",
    FR: "Франція",
    PF: "Французька Полінезія",
    TF: "Французькі Південні і Антарктичні Території",
    HR: "Хорватія",
    CF: "Центральноафриканська Республіка",
    TD: "Чад",
    ME: "Чорногорія",
    CZ: "Чехія",
    CL: "Чілі",
    CH: "Швейцарія",
    SE: "Швеція",
    LK: "Шрі-Ланка",
    JM: "Ямайка",
    JP: "Японі",
};

function from$2(country) {
    return names$1[country] || from$2(Alpha2.from(country));
}
function parse$2(country) {
    const result = Object.entries(names$1).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names$1 = {
    AD: "Andorra",
    AE: "Birlashgan Arab Amirliklari",
    AF: "Afgʻoniston",
    AG: "Antigua va Barbuda",
    AI: "Angilya",
    AL: "Albaniya",
    AM: "Armaniston",
    AO: "Angola",
    AQ: "Antarktida",
    AR: "Argentina",
    AS: "Amerika Samoasi",
    AT: "Avstriya",
    AU: "Avstraliya",
    AW: "Aruba",
    AX: "Aland orollari",
    AZ: "Ozarbayjon",
    BA: "Bosniya va Gertsegovina",
    BB: "Barbados",
    BD: "Bangladesh",
    BE: "Belgiya",
    BF: "Burkina-Faso",
    BG: "Bolgariya",
    BH: "Bahrayn",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Sen-Bartelemi",
    BM: "Bermuda orollari",
    BN: "Bruney",
    BO: "Boliviya",
    BQ: "Boneyr, Sint-Estatius va Saba",
    BR: "Braziliya",
    BS: "Bagama orollari",
    BT: "Butan",
    BV: "Buve oroli",
    BW: "Botsvana",
    BY: "Belarus",
    BZ: "Beliz",
    CA: "Kanada",
    CC: "Kokos (Kiling) orollari",
    CD: "Kongo – Kinshasa",
    CF: "Markaziy Afrika Respublikasi",
    CG: "Kongo – Brazzavil",
    CH: "Shveytsariya",
    CI: "Kot-d’Ivuar",
    CK: "Kuk orollari",
    CL: "Chili",
    CM: "Kamerun",
    CN: "Xitoy",
    CO: "Kolumbiya",
    CR: "Kosta-Rika",
    CU: "Kuba",
    CV: "Kabo-Verde",
    CW: "Kyurasao",
    CX: "Rojdestvo oroli",
    CY: "Kipr",
    CZ: "Chexiya",
    DE: "Germaniya",
    DJ: "Jibuti",
    DK: "Daniya",
    DM: "Dominika",
    DO: "Dominikan Respublikasi",
    DZ: "Jazoir",
    EC: "Ekvador",
    EE: "Estoniya",
    EG: "Misr",
    EH: "G‘arbiy Sahroi Kabir",
    ER: "Eritreya",
    ES: "Ispaniya",
    ET: "Efiopiya",
    FI: "Finlandiya",
    FJ: "Fiji",
    FK: "Folklend orollari",
    FM: "Mikroneziya",
    FO: "Farer orollari",
    FR: "Fransiya",
    GA: "Gabon",
    GB: "Buyuk Britaniya",
    GD: "Grenada",
    GE: "Gruziya",
    GF: "Fransuz Gvianasi",
    GG: "Gernsi",
    GH: "Gana",
    GI: "Gibraltar",
    GL: "Grenlandiya",
    GM: "Gambiya",
    GN: "Gvineya",
    GP: "Gvadelupe",
    GQ: "Ekvatorial Gvineya",
    GR: "Gretsiya",
    GS: "Janubiy Georgiya va Janubiy Sendvich orollari",
    GT: "Gvatemala",
    GU: "Guam",
    GW: "Gvineya-Bisau",
    GY: "Gayana",
    HK: "Gonkong (Xitoy MMH)",
    HM: "Xerd va Makdonald orollari",
    HN: "Gonduras",
    HR: "Xorvatiya",
    HT: "Gaiti",
    HU: "Vengriya",
    ID: "Indoneziya",
    IE: "Irlandiya",
    IL: "Isroil",
    IM: "Men oroli",
    IN: "Hindiston",
    IO: "Britaniyaning Hind okeanidagi hududi",
    IQ: "Iroq",
    IR: "Eron",
    IS: "Islandiya",
    IT: "Italiya",
    JE: "Jersi",
    JM: "Yamayka",
    JO: "Iordaniya",
    JP: "Yaponiya",
    KE: "Keniya",
    KG: "Qirgʻiziston",
    KH: "Kambodja",
    KI: "Kiribati",
    KM: "Komor orollari",
    KN: "Sent-Kits va Nevis",
    KP: "Shimoliy Koreya",
    KR: "Janubiy Koreya",
    KW: "Quvayt",
    KY: "Kayman orollari",
    KZ: "Qozogʻiston",
    LA: "Laos",
    LB: "Livan",
    LC: "Sent-Lyusiya",
    LI: "Lixtenshteyn",
    LK: "Shri-Lanka",
    LR: "Liberiya",
    LS: "Lesoto",
    LT: "Litva",
    LU: "Lyuksemburg",
    LV: "Latviya",
    LY: "Liviya",
    MA: "Marokash",
    MC: "Monako",
    MD: "Moldova",
    ME: "Chernogoriya",
    MF: "Sent-Martin",
    MG: "Madagaskar",
    MH: "Marshall orollari",
    MK: "Makedoniya",
    ML: "Mali",
    MM: "Myanma (Birma)",
    MN: "Mongoliya",
    MO: "Makao (Xitoy MMH)",
    MP: "Shimoliy Mariana orollari",
    MQ: "Martinika",
    MR: "Mavritaniya",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mavrikiy",
    MV: "Maldiv orollari",
    MW: "Malavi",
    MX: "Meksika",
    MY: "Malayziya",
    MZ: "Mozambik",
    NA: "Namibiya",
    NC: "Yangi Kaledoniya",
    NE: "Niger",
    NF: "Norfolk oroli",
    NG: "Nigeriya",
    NI: "Nikaragua",
    NL: "Niderlandiya",
    NO: "Norvegiya",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "Yangi Zelandiya",
    OM: "Ummon",
    PA: "Panama",
    PE: "Peru",
    PF: "Fransuz Polineziyasi",
    PG: "Papua – Yangi Gvineya",
    PH: "Filippin",
    PK: "Pokiston",
    PL: "Polsha",
    PM: "Sen-Pyer va Mikelon",
    PN: "Pitkern orollari",
    PR: "Puerto-Riko",
    PS: "Falastin hududi",
    PT: "Portugaliya",
    PW: "Palau",
    PY: "Paragvay",
    QA: "Qatar",
    RE: "Reyunion",
    RO: "Ruminiya",
    RS: "Serbiya",
    RU: "Rossiya",
    RW: "Ruanda",
    SA: "Saudiya Arabistoni",
    SB: "Solomon orollari",
    SC: "Seyshel orollari",
    SD: "Sudan",
    SE: "Shvetsiya",
    SG: "Singapur",
    SH: "Muqaddas Yelena oroli",
    SI: "Sloveniya",
    SJ: "Svalbard va Yan-Mayen",
    SK: "Slovakiya",
    SL: "Syerra-Leone",
    SM: "San-Marino",
    SN: "Senegal",
    SO: "Somali",
    SR: "Surinam",
    SS: "Janubiy Sudan",
    ST: "San-Tome va Prinsipi",
    SV: "Salvador",
    SX: "Sint-Marten",
    SY: "Suriya",
    SZ: "Svazilend",
    TC: "Turks va Kaykos orollari",
    TD: "Chad",
    TF: "Fransuz Janubiy hududlari",
    TG: "Togo",
    TH: "Tailand",
    TJ: "Tojikiston",
    TK: "Tokelau",
    TL: "Timor-Leste",
    TM: "Turkmaniston",
    TN: "Tunis",
    TO: "Tonga",
    TR: "Turkiya",
    TT: "Trinidad va Tobago",
    TV: "Tuvalu",
    TW: "Tayvan",
    TZ: "Tanzaniya",
    UA: "Ukraina",
    UG: "Uganda",
    UM: "AQSH yondosh orollari",
    US: "Amerika Qo‘shma Shtatlari",
    UY: "Urugvay",
    UZ: "Oʻzbekiston",
    VA: "Vatikan",
    VC: "Sent-Vinsent va Grenadin",
    VE: "Venesuela",
    VG: "Britaniya Virgin orollari",
    VI: "AQSH Virgin orollari",
    VN: "Vyetnam",
    VU: "Vanuatu",
    WF: "Uollis va Futuna",
    WS: "Samoa",
    XK: "Kosovo",
    YE: "Yaman",
    YT: "Mayotta",
    ZA: "Janubiy Afrika Respublikasi",
    ZM: "Zambiya",
    ZW: "Zimbabv",
};

function from$1(country) {
    return names[country] || from$1(Alpha2.from(country));
}
function parse$1(country) {
    const result = Object.entries(names).find(entry => (entry[1] && entry[1].toLowerCase()) == country.toLowerCase());
    return result && result[0];
}
const names = {
    AD: "安道尔",
    AE: "阿联酋",
    AF: "阿富汗",
    AG: "安地卡及巴布达",
    AI: "安圭拉",
    AL: "阿尔巴尼亚",
    AM: "亚美尼亚",
    AO: "安哥拉",
    AQ: "南极洲",
    AR: "阿根廷",
    AS: "美属萨摩亚",
    AT: "奥地利",
    AU: "澳大利亚",
    AW: "阿鲁巴",
    AX: "奥兰",
    AZ: "阿塞拜疆",
    BA: "波斯尼亚和黑塞哥维那",
    BB: "巴巴多斯",
    BD: "孟加拉国",
    BE: "比利时",
    BF: "布吉纳法索",
    BG: "保加利亚",
    BH: "巴林",
    BI: "布隆迪",
    BJ: "贝宁",
    BL: "圣巴泰勒米",
    BM: "百慕大",
    BN: "文莱",
    BO: "玻利维亚",
    BQ: "加勒比荷兰",
    BR: "巴西",
    BS: "巴哈马",
    BT: "不丹",
    BV: "布韦岛",
    BW: "博茨瓦纳",
    BY: "白俄罗斯",
    BZ: "伯利兹",
    CA: "加拿大",
    CC: "科科斯（基林）群岛",
    CD: "刚果（金)",
    CF: "中非",
    CG: "刚果（布)",
    CH: "瑞士",
    CI: "科特迪瓦",
    CK: "库克群岛",
    CL: "智利",
    CM: "喀麦隆",
    CN: "中国",
    CO: "哥伦比亚",
    CR: "哥斯达黎加",
    CU: "古巴",
    CV: "佛得角",
    CW: "库拉索",
    CX: "圣诞岛",
    CY: "赛普勒斯",
    CZ: "捷克",
    DE: "德国",
    DJ: "吉布提",
    DK: "丹麦",
    DM: "多米尼克",
    DO: "多米尼加",
    DZ: "阿尔及利亚",
    EC: "厄瓜多尔",
    EE: "爱沙尼亚",
    EG: "埃及",
    EH: "阿拉伯撒哈拉民主共和国",
    ER: "厄立特里亚",
    ES: "西班牙",
    ET: "衣索比亚",
    FI: "芬兰",
    FJ: "斐济",
    FK: "福克兰群岛",
    FM: "密克罗尼西亚联邦",
    FO: "法罗群岛",
    FR: "法国",
    GA: "加彭",
    GB: "英国",
    GD: "格瑞那达",
    GE: "格鲁吉亚",
    GF: "法属圭亚那",
    GG: "根西",
    GH: "加纳",
    GI: "直布罗陀",
    GL: "格陵兰",
    GM: "冈比亚",
    GN: "几内亚",
    GP: "瓜德罗普",
    GQ: "赤道几内亚",
    GR: "希腊",
    GS: "南乔治亚和南桑威奇群岛",
    GT: "危地马拉",
    GU: "关岛",
    GW: "几内亚比绍",
    GY: "圭亚那",
    HK: "香港",
    HM: "赫德岛和麦克唐纳群岛",
    HN: "宏都拉斯",
    HR: "克罗地亚",
    HT: "海地",
    HU: "匈牙利",
    ID: "印尼",
    IE: "爱尔兰",
    IL: "以色列",
    IM: "马恩岛",
    IN: "印度",
    IO: "英属印度洋领地",
    IQ: "伊拉克",
    IR: "伊朗",
    IS: "冰岛",
    IT: "意大利",
    JE: "泽西",
    JM: "牙买加",
    JO: "约旦",
    JP: "日本",
    KE: "肯尼亚",
    KG: "吉尔吉斯斯坦",
    KH: "柬埔寨",
    KI: "基里巴斯",
    KM: "科摩罗",
    KN: "圣基茨和尼维斯",
    KP: "朝鲜",
    KR: "韩国",
    KW: "科威特",
    KY: "开曼群岛",
    KZ: "哈萨克斯坦",
    LA: "老挝",
    LB: "黎巴嫩",
    LC: "圣卢西亚",
    LI: "列支敦斯登",
    LK: "斯里兰卡",
    LR: "利比里亚",
    LS: "赖索托",
    LT: "立陶宛",
    LU: "卢森堡",
    LV: "拉脱维亚",
    LY: "利比亚",
    MA: "摩洛哥",
    MC: "摩纳哥",
    MD: "摩尔多瓦",
    ME: "蒙特内哥罗",
    MF: "法属圣马丁",
    MG: "马达加斯加",
    MH: "马绍尔群岛",
    MK: "马其顿",
    ML: "马里",
    MM: "缅甸",
    MN: "蒙古",
    MO: "澳门",
    MP: "北马里亚纳群岛",
    MQ: "马提尼克",
    MR: "毛里塔尼亚",
    MS: "蒙特塞拉特",
    MT: "马尔他",
    MU: "模里西斯",
    MV: "马尔地夫",
    MW: "马拉维",
    MX: "墨西哥",
    MY: "马来西亚",
    MZ: "莫桑比克",
    NA: "纳米比亚",
    NC: "新喀里多尼亚",
    NE: "尼日尔",
    NF: "诺福克岛",
    NG: "奈及利亚",
    NI: "尼加拉瓜",
    NL: "荷兰",
    NO: "挪威",
    NP: "尼泊尔",
    NR: "瑙鲁",
    NU: "纽埃",
    NZ: "新西兰",
    OM: "阿曼",
    PA: "巴拿马",
    PE: "秘鲁",
    PF: "法属玻里尼西亚",
    PG: "巴布亚新几内亚",
    PH: "菲律宾",
    PK: "巴基斯坦",
    PL: "波兰",
    PM: "圣皮埃尔和密克隆",
    PN: "皮特凯恩群岛",
    PR: "波多黎各",
    PS: "巴勒斯坦",
    PT: "葡萄牙",
    PW: "帛琉",
    PY: "巴拉圭",
    QA: "卡塔尔",
    RE: "留尼汪",
    RO: "罗马尼亚",
    RS: "塞尔维亚",
    RU: "俄罗斯",
    RW: "卢旺达",
    SA: "沙乌地阿拉伯",
    SB: "所罗门群岛",
    SC: "塞舌尔",
    SD: "苏丹",
    SE: "瑞典",
    SG: "新加坡",
    SH: "圣赫勒拿",
    SI: "斯洛维尼亚",
    SJ: "斯瓦尔巴群岛和扬马延岛",
    SK: "斯洛伐克",
    SL: "塞拉利昂",
    SM: "圣马力诺",
    SN: "塞内加尔",
    SO: "索马利亚",
    SR: "苏里南",
    SS: "南苏丹",
    ST: "圣多美和普林西比",
    SV: "萨尔瓦多",
    SX: "荷属圣马丁",
    SY: "叙利亚",
    SZ: "斯威士兰",
    TC: "特克斯和凯科斯群岛",
    TD: "乍得",
    TF: "法属南部领地",
    TG: "多哥",
    TH: "泰国",
    TJ: "塔吉克斯坦",
    TK: "托克劳",
    TL: "东帝汶",
    TM: "土库曼斯坦",
    TN: "突尼西亚",
    TO: "汤加",
    TR: "土耳其",
    TT: "千里达及托巴哥",
    TV: "图瓦卢",
    TW: "臺湾",
    TZ: "坦桑尼亚",
    UA: "乌克兰",
    UG: "乌干达",
    UM: "美国本土外小岛屿",
    US: "美国",
    UY: "乌拉圭",
    UZ: "乌兹别克斯坦",
    VA: "梵蒂冈",
    VC: "圣文森及格瑞那丁",
    VE: "委内瑞拉",
    VG: "英属维尔京群岛",
    VI: "美属维尔京群岛",
    VN: "越南",
    VU: "瓦努阿图",
    WF: "瓦利斯和富图纳",
    WS: "萨摩亚",
    YE: "叶门",
    YT: "马约特",
    ZA: "南非",
    ZM: "尚比亚",
    ZW: "辛巴威",
    XK: "科索",
};

function parse(country) {
    return (parse$K(country) ||
        parse$J(country) ||
        parse$I(country) ||
        parse$H(country) ||
        parse$G(country) ||
        parse$F(country) ||
        parse$E(country) ||
        parse$D(country) ||
        parse$C(country) ||
        parse$B(country) ||
        parse$A(country) ||
        parse$z(country) ||
        parse$y(country) ||
        parse$x(country) ||
        parse$w(country) ||
        parse$v(country) ||
        parse$u(country) ||
        parse$t(country) ||
        parse$s(country) ||
        parse$r(country) ||
        parse$q(country) ||
        parse$p(country) ||
        parse$o(country) ||
        parse$n(country) ||
        parse$m(country) ||
        parse$l(country) ||
        parse$k(country) ||
        parse$j(country) ||
        parse$i(country) ||
        parse$h(country) ||
        parse$g(country) ||
        parse$f(country) ||
        parse$e(country) ||
        parse$d(country) ||
        parse$c(country) ||
        parse$b(country) ||
        parse$a(country) ||
        parse$9(country) ||
        parse$8(country) ||
        parse$7(country) ||
        parse$6(country) ||
        parse$5(country) ||
        parse$4(country) ||
        parse$3(country) ||
        parse$2(country) ||
        parse$1(country));
}
function from(language, country) {
    let result;
    switch (language) {
        case "ar":
            result = from$K(country);
            break;
        case "az":
            result = from$J(country);
            break;
        case "be":
            result = from$I(country);
            break;
        case "bg":
            result = from$H(country);
            break;
        case "bs":
            result = from$G(country);
            break;
        case "ca":
            result = from$F(country);
            break;
        case "cs":
            result = from$E(country);
            break;
        case "da":
            result = from$D(country);
            break;
        case "de":
            result = from$C(country);
            break;
        case "el":
            result = from$B(country);
            break;
        default:
        case "en":
            result = from$A(country);
            break;
        case "es":
            result = from$z(country);
            break;
        case "et":
            result = from$y(country);
            break;
        case "fa":
            result = from$x(country);
            break;
        case "fi":
            result = from$w(country);
            break;
        case "fr":
            result = from$v(country);
            break;
        case "he":
            result = from$u(country);
            break;
        case "hr":
            result = from$t(country);
            break;
        case "hu":
            result = from$s(country);
            break;
        case "hy":
            result = from$r(country);
            break;
        case "id":
            result = from$q(country);
            break;
        case "it":
            result = from$p(country);
            break;
        case "ja":
            result = from$o(country);
            break;
        case "ka":
            result = from$n(country);
            break;
        case "kk":
            result = from$m(country);
            break;
        case "ko":
            result = from$l(country);
            break;
        case "ky":
            result = from$k(country);
            break;
        case "lt":
            result = from$j(country);
            break;
        case "lv":
            result = from$i(country);
            break;
        case "mk":
            result = from$h(country);
            break;
        case "mn":
            result = from$g(country);
            break;
        case "nb":
            result = from$f(country);
            break;
        case "nl":
            result = from$e(country);
            break;
        case "nn":
            result = from$d(country);
            break;
        case "pl":
            result = from$c(country);
            break;
        case "pt":
            result = from$b(country);
            break;
        case "ro":
            result = from$a(country);
            break;
        case "ru":
            result = from$9(country);
            break;
        case "sk":
            result = from$8(country);
            break;
        case "sl":
            result = from$7(country);
            break;
        case "sr":
            result = from$6(country);
            break;
        case "sv":
            result = from$5(country);
            break;
        case "tr":
            result = from$4(country);
            break;
        case "uk":
            result = from$3(country);
            break;
        case "uz":
            result = from$2(country);
            break;
        case "zh":
            result = from$1(country);
            break;
    }
    return result;
}

var Numeric;
(function (Numeric) {
    function is(value) {
        return (typeof value == "number" &&
            value >= 0 &&
            value <= 999 &&
            Number.isInteger(value) &&
            (value == 4 ||
                value == 248 ||
                value == 8 ||
                value == 12 ||
                value == 16 ||
                value == 20 ||
                value == 24 ||
                value == 660 ||
                value == 10 ||
                value == 28 ||
                value == 32 ||
                value == 51 ||
                value == 533 ||
                value == 36 ||
                value == 40 ||
                value == 31 ||
                value == 44 ||
                value == 48 ||
                value == 50 ||
                value == 52 ||
                value == 112 ||
                value == 56 ||
                value == 84 ||
                value == 204 ||
                value == 60 ||
                value == 64 ||
                value == 68 ||
                value == 535 ||
                value == 70 ||
                value == 72 ||
                value == 74 ||
                value == 76 ||
                value == 86 ||
                value == 96 ||
                value == 100 ||
                value == 854 ||
                value == 108 ||
                value == 132 ||
                value == 116 ||
                value == 120 ||
                value == 124 ||
                value == 136 ||
                value == 140 ||
                value == 148 ||
                value == 152 ||
                value == 156 ||
                value == 162 ||
                value == 166 ||
                value == 170 ||
                value == 174 ||
                value == 178 ||
                value == 180 ||
                value == 184 ||
                value == 188 ||
                value == 384 ||
                value == 191 ||
                value == 192 ||
                value == 531 ||
                value == 196 ||
                value == 203 ||
                value == 208 ||
                value == 262 ||
                value == 212 ||
                value == 214 ||
                value == 218 ||
                value == 818 ||
                value == 222 ||
                value == 226 ||
                value == 232 ||
                value == 233 ||
                value == 748 ||
                value == 231 ||
                value == 238 ||
                value == 234 ||
                value == 242 ||
                value == 246 ||
                value == 250 ||
                value == 254 ||
                value == 258 ||
                value == 260 ||
                value == 266 ||
                value == 270 ||
                value == 268 ||
                value == 276 ||
                value == 288 ||
                value == 292 ||
                value == 300 ||
                value == 304 ||
                value == 308 ||
                value == 312 ||
                value == 316 ||
                value == 320 ||
                value == 831 ||
                value == 324 ||
                value == 624 ||
                value == 328 ||
                value == 332 ||
                value == 334 ||
                value == 336 ||
                value == 340 ||
                value == 344 ||
                value == 348 ||
                value == 352 ||
                value == 356 ||
                value == 360 ||
                value == 364 ||
                value == 368 ||
                value == 372 ||
                value == 833 ||
                value == 376 ||
                value == 380 ||
                value == 388 ||
                value == 392 ||
                value == 832 ||
                value == 400 ||
                value == 398 ||
                value == 404 ||
                value == 296 ||
                value == 408 ||
                value == 410 ||
                value == 414 ||
                value == 417 ||
                value == 418 ||
                value == 428 ||
                value == 422 ||
                value == 426 ||
                value == 430 ||
                value == 434 ||
                value == 438 ||
                value == 440 ||
                value == 442 ||
                value == 446 ||
                value == 450 ||
                value == 454 ||
                value == 458 ||
                value == 462 ||
                value == 466 ||
                value == 470 ||
                value == 584 ||
                value == 474 ||
                value == 478 ||
                value == 480 ||
                value == 175 ||
                value == 484 ||
                value == 583 ||
                value == 498 ||
                value == 492 ||
                value == 496 ||
                value == 499 ||
                value == 500 ||
                value == 504 ||
                value == 508 ||
                value == 104 ||
                value == 516 ||
                value == 520 ||
                value == 524 ||
                value == 528 ||
                value == 540 ||
                value == 554 ||
                value == 558 ||
                value == 562 ||
                value == 566 ||
                value == 570 ||
                value == 574 ||
                value == 807 ||
                value == 580 ||
                value == 578 ||
                value == 512 ||
                value == 586 ||
                value == 585 ||
                value == 275 ||
                value == 591 ||
                value == 598 ||
                value == 600 ||
                value == 604 ||
                value == 608 ||
                value == 612 ||
                value == 616 ||
                value == 620 ||
                value == 630 ||
                value == 634 ||
                value == 638 ||
                value == 642 ||
                value == 643 ||
                value == 646 ||
                value == 652 ||
                value == 654 ||
                value == 659 ||
                value == 662 ||
                value == 663 ||
                value == 666 ||
                value == 670 ||
                value == 882 ||
                value == 674 ||
                value == 678 ||
                value == 682 ||
                value == 686 ||
                value == 688 ||
                value == 690 ||
                value == 694 ||
                value == 702 ||
                value == 534 ||
                value == 703 ||
                value == 705 ||
                value == 90 ||
                value == 706 ||
                value == 710 ||
                value == 239 ||
                value == 728 ||
                value == 724 ||
                value == 144 ||
                value == 729 ||
                value == 740 ||
                value == 744 ||
                value == 752 ||
                value == 756 ||
                value == 760 ||
                value == 158 ||
                value == 762 ||
                value == 834 ||
                value == 764 ||
                value == 626 ||
                value == 768 ||
                value == 772 ||
                value == 776 ||
                value == 780 ||
                value == 788 ||
                value == 792 ||
                value == 795 ||
                value == 796 ||
                value == 798 ||
                value == 800 ||
                value == 804 ||
                value == 784 ||
                value == 826 ||
                value == 840 ||
                value == 581 ||
                value == 858 ||
                value == 860 ||
                value == 548 ||
                value == 862 ||
                value == 704 ||
                value == 92 ||
                value == 850 ||
                value == 876 ||
                value == 732 ||
                value == 887 ||
                value == 894 ||
                value == 716 ||
                value == 280));
    }
    Numeric.is = is;
    function from(country) {
        return country.length == 3 ? from(Alpha2.from(country)) : alpha2ToNumeric[country];
    }
    Numeric.from = from;
})(Numeric || (Numeric = {}));
const alpha2ToNumeric = {
    AF: 4,
    AX: 248,
    AL: 8,
    DZ: 12,
    AS: 16,
    AD: 20,
    AO: 24,
    AI: 660,
    AQ: 10,
    AG: 28,
    AR: 32,
    AM: 51,
    AW: 533,
    AU: 36,
    AT: 40,
    AZ: 31,
    BS: 44,
    BH: 48,
    BD: 50,
    BB: 52,
    BY: 112,
    BE: 56,
    BZ: 84,
    BJ: 204,
    BM: 60,
    BT: 64,
    BO: 68,
    BQ: 535,
    BA: 70,
    BW: 72,
    BV: 74,
    BR: 76,
    IO: 86,
    BN: 96,
    BG: 100,
    BF: 854,
    BI: 108,
    CV: 132,
    KH: 116,
    CM: 120,
    CA: 124,
    KY: 136,
    CF: 140,
    TD: 148,
    CL: 152,
    CN: 156,
    CX: 162,
    CC: 166,
    CO: 170,
    KM: 174,
    CG: 178,
    CD: 180,
    CK: 184,
    CR: 188,
    CI: 384,
    HR: 191,
    CU: 192,
    CW: 531,
    CY: 196,
    CZ: 203,
    DK: 208,
    DJ: 262,
    DM: 212,
    DO: 214,
    EC: 218,
    EG: 818,
    SV: 222,
    GQ: 226,
    ER: 232,
    EE: 233,
    SZ: 748,
    ET: 231,
    FK: 238,
    FO: 234,
    FJ: 242,
    FI: 246,
    FR: 250,
    GF: 254,
    PF: 258,
    TF: 260,
    GA: 266,
    GM: 270,
    GE: 268,
    DE: 276,
    GH: 288,
    GI: 292,
    GR: 300,
    GL: 304,
    GD: 308,
    GP: 312,
    GU: 316,
    GT: 320,
    GG: 831,
    GN: 324,
    GW: 624,
    GY: 328,
    HT: 332,
    HM: 334,
    VA: 336,
    HN: 340,
    HK: 344,
    HU: 348,
    IS: 352,
    IN: 356,
    ID: 360,
    IR: 364,
    IQ: 368,
    IE: 372,
    IM: 833,
    IL: 376,
    IT: 380,
    JM: 388,
    JP: 392,
    JE: 832,
    JO: 400,
    KZ: 398,
    KE: 404,
    KI: 296,
    KP: 408,
    KR: 410,
    KW: 414,
    KG: 417,
    LA: 418,
    LV: 428,
    LB: 422,
    LS: 426,
    LR: 430,
    LY: 434,
    LI: 438,
    LT: 440,
    LU: 442,
    MO: 446,
    MG: 450,
    MW: 454,
    MY: 458,
    MV: 462,
    ML: 466,
    MT: 470,
    MH: 584,
    MQ: 474,
    MR: 478,
    MU: 480,
    YT: 175,
    MX: 484,
    FM: 583,
    MD: 498,
    MC: 492,
    MN: 496,
    ME: 499,
    MS: 500,
    MA: 504,
    MZ: 508,
    MM: 104,
    NA: 516,
    NR: 520,
    NP: 524,
    NL: 528,
    NC: 540,
    NZ: 554,
    NI: 558,
    NE: 562,
    NG: 566,
    NU: 570,
    NF: 574,
    MK: 807,
    MP: 580,
    NO: 578,
    OM: 512,
    PK: 586,
    PW: 585,
    PS: 275,
    PA: 591,
    PG: 598,
    PY: 600,
    PE: 604,
    PH: 608,
    PN: 612,
    PL: 616,
    PT: 620,
    PR: 630,
    QA: 634,
    RE: 638,
    RO: 642,
    RU: 643,
    RW: 646,
    BL: 652,
    SH: 654,
    KN: 659,
    LC: 662,
    MF: 663,
    PM: 666,
    VC: 670,
    WS: 882,
    SM: 674,
    ST: 678,
    SA: 682,
    SN: 686,
    RS: 688,
    SC: 690,
    SL: 694,
    SG: 702,
    SX: 534,
    SK: 703,
    SI: 705,
    SB: 90,
    SO: 706,
    ZA: 710,
    GS: 239,
    SS: 728,
    ES: 724,
    LK: 144,
    SD: 729,
    SR: 740,
    SJ: 744,
    SE: 752,
    CH: 756,
    SY: 760,
    TW: 158,
    TJ: 762,
    TZ: 834,
    TH: 764,
    TL: 626,
    TG: 768,
    TK: 772,
    TO: 776,
    TT: 780,
    TN: 788,
    TR: 792,
    TM: 795,
    TC: 796,
    TV: 798,
    UG: 800,
    UA: 804,
    AE: 784,
    GB: 826,
    US: 840,
    UM: 581,
    UY: 858,
    UZ: 860,
    VU: 548,
    VE: 862,
    VN: 704,
    VG: 92,
    VI: 850,
    WF: 876,
    EH: 732,
    YE: 887,
    ZM: 894,
    ZW: 716,
};

const currencies = [
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BOV",
    "BRL",
    "BSD",
    "BTN",
    "BWP",
    "BYN",
    "BZD",
    "CAD",
    "CDF",
    "CHE",
    "CHF",
    "CHW",
    "CLF",
    "CLP",
    "CNY",
    "COP",
    "COU",
    "CRC",
    "CUC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "GBP",
    "GEL",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KMF",
    "KPW",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MXV",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLL",
    "SOS",
    "SRD",
    "SSP",
    "STN",
    "SVC",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "USD",
    "USN",
    "UYI",
    "UYU",
    "UYW",
    "UZS",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XAG",
    "XAU",
    "XBA",
    "XBB",
    "XBC",
    "XBD",
    "XCD",
    "XDR",
    "XOF",
    "XPD",
    "XPF",
    "XPT",
    "XSU",
    "XTS",
    "XUA",
    "XXX",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL",
];
var Currency;
(function (Currency) {
    Currency.types = [...currencies];
    function is(currency) {
        return Currency.types.includes(currency);
    }
    Currency.is = is;
    function from(currencyCode) {
        return {
            "784": "AED",
            "971": "AFN",
            "008": "ALL",
            "051": "AMD",
            "532": "ANG",
            "973": "AOA",
            "032": "ARS",
            "036": "AUD",
            "533": "AWG",
            "944": "AZN",
            "977": "BAM",
            "052": "BBD",
            "050": "BDT",
            "975": "BGN",
            "048": "BHD",
            "108": "BIF",
            "060": "BMD",
            "096": "BND",
            "068": "BOB",
            "984": "BOV",
            "986": "BRL",
            "044": "BSD",
            "064": "BTN",
            "072": "BWP",
            "933": "BYN",
            "084": "BZD",
            "124": "CAD",
            "976": "CDF",
            "947": "CHE",
            "756": "CHF",
            "948": "CHW",
            "990": "CLF",
            "152": "CLP",
            "156": "CNY",
            "170": "COP",
            "970": "COU",
            "188": "CRC",
            "931": "CUC",
            "192": "CUP",
            "132": "CVE",
            "203": "CZK",
            "262": "DJF",
            "208": "DKK",
            "214": "DOP",
            "012": "DZD",
            "818": "EGP",
            "232": "ERN",
            "230": "ETB",
            "978": "EUR",
            "242": "FJD",
            "238": "FKP",
            "826": "GBP",
            "981": "GEL",
            "936": "GHS",
            "292": "GIP",
            "270": "GMD",
            "324": "GNF",
            "320": "GTQ",
            "328": "GYD",
            "344": "HKD",
            "340": "HNL",
            "191": "HRK",
            "332": "HTG",
            "348": "HUF",
            "360": "IDR",
            "376": "ILS",
            "356": "INR",
            "368": "IQD",
            "364": "IRR",
            "352": "ISK",
            "388": "JMD",
            "400": "JOD",
            "392": "JPY",
            "404": "KES",
            "417": "KGS",
            "116": "KHR",
            "174": "KMF",
            "408": "KPW",
            "410": "KRW",
            "414": "KWD",
            "136": "KYD",
            "398": "KZT",
            "418": "LAK",
            "422": "LBP",
            "144": "LKR",
            "430": "LRD",
            "426": "LSL",
            "434": "LYD",
            "504": "MAD",
            "498": "MDL",
            "969": "MGA",
            "807": "MKD",
            "104": "MMK",
            "496": "MNT",
            "446": "MOP",
            "929": "MRU",
            "480": "MUR",
            "462": "MVR",
            "454": "MWK",
            "484": "MXN",
            "979": "MXV",
            "458": "MYR",
            "943": "MZN",
            "516": "NAD",
            "566": "NGN",
            "558": "NIO",
            "578": "NOK",
            "524": "NPR",
            "554": "NZD",
            "512": "OMR",
            "590": "PAB",
            "604": "PEN",
            "598": "PGK",
            "608": "PHP",
            "586": "PKR",
            "985": "PLN",
            "600": "PYG",
            "634": "QAR",
            "946": "RON",
            "941": "RSD",
            "643": "RUB",
            "646": "RWF",
            "682": "SAR",
            "090": "SBD",
            "690": "SCR",
            "938": "SDG",
            "752": "SEK",
            "702": "SGD",
            "654": "SHP",
            "694": "SLL",
            "706": "SOS",
            "968": "SRD",
            "728": "SSP",
            "930": "STN",
            "222": "SVC",
            "760": "SYP",
            "748": "SZL",
            "764": "THB",
            "972": "TJS",
            "934": "TMT",
            "788": "TND",
            "776": "TOP",
            "949": "TRY",
            "780": "TTD",
            "901": "TWD",
            "834": "TZS",
            "980": "UAH",
            "800": "UGX",
            "840": "USD",
            "997": "USN",
            "940": "UYI",
            "858": "UYU",
            "927": "UYW",
            "860": "UZS",
            "928": "VES",
            "704": "VND",
            "548": "VUV",
            "882": "WST",
            "950": "XAF",
            "961": "XAG",
            "959": "XAU",
            "955": "XBA",
            "956": "XBB",
            "957": "XBC",
            "958": "XBD",
            "951": "XCD",
            "960": "XDR",
            "952": "XOF",
            "964": "XPD",
            "953": "XPF",
            "962": "XPT",
            "994": "XSU",
            "963": "XTS",
            "965": "XUA",
            "999": "XXX",
            "886": "YER",
            "710": "ZAR",
            "967": "ZMW",
            "932": "ZWL",
        }[currencyCode];
    }
    Currency.from = from;
    function round(value, currency) {
        var _a, _b, _c, _d, _e;
        const factor = Math.pow(10, (_a = decimalDigits(currency)) !== null && _a !== void 0 ? _a : 2);
        const decimals = ((_d = (_c = (_b = value.toString().split(".")) === null || _b === void 0 ? void 0 : _b[1]) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) - 1;
        return (Math.round((value + (decimals <= ((_e = decimalDigits(currency)) !== null && _e !== void 0 ? _e : 2) + 5 ? 0 : Math.pow(10, -decimals))) * factor) /
            factor);
    }
    Currency.round = round;
    function add(currency, value1, value2) {
        return round(round(value1, currency) + round(value2, currency), currency);
    }
    Currency.add = add;
    function divide(currency, amount, denominator) {
        return round(round(amount, currency) / denominator, currency);
    }
    Currency.divide = divide;
    function multiply(currency, amount, multiplicand, outputCurrency) {
        return round(round(amount, currency) * multiplicand, outputCurrency !== null && outputCurrency !== void 0 ? outputCurrency : currency);
    }
    Currency.multiply = multiply;
    function subtract(currency, minuend, subtrahend) {
        return round(round(minuend, currency) - round(subtrahend, currency), currency);
    }
    Currency.subtract = subtract;
    function toMinor(amount, currency) {
        const decimals = Currency.decimalDigits(currency);
        return typeof decimals == "number" ? Math.round(amount * Math.pow(10, decimals)) : amount;
    }
    Currency.toMinor = toMinor;
    function fromMinor(amount, currency) {
        const decimals = Currency.decimalDigits(currency);
        return typeof decimals == "number" ? Currency.divide(currency, amount, Math.pow(10, decimals)) : amount;
    }
    Currency.fromMinor = fromMinor;
    function decimalDigits(currency) {
        return {
            AED: 2,
            AFN: 2,
            ALL: 2,
            AMD: 2,
            ANG: 2,
            AOA: 2,
            ARS: 2,
            AUD: 2,
            AWG: 2,
            AZN: 2,
            BAM: 2,
            BBD: 2,
            BDT: 2,
            BGN: 2,
            BHD: 3,
            BIF: 0,
            BMD: 2,
            BND: 2,
            BOB: 2,
            BOV: 2,
            BRL: 2,
            BSD: 2,
            BTN: 2,
            BWP: 2,
            BYN: 2,
            BZD: 2,
            CAD: 2,
            CDF: 2,
            CHE: 2,
            CHF: 2,
            CHW: 2,
            CLF: 4,
            CLP: 0,
            CNY: 2,
            COP: 2,
            COU: 2,
            CRC: 2,
            CUC: 2,
            CUP: 2,
            CVE: 2,
            CZK: 2,
            DJF: 0,
            DKK: 2,
            DOP: 2,
            DZD: 2,
            EGP: 2,
            ERN: 2,
            ETB: 2,
            EUR: 2,
            FJD: 2,
            FKP: 2,
            GBP: 2,
            GEL: 2,
            GHS: 2,
            GIP: 2,
            GMD: 2,
            GNF: 0,
            GTQ: 2,
            GYD: 2,
            HKD: 2,
            HNL: 2,
            HRK: 2,
            HTG: 2,
            HUF: 2,
            IDR: 2,
            ILS: 2,
            INR: 2,
            IQD: 3,
            IRR: 2,
            ISK: 0,
            JMD: 2,
            JOD: 3,
            JPY: 0,
            KES: 2,
            KGS: 2,
            KHR: 2,
            KMF: 0,
            KPW: 2,
            KRW: 0,
            KWD: 3,
            KYD: 2,
            KZT: 2,
            LAK: 2,
            LBP: 2,
            LKR: 2,
            LRD: 2,
            LSL: 2,
            LYD: 3,
            MAD: 2,
            MDL: 2,
            MGA: 2,
            MKD: 2,
            MMK: 2,
            MNT: 2,
            MOP: 2,
            MRU: 2,
            MUR: 2,
            MVR: 2,
            MWK: 2,
            MXN: 2,
            MXV: 2,
            MYR: 2,
            MZN: 2,
            NAD: 2,
            NGN: 2,
            NIO: 2,
            NOK: 2,
            NPR: 2,
            NZD: 2,
            OMR: 3,
            PAB: 2,
            PEN: 2,
            PGK: 2,
            PHP: 2,
            PKR: 2,
            PLN: 2,
            PYG: 0,
            QAR: 2,
            RON: 2,
            RSD: 2,
            RUB: 2,
            RWF: 0,
            SAR: 2,
            SBD: 2,
            SCR: 2,
            SDG: 2,
            SEK: 2,
            SGD: 2,
            SHP: 2,
            SLL: 2,
            SOS: 2,
            SRD: 2,
            SSP: 2,
            STN: 2,
            SVC: 2,
            SYP: 2,
            SZL: 2,
            THB: 2,
            TJS: 2,
            TMT: 2,
            TND: 3,
            TOP: 2,
            TRY: 2,
            TTD: 2,
            TWD: 2,
            TZS: 2,
            UAH: 2,
            UGX: 0,
            USD: 2,
            USN: 2,
            UYI: 0,
            UYU: 2,
            UYW: 4,
            UZS: 2,
            VES: 2,
            VND: 0,
            VUV: 0,
            WST: 2,
            XAF: 0,
            XAG: undefined,
            XAU: undefined,
            XBA: undefined,
            XBB: undefined,
            XBC: undefined,
            XBD: undefined,
            XCD: 2,
            XDR: undefined,
            XOF: 0,
            XPD: undefined,
            XPF: 0,
            XPT: undefined,
            XSU: undefined,
            XTS: undefined,
            XUA: undefined,
            XXX: undefined,
            YER: 2,
            ZAR: 2,
            ZMW: 2,
            ZWL: 2,
        }[currency];
    }
    Currency.decimalDigits = decimalDigits;
})(Currency || (Currency = {}));

var CurrencyCode;
(function (CurrencyCode) {
    CurrencyCode.types = [
        "008",
        "012",
        "032",
        "036",
        "044",
        "048",
        "050",
        "051",
        "052",
        "060",
        "064",
        "068",
        "072",
        "084",
        "090",
        "096",
        "104",
        "108",
        "116",
        "124",
        "132",
        "136",
        "144",
        "152",
        "156",
        "170",
        "174",
        "188",
        "191",
        "192",
        "203",
        "208",
        "214",
        "222",
        "230",
        "232",
        "238",
        "242",
        "262",
        "270",
        "292",
        "320",
        "324",
        "328",
        "332",
        "340",
        "344",
        "348",
        "352",
        "356",
        "360",
        "364",
        "368",
        "376",
        "388",
        "392",
        "398",
        "400",
        "404",
        "408",
        "410",
        "414",
        "417",
        "418",
        "422",
        "426",
        "430",
        "434",
        "446",
        "454",
        "458",
        "462",
        "480",
        "484",
        "496",
        "498",
        "504",
        "512",
        "516",
        "524",
        "532",
        "533",
        "548",
        "554",
        "558",
        "566",
        "578",
        "586",
        "590",
        "598",
        "600",
        "604",
        "608",
        "634",
        "643",
        "646",
        "654",
        "682",
        "690",
        "694",
        "702",
        "704",
        "706",
        "710",
        "728",
        "748",
        "752",
        "756",
        "760",
        "764",
        "776",
        "780",
        "784",
        "788",
        "800",
        "807",
        "818",
        "826",
        "834",
        "840",
        "858",
        "860",
        "882",
        "886",
        "901",
        "927",
        "928",
        "929",
        "930",
        "931",
        "932",
        "933",
        "934",
        "936",
        "938",
        "940",
        "941",
        "943",
        "944",
        "946",
        "947",
        "948",
        "949",
        "950",
        "951",
        "952",
        "953",
        "955",
        "956",
        "957",
        "958",
        "959",
        "960",
        "961",
        "962",
        "963",
        "964",
        "965",
        "967",
        "968",
        "969",
        "970",
        "971",
        "972",
        "973",
        "975",
        "976",
        "977",
        "978",
        "979",
        "980",
        "981",
        "984",
        "985",
        "986",
        "990",
        "994",
        "997",
        "999",
    ];
    function is(value) {
        return CurrencyCode.types.includes(value);
    }
    CurrencyCode.is = is;
    function from(currency) {
        return {
            ALL: "008",
            DZD: "012",
            ARS: "032",
            AUD: "036",
            BSD: "044",
            BHD: "048",
            BDT: "050",
            AMD: "051",
            BBD: "052",
            BMD: "060",
            BTN: "064",
            BOB: "068",
            BWP: "072",
            BZD: "084",
            SBD: "090",
            BND: "096",
            MMK: "104",
            BIF: "108",
            KHR: "116",
            CAD: "124",
            CVE: "132",
            KYD: "136",
            LKR: "144",
            CLP: "152",
            CNY: "156",
            COP: "170",
            KMF: "174",
            CRC: "188",
            HRK: "191",
            CUP: "192",
            CZK: "203",
            DKK: "208",
            DOP: "214",
            SVC: "222",
            ETB: "230",
            ERN: "232",
            FKP: "238",
            FJD: "242",
            DJF: "262",
            GMD: "270",
            GIP: "292",
            GTQ: "320",
            GNF: "324",
            GYD: "328",
            HTG: "332",
            HNL: "340",
            HKD: "344",
            HUF: "348",
            ISK: "352",
            INR: "356",
            IDR: "360",
            IRR: "364",
            IQD: "368",
            ILS: "376",
            JMD: "388",
            JPY: "392",
            KZT: "398",
            JOD: "400",
            KES: "404",
            KPW: "408",
            KRW: "410",
            KWD: "414",
            KGS: "417",
            LAK: "418",
            LBP: "422",
            LSL: "426",
            LRD: "430",
            LYD: "434",
            MOP: "446",
            MWK: "454",
            MYR: "458",
            MVR: "462",
            MUR: "480",
            MXN: "484",
            MNT: "496",
            MDL: "498",
            MAD: "504",
            OMR: "512",
            NAD: "516",
            NPR: "524",
            ANG: "532",
            AWG: "533",
            VUV: "548",
            NZD: "554",
            NIO: "558",
            NGN: "566",
            NOK: "578",
            PKR: "586",
            PAB: "590",
            PGK: "598",
            PYG: "600",
            PEN: "604",
            PHP: "608",
            QAR: "634",
            RUB: "643",
            RWF: "646",
            SHP: "654",
            SAR: "682",
            SCR: "690",
            SLL: "694",
            SGD: "702",
            VND: "704",
            SOS: "706",
            ZAR: "710",
            SSP: "728",
            SZL: "748",
            SEK: "752",
            CHF: "756",
            SYP: "760",
            THB: "764",
            TOP: "776",
            TTD: "780",
            AED: "784",
            TND: "788",
            UGX: "800",
            MKD: "807",
            EGP: "818",
            GBP: "826",
            TZS: "834",
            USD: "840",
            UYU: "858",
            UZS: "860",
            WST: "882",
            YER: "886",
            TWD: "901",
            UYW: "927",
            VES: "928",
            MRU: "929",
            STN: "930",
            CUC: "931",
            ZWL: "932",
            BYN: "933",
            TMT: "934",
            GHS: "936",
            SDG: "938",
            UYI: "940",
            RSD: "941",
            MZN: "943",
            AZN: "944",
            RON: "946",
            CHE: "947",
            CHW: "948",
            TRY: "949",
            XAF: "950",
            XCD: "951",
            XOF: "952",
            XPF: "953",
            XBA: "955",
            XBB: "956",
            XBC: "957",
            XBD: "958",
            XAU: "959",
            XDR: "960",
            XAG: "961",
            XPT: "962",
            XTS: "963",
            XPD: "964",
            XUA: "965",
            ZMW: "967",
            SRD: "968",
            MGA: "969",
            COU: "970",
            AFN: "971",
            TJS: "972",
            AOA: "973",
            BGN: "975",
            CDF: "976",
            BAM: "977",
            EUR: "978",
            MXV: "979",
            UAH: "980",
            GEL: "981",
            BOV: "984",
            PLN: "985",
            BRL: "986",
            CLF: "990",
            XSU: "994",
            USN: "997",
            XXX: "999",
        }[currency];
    }
    CurrencyCode.from = from;
    function decimalDigits(currencyCode) {
        return {
            "008": 2,
            "012": 2,
            "032": 2,
            "036": 2,
            "044": 2,
            "048": 3,
            "050": 2,
            "051": 2,
            "052": 2,
            "060": 2,
            "064": 2,
            "068": 2,
            "072": 2,
            "084": 2,
            "090": 2,
            "096": 2,
            "104": 2,
            "108": 0,
            "116": 2,
            "124": 2,
            "132": 2,
            "136": 2,
            "144": 2,
            "152": 0,
            "156": 2,
            "170": 2,
            "174": 0,
            "188": 2,
            "191": 2,
            "192": 2,
            "203": 2,
            "208": 2,
            "214": 2,
            "222": 2,
            "230": 2,
            "232": 2,
            "238": 2,
            "242": 2,
            "262": 0,
            "270": 2,
            "292": 2,
            "320": 2,
            "324": 0,
            "328": 2,
            "332": 2,
            "340": 2,
            "344": 2,
            "348": 2,
            "352": 0,
            "356": 2,
            "360": 2,
            "364": 2,
            "368": 3,
            "376": 2,
            "388": 2,
            "392": 0,
            "398": 2,
            "400": 3,
            "404": 2,
            "408": 2,
            "410": 0,
            "414": 3,
            "417": 2,
            "418": 2,
            "422": 2,
            "426": 2,
            "430": 2,
            "434": 3,
            "446": 2,
            "454": 2,
            "458": 2,
            "462": 2,
            "480": 2,
            "484": 2,
            "496": 2,
            "498": 2,
            "504": 2,
            "512": 3,
            "516": 2,
            "524": 2,
            "532": 2,
            "533": 2,
            "548": 0,
            "554": 2,
            "558": 2,
            "566": 2,
            "578": 2,
            "586": 2,
            "590": 2,
            "598": 2,
            "600": 0,
            "604": 2,
            "608": 2,
            "634": 2,
            "643": 2,
            "646": 0,
            "654": 2,
            "682": 2,
            "690": 2,
            "694": 2,
            "702": 2,
            "704": 0,
            "706": 2,
            "710": 2,
            "728": 2,
            "748": 2,
            "752": 2,
            "756": 2,
            "760": 2,
            "764": 2,
            "776": 2,
            "780": 2,
            "784": 2,
            "788": 3,
            "800": 0,
            "807": 2,
            "818": 2,
            "826": 2,
            "834": 2,
            "840": 2,
            "858": 2,
            "860": 2,
            "882": 2,
            "886": 2,
            "901": 2,
            "927": 4,
            "928": 2,
            "929": 2,
            "930": 2,
            "931": 2,
            "932": 2,
            "933": 2,
            "934": 2,
            "936": 2,
            "938": 2,
            "940": 0,
            "941": 2,
            "943": 2,
            "944": 2,
            "946": 2,
            "947": 2,
            "948": 2,
            "949": 2,
            "950": 0,
            "951": 2,
            "952": 0,
            "953": 0,
            "955": undefined,
            "956": undefined,
            "957": undefined,
            "958": undefined,
            "959": undefined,
            "960": undefined,
            "961": undefined,
            "962": undefined,
            "963": undefined,
            "964": undefined,
            "965": undefined,
            "967": 2,
            "968": 2,
            "969": 2,
            "970": 2,
            "971": 2,
            "972": 2,
            "973": 2,
            "975": 2,
            "976": 2,
            "977": 2,
            "978": 2,
            "979": 2,
            "980": 2,
            "981": 2,
            "984": 2,
            "985": 2,
            "986": 2,
            "990": 4,
            "994": undefined,
            "997": 2,
            "999": undefined,
        }[currencyCode];
    }
    CurrencyCode.decimalDigits = decimalDigits;
})(CurrencyCode || (CurrencyCode = {}));

var Date$1;
(function (Date) {
    function is(value) {
        return (typeof value == "string" &&
            value.length == 10 &&
            /^(\d{4}-[01]\d-[0-3]\d)|(\d{4}-[01]\d-[0-3]\d)|(\d{4}-[01]\d-[0-3]\d)$/.test(value));
    }
    Date.is = is;
    function parse(value, time) {
        return new globalThis.Date(value + (time !== null && time !== void 0 ? time : "T12:00:00.000Z"));
    }
    Date.parse = parse;
    function create(value) {
        return value.toISOString().substring(0, 10);
    }
    Date.create = create;
    function now() {
        return create(new globalThis.Date());
    }
    Date.now = now;
    function localize(value, locale, timezone) {
        return (is(value) ? parse(value) : value)
            .toLocaleString(locale ? locale : Intl.DateTimeFormat().resolvedOptions().locale, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            timeZone: timezone !== null && timezone !== void 0 ? timezone : Intl.DateTimeFormat().resolvedOptions().timeZone,
        })
            .substring(0, 10);
    }
    Date.localize = localize;
    function next(date, days = 1) {
        let result;
        if (typeof days == "number") {
            const r = parse(date);
            r.setDate(r.getDate() + days);
            result = Date.create(r);
        }
        else {
            result = date;
            if (days.years)
                result = nextYear(result, days.years);
            if (days.months)
                result = nextMonth(result, days.months);
            if (days.days)
                result = next(result, days.days);
        }
        return result;
    }
    Date.next = next;
    function previous(date, days = 1) {
        let result;
        if (typeof days == "number") {
            const r = parse(date);
            r.setDate(r.getDate() - days);
            result = Date.create(r);
        }
        else {
            result = date;
            if (days.years)
                result = previousYear(result, days.years);
            if (days.months)
                result = previousMonth(result, days.months);
            if (days.days)
                result = previous(result, days.days);
        }
        return result;
    }
    Date.previous = previous;
    function nextMonth(date, months = 1) {
        const result = parse(date);
        result.setMonth(result.getMonth() + months);
        return Date.create(result);
    }
    Date.nextMonth = nextMonth;
    function previousMonth(date, months = 1) {
        return nextMonth(date, -months);
    }
    Date.previousMonth = previousMonth;
    function nextYear(date, years = 1) {
        const result = parse(date);
        result.setFullYear(result.getFullYear() + years);
        return Date.create(result);
    }
    Date.nextYear = nextYear;
    function previousYear(date, years = 1) {
        return nextYear(date, -years);
    }
    Date.previousYear = previousYear;
    function firstOfMonth(date) {
        const result = parse(date);
        result.setDate(1);
        return Date.create(result);
    }
    Date.firstOfMonth = firstOfMonth;
    function lastOfMonth(date) {
        const result = parse(date);
        result.setMonth(result.getMonth() + 1);
        result.setDate(0);
        return Date.create(result);
    }
    Date.lastOfMonth = lastOfMonth;
    function firstOfWeek(date) {
        const result = parse(date);
        const relativeDay = result.getDate() - result.getDay() + 1;
        result.setDate(relativeDay);
        return Date.create(result);
    }
    Date.firstOfWeek = firstOfWeek;
    function lastOfWeek(date) {
        const result = parse(date);
        const relativeDay = result.getDate() - result.getDay() + 7;
        result.setDate(relativeDay);
        return Date.create(result);
    }
    Date.lastOfWeek = lastOfWeek;
    function getYear(time) {
        return Number.parseInt(time.substring(0, 4));
    }
    Date.getYear = getYear;
    function getMonth(time) {
        return Number.parseInt(time.substring(5, 7));
    }
    Date.getMonth = getMonth;
    function getDay(time) {
        return Number.parseInt(time.substring(8, 10));
    }
    Date.getDay = getDay;
    function getWeekDay(time) {
        return new globalThis.Date(time).getDay();
    }
    Date.getWeekDay = getWeekDay;
})(Date$1 || (Date$1 = {}));

var DateRange;
(function (DateRange) {
    function is(value) {
        return typeof value == "object" && Date$1.is(value.start) && Date$1.is(value.end);
    }
    DateRange.is = is;
    function create(start, end) {
        return !Date$1.is(end)
            ? create(start, Date$1.next(start, end))
            : start <= end
                ? { start, end }
                : { start: end, end: start };
    }
    DateRange.create = create;
    function getDays(value) {
        const result = value.start <= value.end
            ? Math.ceil((new globalThis.Date(value.end).getTime() - new globalThis.Date(value.start).getTime()) / (1000 * 3600 * 24))
            : -getDays({ start: value.end, end: value.start });
        return result;
    }
    DateRange.getDays = getDays;
})(DateRange || (DateRange = {}));

var DateSpan;
(function (DateSpan) {
    function is(value) {
        return (typeof value == "object" &&
            (typeof value.years == "number" || value.years == undefined) &&
            (typeof value.months == "number" || value.months == undefined) &&
            (typeof value.days == "number" || value.days == undefined) &&
            (typeof value.years == "number" || typeof value.months == "number" || typeof value.days == "number"));
    }
    DateSpan.is = is;
})(DateSpan || (DateSpan = {}));

var DateTime;
(function (DateTime) {
    function is(value) {
        return (typeof value == "string" &&
            /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d)$/.test(value));
    }
    DateTime.is = is;
    function parse(value) {
        return new globalThis.Date(value);
    }
    DateTime.parse = parse;
    function create(value, resolution = "seconds") {
        if (typeof value == "number") {
            switch (resolution) {
                case "days":
                    value = value * 24;
                case "hours":
                    value = value * 60;
                case "minutes":
                    value = value * 60;
                case "seconds":
                    value = value * 1000;
                case "milliseconds":
            }
            value = new globalThis.Date(value);
        }
        return value.toISOString();
    }
    DateTime.create = create;
    function now() {
        return create(new globalThis.Date());
    }
    DateTime.now = now;
    function localize(value, locale, timezone) {
        const localeString = locale ? locale : Intl.DateTimeFormat().resolvedOptions().locale;
        return (is(value) ? parse(value) : value).toLocaleString(localeString, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZone: timezone !== null && timezone !== void 0 ? timezone : Intl.DateTimeFormat().resolvedOptions().timeZone,
        });
    }
    DateTime.localize = localize;
    function epoch(value, resolution = "seconds") {
        let result = (typeof value == "string" ? parse(value) : value).getTime();
        switch (resolution) {
            case "days":
                result = Math.round(result / 24);
            case "hours":
                result = Math.round(result / 60);
            case "minutes":
                result = Math.round(result / 60);
            case "seconds":
                result = Math.round(result / 1000);
            case "milliseconds":
        }
        return result;
    }
    DateTime.epoch = epoch;
    function next(time, span = 1) {
        let result;
        if (typeof span == "number")
            result = nextSecond(time, span);
        else {
            result = time;
            if (span.years)
                result = nextYear(result, span.years);
            if (span.months)
                result = nextMonth(result, span.months);
            if (span.days)
                result = nextDay(result, span.days);
            if (span.hours)
                result = nextHour(result, span.hours);
            if (span.minutes)
                result = nextMinute(result, span.minutes);
            if (span.seconds)
                result = nextSecond(result, span.seconds);
            if (span.milliseconds)
                result = nextMillisecond(result, span.milliseconds);
        }
        return result;
    }
    DateTime.next = next;
    function previous(time, span = 1) {
        let result;
        if (typeof span == "number")
            result = previousSecond(time, span);
        else {
            result = time;
            if (span.years)
                result = previousYear(result, span.years);
            if (span.months)
                result = previousMonth(result, span.months);
            if (span.days)
                result = previousDay(result, span.days);
            if (span.hours)
                result = previousHour(result, span.hours);
            if (span.minutes)
                result = previousMinute(result, span.minutes);
            if (span.seconds)
                result = previousSecond(result, span.seconds);
            if (span.milliseconds)
                result = previousMillisecond(result, span.milliseconds);
        }
        return result;
    }
    DateTime.previous = previous;
    function nextMillisecond(time, milliseconds = 1) {
        const result = parse(time);
        result.setMilliseconds(result.getMilliseconds() + milliseconds);
        return DateTime.create(result);
    }
    DateTime.nextMillisecond = nextMillisecond;
    function previousMillisecond(time, seconds = 1) {
        return nextMillisecond(time, -seconds);
    }
    DateTime.previousMillisecond = previousMillisecond;
    function nextSecond(time, seconds = 1) {
        const result = parse(time);
        result.setSeconds(result.getSeconds() + seconds);
        return DateTime.create(result);
    }
    DateTime.nextSecond = nextSecond;
    function previousSecond(time, seconds = 1) {
        return nextSecond(time, -seconds);
    }
    DateTime.previousSecond = previousSecond;
    function nextMinute(time, minutes = 1) {
        const result = parse(time);
        result.setMinutes(result.getMinutes() + minutes);
        return DateTime.create(result);
    }
    DateTime.nextMinute = nextMinute;
    function previousMinute(time, minutes = 1) {
        return nextMinute(time, -minutes);
    }
    DateTime.previousMinute = previousMinute;
    function nextHour(time, hours = 1) {
        const result = parse(time);
        result.setHours(result.getHours() + hours);
        return DateTime.create(result);
    }
    DateTime.nextHour = nextHour;
    function previousHour(time, hours = 1) {
        return nextHour(time, -hours);
    }
    DateTime.previousHour = previousHour;
    function nextDay(time, days = 1) {
        const result = parse(time);
        result.setDate(result.getDate() + days);
        return DateTime.create(result);
    }
    DateTime.nextDay = nextDay;
    function previousDay(time, days = 1) {
        return nextDay(time, -days);
    }
    DateTime.previousDay = previousDay;
    function nextMonth(time, months = 1) {
        const result = parse(time);
        result.setMonth(result.getMonth() + months);
        return DateTime.create(result);
    }
    DateTime.nextMonth = nextMonth;
    function previousMonth(time, months = 1) {
        return nextMonth(time, -months);
    }
    DateTime.previousMonth = previousMonth;
    function nextYear(time, years = 1) {
        const result = parse(time);
        result.setFullYear(result.getFullYear() + years);
        return DateTime.create(result);
    }
    DateTime.nextYear = nextYear;
    function previousYear(time, years = 1) {
        return nextYear(time, -years);
    }
    DateTime.previousYear = previousYear;
    function getDate(time) {
        return time.substring(0, 10);
    }
    DateTime.getDate = getDate;
    function getTime(time) {
        return time.substring(11);
    }
    DateTime.getTime = getTime;
    function getYear(time) {
        return Number.parseInt(time.substring(0, 4));
    }
    DateTime.getYear = getYear;
    function getMonth(time) {
        return Number.parseInt(time.substring(5, 7));
    }
    DateTime.getMonth = getMonth;
    function getDay(time) {
        return Number.parseInt(time.substring(8, 10));
    }
    DateTime.getDay = getDay;
    function getHour(time) {
        return Number.parseInt(time.substring(11, 13));
    }
    DateTime.getHour = getHour;
    function getMinute(time) {
        return Number.parseInt(time.substring(14, 16));
    }
    DateTime.getMinute = getMinute;
    function getSecond(time) {
        return Number.parseInt(time.substring(17, 19));
    }
    DateTime.getSecond = getSecond;
})(DateTime || (DateTime = {}));

class Transcoder {
}

class Utf8 extends Transcoder {
    encode(data) {
        return Uint8Array.from(unescape(encodeURIComponent(data)).split(""), c => c.charCodeAt(0));
    }
    decode(data) {
        return !data
            ? ""
            : decodeURIComponent(escape(Array.from(new Uint8Array(data.buffer, data.byteOffset, data.byteLength), c => String.fromCharCode(c)).join("")));
    }
}

class Iso88591 extends Transcoder {
    encode(data) {
        return Uint8Array.from(data.split(""), c => utf8ToIso88591[c]);
    }
    decode(data) {
        return !data
            ? ""
            : new Uint8Array(data.buffer, data.byteOffset, data.byteLength).reduce((r, v) => r + iso88591ToUtf8[v], "");
    }
}
const iso88591ToUtf8 = [
    "\u0000",
    "\u0001",
    "\u0002",
    "\u0003",
    "\u0004",
    "\u0005",
    "\u0006",
    "\u0007",
    "\u0008",
    "\u0009",
    "\n",
    "\u000b",
    "\u000c",
    "\r",
    "\u000e",
    "\u000f",
    "\u0010",
    "\u0011",
    "\u0012",
    "\u0013",
    "\u0014",
    "\u0015",
    "\u0016",
    "\u0017",
    "\u0018",
    "\u0019",
    "\u001a",
    "\u001b",
    "\u001c",
    "\u001d",
    "\u001e",
    "\u001f",
    " ",
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "\u0022",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "{",
    "|",
    "}",
    "~",
    "",
    "€",
    "",
    "‚",
    "ƒ",
    "„",
    "…",
    "†",
    "‡",
    "ˆ",
    "‰",
    "Š",
    "‹",
    "Œ",
    "",
    "Ž",
    "",
    "",
    "‘",
    "’",
    "“",
    "”",
    "•",
    "–",
    "—",
    "˜",
    "™",
    "š",
    "›",
    "œ",
    "",
    "ž",
    "Ÿ",
    "\u00a0",
    "¡",
    "¢",
    "£",
    "¤",
    "¥",
    "¦",
    "§",
    "¨",
    "©",
    "ª",
    "«",
    "¬",
    "­",
    "®",
    "¯",
    "°",
    "±",
    "²",
    "³",
    "´",
    "µ",
    "¶",
    "·",
    "¸",
    "¹",
    "º",
    "»",
    "¼",
    "½",
    "¾",
    "¿",
    "À",
    "Á",
    "Â",
    "Ã",
    "Ä",
    "Å",
    "Æ",
    "Ç",
    "È",
    "É",
    "Ê",
    "Ë",
    "Ì",
    "Í",
    "Î",
    "Ï",
    "Ð",
    "Ñ",
    "Ò",
    "Ó",
    "Ô",
    "Õ",
    "Ö",
    "×",
    "Ø",
    "Ù",
    "Ú",
    "Û",
    "Ü",
    "Ý",
    "Þ",
    "ß",
    "à",
    "á",
    "â",
    "ã",
    "ä",
    "å",
    "æ",
    "ç",
    "è",
    "é",
    "ê",
    "ë",
    "ì",
    "í",
    "î",
    "ï",
    "ð",
    "ñ",
    "ò",
    "ó",
    "ô",
    "õ",
    "ö",
    "÷",
    "ø",
    "ù",
    "ú",
    "û",
    "ü",
    "ý",
    "þ",
    "ÿ",
];
const utf8ToIso88591 = {
    "\u0000": 0,
    "\u0001": 1,
    "\u0002": 2,
    "\u0003": 3,
    "\u0004": 4,
    "\u0005": 5,
    "\u0006": 6,
    "\u0007": 7,
    "\u0008": 8,
    "\u0009": 9,
    "\n": 10,
    "\u000b": 11,
    "\u000c": 12,
    "\r": 13,
    "\u000e": 14,
    "\u000f": 15,
    "\u0010": 16,
    "\u0011": 17,
    "\u0012": 18,
    "\u0013": 19,
    "\u0014": 20,
    "\u0015": 21,
    "\u0016": 22,
    "\u0017": 23,
    "\u0018": 24,
    "\u0019": 25,
    "\u001a": 26,
    "\u001b": 27,
    "\u001c": 28,
    "\u001d": 29,
    "\u001e": 30,
    "\u001f": 31,
    " ": 32,
    "!": 33,
    '"': 34,
    "#": 35,
    $: 36,
    "%": 37,
    "&": 38,
    "\u0027": 39,
    "(": 40,
    ")": 41,
    "*": 42,
    "+": 43,
    ",": 44,
    "-": 45,
    ".": 46,
    "/": 47,
    "0": 48,
    "1": 49,
    "2": 50,
    "3": 51,
    "4": 52,
    "5": 53,
    "6": 54,
    "7": 55,
    "8": 56,
    "9": 57,
    ":": 58,
    ";": 59,
    "<": 60,
    "=": 61,
    ">": 62,
    "?": 63,
    "@": 64,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    "[": 91,
    "\\": 92,
    "]": 93,
    "^": 94,
    _: 95,
    "`": 96,
    a: 97,
    b: 98,
    c: 99,
    d: 100,
    e: 101,
    f: 102,
    g: 103,
    h: 104,
    i: 105,
    j: 106,
    k: 107,
    l: 108,
    m: 109,
    n: 110,
    o: 111,
    p: 112,
    q: 113,
    r: 114,
    s: 115,
    t: 116,
    u: 117,
    v: 118,
    w: 119,
    x: 120,
    y: 121,
    z: 122,
    "{": 123,
    "|": 124,
    "}": 125,
    "~": 126,
    "": 127,
    "€": 128,
    "": 129,
    "‚": 130,
    ƒ: 131,
    "„": 132,
    "…": 133,
    "†": 134,
    "‡": 135,
    ˆ: 136,
    "‰": 137,
    Š: 138,
    "‹": 139,
    Œ: 140,
    "": 141,
    Ž: 142,
    "": 143,
    "": 144,
    "‘": 145,
    "’": 146,
    "“": 147,
    "”": 148,
    "•": 149,
    "–": 150,
    "—": 151,
    "˜": 152,
    "™": 153,
    š: 154,
    "›": 155,
    œ: 156,
    "": 157,
    ž: 158,
    Ÿ: 159,
    "\u00a0": 160,
    "¡": 161,
    "¢": 162,
    "£": 163,
    "¤": 164,
    "¥": 165,
    "¦": 166,
    "§": 167,
    "¨": 168,
    "©": 169,
    ª: 170,
    "«": 171,
    "¬": 172,
    "­": 173,
    "®": 174,
    "¯": 175,
    "°": 176,
    "±": 177,
    "²": 178,
    "³": 179,
    "´": 180,
    µ: 181,
    "¶": 182,
    "·": 183,
    "¸": 184,
    "¹": 185,
    º: 186,
    "»": 187,
    "¼": 188,
    "½": 189,
    "¾": 190,
    "¿": 191,
    À: 192,
    Á: 193,
    Â: 194,
    Ã: 195,
    Ä: 196,
    Å: 197,
    Æ: 198,
    Ç: 199,
    È: 200,
    É: 201,
    Ê: 202,
    Ë: 203,
    Ì: 204,
    Í: 205,
    Î: 206,
    Ï: 207,
    Ð: 208,
    Ñ: 209,
    Ò: 210,
    Ó: 211,
    Ô: 212,
    Õ: 213,
    Ö: 214,
    "×": 215,
    Ø: 216,
    Ù: 217,
    Ú: 218,
    Û: 219,
    Ü: 220,
    Ý: 221,
    Þ: 222,
    ß: 223,
    à: 224,
    á: 225,
    â: 226,
    ã: 227,
    ä: 228,
    å: 229,
    æ: 230,
    ç: 231,
    è: 232,
    é: 233,
    ê: 234,
    ë: 235,
    ì: 236,
    í: 237,
    î: 238,
    ï: 239,
    ð: 240,
    ñ: 241,
    ò: 242,
    ó: 243,
    ô: 244,
    õ: 245,
    ö: 246,
    "÷": 247,
    ø: 248,
    ù: 249,
    ú: 250,
    û: 251,
    ü: 252,
    ý: 253,
    þ: 254,
    ÿ: 255,
};

var Encoding;
(function (Encoding) {
    Encoding.values = [
        "UTF-8",
        "UTF-16",
        "UTF-32",
        "ASCII",
        "CP037",
        "CP930",
        "CP1047",
        "ISO-8859-1",
        "ISO-8859-2",
        "ISO-8859-3",
        "ISO-8859-4",
        "ISO-8859-5",
        "ISO-8859-6",
        "ISO-8859-7",
        "ISO-8859-8",
        "ISO-8859-9",
        "ISO-8859-10",
        "ISO-8859-11",
        "ISO-8859-13",
        "ISO-8859-14",
        "ISO-8859-15",
        "ISO-8859-16",
        "CP437",
        "CP720",
        "CP737",
        "CP850",
        "CP852",
        "CP855",
        "CP857",
        "CP858",
        "CP860",
        "CP861",
        "CP862",
        "CP863",
        "CP865",
        "CP866",
        "CP869",
        "CP872",
        "Windows-1250",
        "Windows-1251",
        "Windows-1252",
        "Windows-1253",
        "Windows-1254",
        "Windows-1255",
        "Windows-1256",
        "Windows-1257",
        "Windows-1258",
        "Mac OS Roman",
        "KOI8-R",
        "KOI8-U",
        "KOI7",
        "MIK",
        "ISCII",
        "TSCII",
        "VISCII",
        "Shift_JIS",
        "EUC-JP",
        "ISO-2022-JP",
        "Shift_JIS-2004",
        "EUC-JIS-2004",
        "ISO-2022-2004",
        "GB 2312",
        "GBK",
        "GB 18030",
        "Big5",
        "HKSCS",
        "KS X 1001",
        "EUC-KR",
        "ISO-2022-KR",
        "T.51",
    ];
    function is(value) {
        return typeof value == "string" && Encoding.values.some(v => v == value);
    }
    Encoding.is = is;
    function parse(value) {
        let result;
        switch (value.toUpperCase()) {
            case "UTF-8":
            case "UTF8":
            case "UTF 8":
                result = "UTF-8";
                break;
            case "UTF-16":
                result = "UTF-16";
                break;
            case "UTF-32":
                result = "UTF-32";
                break;
            case "US-ASCII":
            case "ASCII":
                result = "ASCII";
                break;
            case "CP037":
                result = "CP037";
                break;
            case "CP930":
                result = "CP930";
                break;
            case "CP1047":
                result = "CP1047";
                break;
            case "ISO-IR-100":
            case "CSISOLATIN1":
            case "LATIN1":
            case "LATIN-1":
            case "L1":
            case "IBM819":
            case "CODE PAGE 28591":
            case "WINDOWS-28591":
            case "CODE PAGE 819":
            case "CP819":
            case "CCSID 819":
            case "WE8ISO8859P1":
            case "ISO 8859-1":
            case "ISO-8859-1":
                result = "ISO-8859-1";
                break;
            case "ISO-8859-2":
                result = "ISO-8859-2";
                break;
            case "ISO-8859-3":
                result = "ISO-8859-3";
                break;
            case "ISO-8859-4":
                result = "ISO-8859-4";
                break;
            case "ISO-8859-5":
                result = "ISO-8859-5";
                break;
            case "ISO-8859-6":
                result = "ISO-8859-6";
                break;
            case "ISO-8859-7":
                result = "ISO-8859-7";
                break;
            case "ISO-8859-8":
                result = "ISO-8859-8";
                break;
            case "ISO-8859-9":
                result = "ISO-8859-9";
                break;
            case "ISO-8859-10":
                result = "ISO-8859-10";
                break;
            case "ISO-8859-11":
                result = "ISO-8859-11";
                break;
            case "ISO-8859-13":
                result = "ISO-8859-13";
                break;
            case "ISO-8859-14":
                result = "ISO-8859-14";
                break;
            case "ISO-8859-15":
                result = "ISO-8859-15";
                break;
            case "ISO-8859-16":
                result = "ISO-8859-16";
                break;
            case "CP437":
                result = "CP437";
                break;
            case "CP720":
                result = "CP720";
                break;
            case "CP737":
                result = "CP737";
                break;
            case "CP850":
                result = "CP850";
                break;
            case "CP852":
                result = "CP852";
                break;
            case "CP855":
                result = "CP855";
                break;
            case "CP857":
                result = "CP857";
                break;
            case "CP858":
                result = "CP858";
                break;
            case "CP860":
                result = "CP860";
                break;
            case "CP861":
                result = "CP861";
                break;
            case "CP862":
                result = "CP862";
                break;
            case "CP863":
                result = "CP863";
                break;
            case "CP865":
                result = "CP865";
                break;
            case "CP866":
                result = "CP866";
                break;
            case "CP869":
                result = "CP869";
                break;
            case "CP872":
                result = "CP872";
                break;
            case "WINDOWS-1250":
                result = "Windows-1250";
                break;
            case "WINDOWS-1251":
                result = "Windows-1251";
                break;
            case "WINDOWS-1252":
                result = "Windows-1252";
                break;
            case "WINDOWS-1253":
                result = "Windows-1253";
                break;
            case "WINDOWS-1254":
                result = "Windows-1254";
                break;
            case "WINDOWS-1255":
                result = "Windows-1255";
                break;
            case "WINDOWS-1256":
                result = "Windows-1256";
                break;
            case "WINDOWS-1257":
                result = "Windows-1257";
                break;
            case "WINDOWS-1258":
                result = "Windows-1258";
                break;
            case "MAC OS ROMAN":
                result = "Mac OS Roman";
                break;
            case "KOI8-R":
                result = "KOI8-R";
                break;
            case "KOI8-U":
                result = "KOI8-U";
                break;
            case "KOI7":
                result = "KOI7";
                break;
            case "MIK":
                result = "MIK";
                break;
            case "ISCII":
                result = "ISCII";
                break;
            case "TSCII":
                result = "TSCII";
                break;
            case "VISCII":
                result = "VISCII";
                break;
            case "SHIFT_JIS":
                result = "Shift_JIS";
                break;
            case "EUC-JP":
                result = "EUC-JP";
                break;
            case "ISO-2022-JP":
                result = "ISO-2022-JP";
                break;
            case "SHIFT_JIS-2004":
                result = "Shift_JIS-2004";
                break;
            case "EUC-JIS-2004":
                result = "EUC-JIS-2004";
                break;
            case "ISO-2022-2004":
                result = "ISO-2022-2004";
                break;
            case "GB 2312":
                result = "GB 2312";
                break;
            case "GBK":
                result = "GBK";
                break;
            case "GB 18030":
                result = "GB 18030";
                break;
            case "BIG5":
                result = "Big5";
                break;
            case "HKSCS":
                result = "HKSCS";
                break;
            case "KS X 1001":
                result = "KS X 1001";
                break;
            case "EUC-KR":
                result = "EUC-KR";
                break;
            case "ISO-2022-KR":
                result = "ISO-2022-KR";
                break;
            case "T.51":
                result = "T.51";
                break;
        }
        return result;
    }
    Encoding.parse = parse;
    function encode(encoding, data) {
        return transcoders[encoding].encode(data);
    }
    Encoding.encode = encode;
    function decode(encoding, data) {
        return transcoders[encoding].decode(data);
    }
    Encoding.decode = decode;
    const transcoders = {
        "ISO-8859-1": new Iso88591(),
        "UTF-8": new Utf8(),
    };
})(Encoding || (Encoding = {}));

var Language;
(function (Language) {
    function is(value) {
        return (typeof value == "string" &&
            (value == "ab" ||
                value == "aa" ||
                value == "af" ||
                value == "ak" ||
                value == "sq" ||
                value == "am" ||
                value == "ar" ||
                value == "an" ||
                value == "hy" ||
                value == "as" ||
                value == "av" ||
                value == "ae" ||
                value == "ay" ||
                value == "az" ||
                value == "bm" ||
                value == "ba" ||
                value == "eu" ||
                value == "be" ||
                value == "bn" ||
                value == "bh" ||
                value == "bi" ||
                value == "bs" ||
                value == "br" ||
                value == "bg" ||
                value == "my" ||
                value == "ca" ||
                value == "ch" ||
                value == "ce" ||
                value == "ny" ||
                value == "zh" ||
                value == "cv" ||
                value == "kw" ||
                value == "co" ||
                value == "cr" ||
                value == "hr" ||
                value == "cs" ||
                value == "da" ||
                value == "dv" ||
                value == "nl" ||
                value == "dz" ||
                value == "en" ||
                value == "eo" ||
                value == "et" ||
                value == "ee" ||
                value == "fo" ||
                value == "fj" ||
                value == "fi" ||
                value == "fr" ||
                value == "ff" ||
                value == "gl" ||
                value == "ka" ||
                value == "de" ||
                value == "el" ||
                value == "gn" ||
                value == "gu" ||
                value == "ht" ||
                value == "ha" ||
                value == "he" ||
                value == "hz" ||
                value == "hi" ||
                value == "ho" ||
                value == "hu" ||
                value == "ia" ||
                value == "id" ||
                value == "ie" ||
                value == "ga" ||
                value == "ig" ||
                value == "ik" ||
                value == "io" ||
                value == "is" ||
                value == "it" ||
                value == "iu" ||
                value == "ja" ||
                value == "jv" ||
                value == "kl" ||
                value == "kn" ||
                value == "kr" ||
                value == "ks" ||
                value == "kk" ||
                value == "km" ||
                value == "ki" ||
                value == "rw" ||
                value == "ky" ||
                value == "kv" ||
                value == "kg" ||
                value == "ko" ||
                value == "ku" ||
                value == "kj" ||
                value == "la" ||
                value == "lb" ||
                value == "lg" ||
                value == "li" ||
                value == "ln" ||
                value == "lo" ||
                value == "lt" ||
                value == "lu" ||
                value == "lv" ||
                value == "gv" ||
                value == "mk" ||
                value == "mg" ||
                value == "ms" ||
                value == "ml" ||
                value == "mt" ||
                value == "mi" ||
                value == "mr" ||
                value == "mh" ||
                value == "mn" ||
                value == "na" ||
                value == "nv" ||
                value == "nd" ||
                value == "ne" ||
                value == "ng" ||
                value == "nb" ||
                value == "nn" ||
                value == "no" ||
                value == "ii" ||
                value == "nr" ||
                value == "oc" ||
                value == "oj" ||
                value == "cu" ||
                value == "om" ||
                value == "or" ||
                value == "os" ||
                value == "pa" ||
                value == "pi" ||
                value == "fa" ||
                value == "pl" ||
                value == "ps" ||
                value == "pt" ||
                value == "qu" ||
                value == "rm" ||
                value == "rn" ||
                value == "ro" ||
                value == "ru" ||
                value == "sa" ||
                value == "sc" ||
                value == "sd" ||
                value == "se" ||
                value == "sm" ||
                value == "sg" ||
                value == "sr" ||
                value == "gd" ||
                value == "sn" ||
                value == "si" ||
                value == "sk" ||
                value == "sl" ||
                value == "so" ||
                value == "st" ||
                value == "es" ||
                value == "su" ||
                value == "sw" ||
                value == "ss" ||
                value == "sv" ||
                value == "ta" ||
                value == "te" ||
                value == "tg" ||
                value == "th" ||
                value == "ti" ||
                value == "bo" ||
                value == "tk" ||
                value == "tl" ||
                value == "tn" ||
                value == "to" ||
                value == "tr" ||
                value == "ts" ||
                value == "tt" ||
                value == "tw" ||
                value == "ty" ||
                value == "ug" ||
                value == "uk" ||
                value == "ur" ||
                value == "uz" ||
                value == "ve" ||
                value == "vi" ||
                value == "vo" ||
                value == "wa" ||
                value == "cy" ||
                value == "wo" ||
                value == "fy" ||
                value == "xh" ||
                value == "yi" ||
                value == "yo" ||
                value == "za" ||
                value == "zu"));
    }
    Language.is = is;
    function toName(language) {
        return {
            ab: "Abkhazian",
            aa: "Afar",
            af: "Afrikaans",
            ak: "Akan",
            sq: "Albanian",
            am: "Amharic",
            ar: "Arabic",
            an: "Aragonese",
            hy: "Armenian",
            as: "Assamese",
            av: "Avaric",
            ae: "Avestan",
            ay: "Aymara",
            az: "Azerbaijani",
            bm: "Bambara",
            ba: "Bashkir",
            eu: "Basque",
            be: "Belarusian",
            bn: "Bengali",
            bh: "Bihari languages",
            bi: "Bislama",
            bs: "Bosnian",
            br: "Breton",
            bg: "Bulgarian",
            my: "Burmese",
            ca: "Catalan, Valencian",
            ch: "Chamorro",
            ce: "Chechen",
            ny: "Chichewa, Chewa, Nyanja",
            zh: "Chinese",
            cv: "Chuvash",
            kw: "Cornish",
            co: "Corsican",
            cr: "Cree",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            dv: "Divehi, Dhivehi, Maldivian",
            nl: "Dutch, Flemish",
            dz: "Dzongkha",
            en: "English",
            eo: "Esperanto",
            et: "Estonian",
            ee: "Ewe",
            fo: "Faroese",
            fj: "Fijian",
            fi: "Finnish",
            fr: "French",
            ff: "Fulah",
            gl: "Galician",
            ka: "Georgian",
            de: "German",
            el: "Greek, Modern (1453-)",
            gn: "Guarani",
            gu: "Gujarati",
            ht: "Haitian, Haitian Creole",
            ha: "Hausa",
            he: "Hebrew",
            hz: "Herero",
            hi: "Hindi",
            ho: "Hiri Motu",
            hu: "Hungarian",
            ia: "Interlingua (International Auxiliary Language Association)",
            id: "Indonesian",
            ie: "Interlingue, Occidental",
            ga: "Irish",
            ig: "Igbo",
            ik: "Inupiaq",
            io: "Ido",
            is: "Icelandic",
            it: "Italian",
            iu: "Inuktitut",
            ja: "Japanese",
            jv: "Javanese",
            kl: "Kalaallisut, Greenlandic",
            kn: "Kannada",
            kr: "Kanuri",
            ks: "Kashmiri",
            kk: "Kazakh",
            km: "Central Khmer",
            ki: "Kikuyu, Gikuyu",
            rw: "Kinyarwanda",
            ky: "Kirghiz, Kyrgyz",
            kv: "Komi",
            kg: "Kongo",
            ko: "Korean",
            ku: "Kurdish",
            kj: "Kuanyama, Kwanyama",
            la: "Latin",
            lb: "Luxembourgish, Letzeburgesch",
            lg: "Ganda",
            li: "Limburgan, Limburger, Limburgish",
            ln: "Lingala",
            lo: "Lao",
            lt: "Lithuanian",
            lu: "Luba-Katanga",
            lv: "Latvian",
            gv: "Manx",
            mk: "Macedonian",
            mg: "Malagasy",
            ms: "Malay",
            ml: "Malayalam",
            mt: "Maltese",
            mi: "Maori",
            mr: "Marathi",
            mh: "Marshallese",
            mn: "Mongolian",
            na: "Nauru",
            nv: "Navajo, Navaho",
            nd: "North Ndebele",
            ne: "Nepali",
            ng: "Ndonga",
            nb: "Norwegian Bokmål",
            nn: "Norwegian Nynorsk",
            no: "Norwegian",
            ii: "Sichuan Yi, Nuosu",
            nr: "South Ndebele",
            oc: "Occitan",
            oj: "Ojibwa",
            cu: "Church Slavic, Old Slavonic, Church Slavonic, Old Bulgarian, Old Church Slavonic",
            om: "Oromo",
            or: "Oriya",
            os: "Ossetian, Ossetic",
            pa: "Panjabi, Punjabi",
            pi: "Pali",
            fa: "Persian",
            pl: "Polish",
            ps: "Pashto, Pushto",
            pt: "Portuguese",
            qu: "Quechua",
            rm: "Romansh",
            rn: "Rundi",
            ro: "Romanian, Moldavian, Moldovan",
            ru: "Russian",
            sa: "Sanskrit",
            sc: "Sardinian",
            sd: "Sindhi",
            se: "Northern Sami",
            sm: "Samoan",
            sg: "Sango",
            sr: "Serbian",
            gd: "Gaelic, Scottish Gaelic",
            sn: "Shona",
            si: "Sinhala, Sinhalese",
            sk: "Slovak",
            sl: "Slovenian",
            so: "Somali",
            st: "Southern Sotho",
            es: "Spanish, Castilian",
            su: "Sundanese",
            sw: "Swahili",
            ss: "Swati",
            sv: "Swedish",
            ta: "Tamil",
            te: "Telugu",
            tg: "Tajik",
            th: "Thai",
            ti: "Tigrinya",
            bo: "Tibetan",
            tk: "Turkmen",
            tl: "Tagalog",
            tn: "Tswana",
            to: "Tonga (Tonga Islands)",
            tr: "Turkish",
            ts: "Tsonga",
            tt: "Tatar",
            tw: "Twi",
            ty: "Tahitian",
            ug: "Uighur, Uyghur",
            uk: "Ukrainian",
            ur: "Urdu",
            uz: "Uzbek",
            ve: "Venda",
            vi: "Vietnamese",
            vo: "Volapük",
            wa: "Walloon",
            cy: "Welsh",
            wo: "Wolof",
            fy: "Western Frisian",
            xh: "Xhosa",
            yi: "Yiddish",
            yo: "Yoruba",
            za: "Zhuang, Chuang",
            zu: "Zulu",
        }[language];
    }
    Language.toName = toName;
    function toNativeName(language) {
        return {
            ab: "аҧсуа бызшәа, аҧсшәа",
            aa: "Afaraf",
            af: "Afrikaans",
            ak: "Akan",
            sq: "Shqip",
            am: "አማርኛ",
            ar: "العربية",
            an: "aragonés",
            hy: "Հայերեն",
            as: "অসমীয়া",
            av: "авар мацӀ, магӀарул мацӀ",
            ae: "avesta",
            ay: "aymar aru",
            az: "azərbaycan dili",
            bm: "bamanankan",
            ba: "башҡорт теле",
            eu: "euskara, euskera",
            be: "беларуская мова",
            bn: "বাংলা",
            bh: "ोजपुरी",
            bi: "Bislama",
            bs: "bosanski jezik",
            br: "brezhoneg",
            bg: "български език",
            my: "ဗမာစာ",
            ca: ";català, valencià",
            ch: "Chamoru",
            ce: "нохчийн мотт",
            ny: "chiCheŵa, chinyanja",
            zh: "中文 (Zhōngwén), 汉语, 漢語",
            cv: "чӑваш чӗлхи",
            kw: "Kernewek",
            co: "corsu, lingua corsa",
            cr: "ᓀᐦᐃᔭᐍᐏᐣ",
            hr: "hrvatski jezik",
            cs: "čeština, český jazyk",
            da: "dansk",
            dv: ";ދިވެހި",
            nl: "Nederlands, Vlaams",
            dz: "རྫོང་ཁ",
            en: "English",
            eo: "Esperanto",
            et: "eesti, eesti keel",
            ee: "Eʋegbe",
            fo: "føroyskt",
            fj: "vosa Vakaviti",
            fi: "suomi, suomen kieli",
            fr: "français, langue française",
            ff: "Fulfulde, Pulaar, Pular",
            gl: "Galego",
            ka: "ქართული",
            de: "Deutsch",
            el: "ελληνικά",
            gn: "Avañe'ẽ",
            gu: "ગુજરાતી",
            ht: "Kreyòl ayisyen",
            ha: "(Hausa) هَوُسَ",
            he: "עברית",
            hz: "Otjiherero",
            hi: "हिन्दी, हिंदी",
            ho: ";Hiri Motu",
            hu: "magyar",
            ia: "Interlingua",
            id: "Bahasa Indonesia",
            ie: "Interlingue",
            ga: "Gaeilge",
            ig: "Asụsụ Igbo",
            ik: "Iñupiaq, Iñupiatun",
            io: "Ido",
            is: "Íslenska",
            it: "Italiano",
            iu: "ᐃᓄᒃᑎᑐᑦ",
            ja: "日本語 (にほんご)",
            jv: "ꦧꦱꦗꦮ, Basa Jawa",
            kl: "kalaallisut, kalaallit oqaasii",
            kn: "ಕನ್ನಡ",
            kr: "Kanuri",
            ks: "कश्मीरी, كشميري‎",
            kk: "қазақ тілі",
            km: "្មែរ, ខេមរភាសា, ភាសាខ្មែរ",
            ki: "Gĩkũyũ",
            rw: "Ikinyarwanda",
            ky: "Кыргызча, Кыргыз тили",
            kv: "коми кыв",
            kg: "Kikongo",
            ko: "한국어",
            ku: "Kurdî, کوردی‎",
            kj: "Kuanyama",
            la: "latine, lingua latina",
            lb: "Lëtzebuergesch",
            lg: "Luganda",
            li: "Limburgs",
            ln: "Lingála",
            lo: "ພາສາລາວ",
            lt: "lietuvių kalba",
            lu: ";Kiluba",
            lv: "latviešu valoda",
            gv: "Gaelg, Gailck",
            mk: "македонски јазик",
            mg: "fiteny malagasy",
            ms: "Bahasa Melayu, بهاس ملايو‎",
            ml: "മലയാളം",
            mt: "Malti",
            mi: "te reo Māori",
            mr: "मराठी",
            mh: "Kajin M̧ajeļ",
            mn: "Монгол хэл",
            na: "Dorerin Naoero",
            nv: ";Diné bizaad",
            nd: ";isiNdebele",
            ne: "नेपाली",
            ng: "Owambo",
            nb: "Norsk Bokmål",
            nn: "Norsk Nynorsk",
            no: "Norsk",
            ii: ";ꆈꌠ꒿ Nuosuhxop",
            nr: ";isiNdebele",
            oc: "occitan, lenga d'òc",
            oj: "ᐊᓂᔑᓈᐯᒧᐎᓐ",
            cu: ";ѩзыкъ словѣньскъ",
            om: "Afaan Oromoo",
            or: "ଓଡ଼ିଆ",
            os: ";ирон æвзаг",
            pa: ";ਪੰਜਾਬੀ",
            pi: "पाऴि",
            fa: "فارسی",
            pl: "język polski, polszczyzna",
            ps: "پښتو",
            pt: "Português",
            qu: "Runa Simi, Kichwa",
            rm: "Rumantsch Grischun",
            rn: "Ikirundi",
            ro: ";Română",
            ru: "русский",
            sa: "संस्कृतम्",
            sc: "sardu",
            sd: "सिन्धी, سنڌي، سندھی‎",
            se: ";Davvisámegiella",
            sm: "gagana fa'a Samoa",
            sg: "yângâ tî sängö",
            sr: "српски језик",
            gd: ";Gàidhlig",
            sn: "chiShona",
            si: ";සිංහල",
            sk: "Slovenčina, Slovenský Jazyk",
            sl: "Slovenski Jezik, Slovenščina",
            so: "Soomaaliga, af Soomaali",
            st: ";Sesotho",
            es: ";Español",
            su: "Basa Sunda",
            sw: "Kiswahili",
            ss: "SiSwati",
            sv: "Svenska",
            ta: "தமிழ்",
            te: "తెలుగు",
            tg: "тоҷикӣ, toçikī, تاجیکی‎",
            th: "ไทย",
            ti: "ትግርኛ",
            bo: "བོད་ཡིག",
            tk: "Türkmen, Түркмен",
            tl: "Wikang Tagalog",
            tn: "Setswana",
            to: "Faka Tonga",
            tr: "Türkçe",
            ts: "Xitsonga",
            tt: "татар теле, tatar tele",
            tw: "Twi",
            ty: "Reo Tahiti",
            ug: ";ئۇيغۇرچە‎, Uyghurche",
            uk: "Українська",
            ur: "اردو",
            uz: "Oʻzbek, Ўзбек, أۇزبېك‎",
            ve: "Tshivenḓa",
            vi: "Tiếng Việt",
            vo: "Volapük",
            wa: "Walon",
            cy: "Cymraeg",
            wo: "Wollof",
            fy: ";Frysk",
            xh: "isiXhosa",
            yi: "ייִדיש",
            yo: "Yorùbá",
            za: "Saɯ cueŋƅ, Saw cuengh",
            zu: "isiZu",
        }[language];
    }
    Language.toNativeName = toNativeName;
})(Language || (Language = {}));

var Locale;
(function (Locale) {
    function is(value) {
        return (value == "af-ZA" ||
            value == "am-ET" ||
            value == "ar-AE" ||
            value == "ar-BH" ||
            value == "ar-DZ" ||
            value == "ar-EG" ||
            value == "ar-IQ" ||
            value == "ar-JO" ||
            value == "ar-KW" ||
            value == "ar-LB" ||
            value == "ar-LY" ||
            value == "ar-MA" ||
            value == "arn-CL" ||
            value == "ar-OM" ||
            value == "ar-QA" ||
            value == "ar-SA" ||
            value == "ar-SY" ||
            value == "ar-TN" ||
            value == "ar-YE" ||
            value == "as-IN" ||
            value == "az-AZ" ||
            value == "az-Cyrl-AZ" ||
            value == "az-Latn-AZ" ||
            value == "ba-RU" ||
            value == "be-BY" ||
            value == "bg-BG" ||
            value == "bn-BD" ||
            value == "bn-IN" ||
            value == "bo-CN" ||
            value == "br-FR" ||
            value == "bs-BA" ||
            value == "bs-Cyrl-BA" ||
            value == "bs-Latn-BA" ||
            value == "ca-ES" ||
            value == "co-FR" ||
            value == "cs-CZ" ||
            value == "cy-GB" ||
            value == "da-DK" ||
            value == "de-AT" ||
            value == "de-CH" ||
            value == "de-DE" ||
            value == "de-LI" ||
            value == "de-LU" ||
            value == "dsb-DE" ||
            value == "dv-MV" ||
            value == "el-GR" ||
            value == "en-029" ||
            value == "en-AU" ||
            value == "en-BZ" ||
            value == "en-CA" ||
            value == "en-GB" ||
            value == "en-IE" ||
            value == "en-IN" ||
            value == "en-JM" ||
            value == "en-MY" ||
            value == "en-NZ" ||
            value == "en-PH" ||
            value == "en-SG" ||
            value == "en-TT" ||
            value == "en-US" ||
            value == "en-ZA" ||
            value == "en-ZW" ||
            value == "es-AR" ||
            value == "es-BO" ||
            value == "es-CL" ||
            value == "es-CO" ||
            value == "es-CR" ||
            value == "es-DO" ||
            value == "es-EC" ||
            value == "es-ES" ||
            value == "es-GT" ||
            value == "es-HN" ||
            value == "es-MX" ||
            value == "es-NI" ||
            value == "es-PA" ||
            value == "es-PE" ||
            value == "es-PR" ||
            value == "es-PY" ||
            value == "es-SV" ||
            value == "es-US" ||
            value == "es-UY" ||
            value == "es-VE" ||
            value == "et-EE" ||
            value == "eu-ES" ||
            value == "fa-IR" ||
            value == "fi-FI" ||
            value == "fil-PH" ||
            value == "fo-FO" ||
            value == "fr-BE" ||
            value == "fr-CA" ||
            value == "fr-CH" ||
            value == "fr-FR" ||
            value == "fr-LU" ||
            value == "fr-MC" ||
            value == "fy-NL" ||
            value == "ga-IE" ||
            value == "gd-GB" ||
            value == "gl-ES" ||
            value == "gsw-FR" ||
            value == "gu-IN" ||
            value == "ha-Latn-NG" ||
            value == "he-IL" ||
            value == "hi-IN" ||
            value == "hr-BA" ||
            value == "hr-HR" ||
            value == "hsb-DE" ||
            value == "hu-HU" ||
            value == "hy-AM" ||
            value == "id-ID" ||
            value == "ig-NG" ||
            value == "ii-CN" ||
            value == "is-IS" ||
            value == "it-CH" ||
            value == "it-IT" ||
            value == "iu-Cans-CA" ||
            value == "iu-Latn-CA" ||
            value == "ja-JP" ||
            value == "ka-GE" ||
            value == "kk-KZ" ||
            value == "kl-GL" ||
            value == "km-KH" ||
            value == "kn-IN" ||
            value == "kok-IN" ||
            value == "ko-KR" ||
            value == "ky-KG" ||
            value == "lb-LU" ||
            value == "lo-LA" ||
            value == "lt-LT" ||
            value == "lv-LV" ||
            value == "mi-NZ" ||
            value == "mk-MK" ||
            value == "ml-IN" ||
            value == "mn-MN" ||
            value == "mn-Mong-CN" ||
            value == "moh-CA" ||
            value == "mr-IN" ||
            value == "ms-BN" ||
            value == "ms-MY" ||
            value == "mt-MT" ||
            value == "nb-NO" ||
            value == "ne-NP" ||
            value == "nl-BE" ||
            value == "nl-NL" ||
            value == "nn-NO" ||
            value == "nso-ZA" ||
            value == "oc-FR" ||
            value == "or-IN" ||
            value == "pa-IN" ||
            value == "pl-PL" ||
            value == "prs-AF" ||
            value == "ps-AF" ||
            value == "pt-BR" ||
            value == "pt-PT" ||
            value == "qut-GT" ||
            value == "quz-BO" ||
            value == "quz-EC" ||
            value == "quz-PE" ||
            value == "rm-CH" ||
            value == "ro-RO" ||
            value == "ru-RU" ||
            value == "rw-RW" ||
            value == "sah-RU" ||
            value == "sa-IN" ||
            value == "se-FI" ||
            value == "se-NO" ||
            value == "se-SE" ||
            value == "si-LK" ||
            value == "sk-SK" ||
            value == "sl-SI" ||
            value == "sma-NO" ||
            value == "sma-SE" ||
            value == "smj-NO" ||
            value == "smj-SE" ||
            value == "smn-FI" ||
            value == "sms-FI" ||
            value == "sq-AL" ||
            value == "sr-BA" ||
            value == "sr-CS" ||
            value == "sr-ME" ||
            value == "sr-RS" ||
            value == "sr-Cyrl-BA" ||
            value == "sr-Cyrl-CS" ||
            value == "sr-Cyrl-ME" ||
            value == "sr-Cyrl-RS" ||
            value == "sr-Latn-BA" ||
            value == "sr-Latn-CS" ||
            value == "sr-Latn-ME" ||
            value == "sr-Latn-RS" ||
            value == "sv-FI" ||
            value == "sv-SE" ||
            value == "sw-KE" ||
            value == "syr-SY" ||
            value == "ta-IN" ||
            value == "te-IN" ||
            value == "tg-TJ" ||
            value == "tg-Cyrl-TJ" ||
            value == "th-TH" ||
            value == "tk-TM" ||
            value == "tn-ZA" ||
            value == "tr-TR" ||
            value == "tt-RU" ||
            value == "tzm-DZ" ||
            value == "tzm-Latn-DZ" ||
            value == "ug-CN" ||
            value == "uk-UA" ||
            value == "ur-PK" ||
            value == "uz-UZ" ||
            value == "uz-Cyrl-UZ" ||
            value == "uz-Latn-UZ" ||
            value == "vi-VN" ||
            value == "wo-SN" ||
            value == "xh-ZA" ||
            value == "yo-NG" ||
            value == "zh-CN" ||
            value == "zh-HK" ||
            value == "zh-MO" ||
            value == "zh-SG" ||
            value == "zh-TW" ||
            value == "zu-ZA");
    }
    Locale.is = is;
    function toLanguage(locale) {
        const result = locale.split("-").shift();
        return Language.is(result) ? result : undefined;
    }
    Locale.toLanguage = toLanguage;
    function toAlpha2(locale) {
        const result = locale.split("-").pop();
        return Alpha2.is(result) ? result : undefined;
    }
    Locale.toAlpha2 = toAlpha2;
    function toLocale(language, alpha2) {
        let result;
        if (alpha2)
            result = language + "-" + alpha2;
        else {
            result = {
                ca: "ca-ES",
                co: "co-FR",
                da: "da-DK",
                de: "de-DE",
                en: "en-GB",
                es: "es-ES",
                et: "et-EE",
                fi: "fi-FI",
                fr: "fr-FR",
                is: "is-IS",
                ja: "ja-JP",
                ko: "ko-KR",
                lb: "lb-LU",
                lt: "lt-LT",
                nb: "nb-NO",
                no: "nn-NO",
                nl: "nl-NL",
                pl: "pl-PL",
                pt: "pt-PT",
                ru: "ru-RU",
                sv: "sv-SE",
            }[language];
        }
        return is(result) ? result : undefined;
    }
    Locale.toLocale = toLocale;
})(Locale || (Locale = {}));

var TimeRange;
(function (TimeRange) {
    function is(value) {
        return typeof value == "object" && DateTime.is(value.start) && DateTime.is(value.end);
    }
    TimeRange.is = is;
    function create(start, end) {
        return !DateTime.is(end)
            ? create(start, DateTime.next(start, end))
            : start <= end
                ? { start, end }
                : { start: end, end: start };
    }
    TimeRange.create = create;
})(TimeRange || (TimeRange = {}));

var TimeSpan;
(function (TimeSpan) {
    function is(value) {
        return (typeof value == "object" &&
            (typeof value.years == "number" || value.years == undefined) &&
            (typeof value.months == "number" || value.months == undefined) &&
            (typeof value.days == "number" || value.days == undefined) &&
            (typeof value.hours == "number" || value.hours == undefined) &&
            (typeof value.minutes == "number" || value.minutes == undefined) &&
            (typeof value.seconds == "number" || value.seconds == undefined) &&
            (typeof value.milliseconds == "number" || value.milliseconds == undefined) &&
            (typeof value.years == "number" ||
                typeof value.months == "number" ||
                typeof value.days == "number" ||
                typeof value.hours == "number" ||
                typeof value.minutes == "number" ||
                typeof value.seconds == "number" ||
                typeof value.milliseconds == "number"));
    }
    TimeSpan.is = is;
    function toHours(value, round) {
        var _a, _b, _c, _d;
        const result = ((_a = value.milliseconds) !== null && _a !== void 0 ? _a : 0) / (60 * 60 * 1000) +
            ((_b = value.seconds) !== null && _b !== void 0 ? _b : 0) / (60 * 60) +
            ((_c = value.minutes) !== null && _c !== void 0 ? _c : 0) / 60 +
            ((_d = value.hours) !== null && _d !== void 0 ? _d : 0);
        return performRound(result, round);
    }
    TimeSpan.toHours = toHours;
    function toMinutes(value, round) {
        var _a, _b, _c, _d;
        const result = ((_a = value.milliseconds) !== null && _a !== void 0 ? _a : 0) / (60 * 1000) +
            ((_b = value.seconds) !== null && _b !== void 0 ? _b : 0) / 60 +
            ((_c = value.minutes) !== null && _c !== void 0 ? _c : 0) +
            ((_d = value.hours) !== null && _d !== void 0 ? _d : 0) * 60;
        return performRound(result, round);
    }
    TimeSpan.toMinutes = toMinutes;
    function toSeconds(value, round) {
        var _a, _b, _c, _d;
        const result = ((_a = value.milliseconds) !== null && _a !== void 0 ? _a : 0) / 1000 + ((_b = value.seconds) !== null && _b !== void 0 ? _b : 0) + ((_c = value.minutes) !== null && _c !== void 0 ? _c : 0) * 60 + ((_d = value.hours) !== null && _d !== void 0 ? _d : 0) * 60 * 60;
        return performRound(result, round);
    }
    TimeSpan.toSeconds = toSeconds;
    function toMilliseconds(value, round) {
        var _a, _b, _c, _d;
        const result = ((_a = value.milliseconds) !== null && _a !== void 0 ? _a : 0) +
            ((_b = value.seconds) !== null && _b !== void 0 ? _b : 0) * 1000 +
            ((_c = value.minutes) !== null && _c !== void 0 ? _c : 0) * 60 * 1000 +
            ((_d = value.hours) !== null && _d !== void 0 ? _d : 0) * 60 * 60 * 1000;
        return performRound(result, round);
    }
    TimeSpan.toMilliseconds = toMilliseconds;
})(TimeSpan || (TimeSpan = {}));
function performRound(value, round) {
    return !round
        ? value
        : round == "ceiling"
            ? Math.ceil(value)
            : round == "floor"
                ? Math.floor(value)
                : Math.round(value);
}

class TextEncoder {
    constructor() {
        this.encoding = "utf-8";
    }
    encode(data) {
        return Uint8Array.from(unescape(encodeURIComponent(data)).split(""), c => c.charCodeAt(0));
    }
}

const tables = {
    standard: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    url: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
};
function encode$1(value, standard = "standard", padding = "") {
    if (typeof value == "string")
        value = new TextEncoder().encode(value);
    const table = tables[standard];
    const result = [];
    for (let c = 0; c < value.length; c += 3) {
        const c0 = value[c];
        const c1 = c + 1 < value.length ? value[c + 1] : 0;
        const c2 = c + 2 < value.length ? value[c + 2] : 0;
        result.push(table[c0 >>> 2]);
        result.push(table[((c0 & 3) << 4) | (c1 >>> 4)]);
        result.push(table[((c1 & 15) << 2) | (c2 >>> 6)]);
        result.push(table[c2 & 63]);
    }
    const length = Math.ceil((value.length / 3) * 4);
    return result.join("").substr(0, length) + padding.repeat(result.length - length);
}
function decode$1(value, standard = "standard") {
    while (value.endsWith("=") && value.length > 0)
        value = value.substr(0, value.length - 1);
    const table = tables[standard];
    const data = value.split("").map(c => table.indexOf(c));
    const result = new Uint8Array(Math.floor((data.length / 4) * 3));
    for (let c = 0; c < result.length; c += 3) {
        const d0 = data.shift() || 0;
        const d1 = data.shift() || 0;
        const d2 = data.shift() || 0;
        const d3 = data.shift() || 0;
        result[c] = (d0 << 2) | (d1 >>> 4);
        result[c + 1] = ((d1 & 15) << 4) | (d2 >>> 2);
        result[c + 2] = ((d2 & 3) << 6) | d3;
    }
    return result;
}

const crypto = typeof window != "undefined"
    ? window.crypto || window.msCrypto
    : self.crypto || self.msCrypto;

class TextDecoder {
    constructor() {
        this.encoding = "utf-8";
    }
    decode(view, options) {
        return !view
            ? ""
            : decodeURIComponent(escape(Array.from(new Uint8Array(view.buffer, view.byteOffset, view.byteLength), c => String.fromCharCode(c)).join("")));
    }
}

class Algorithm$2 {
    constructor(key) {
        this.key = key;
    }
    async encrypt(data, salt) {
        const iv = salt ? decode$1(salt, "url") : crypto.getRandomValues(new Uint8Array(16));
        return {
            key: this.name,
            salt: salt || encode$1(iv, "url"),
            value: encode$1(new Uint8Array(await crypto.subtle.encrypt({ name: (await this.key).algorithm.name, iv }, await this.key, new TextEncoder().encode(data))), "url"),
        };
    }
    async decrypt(encrypted, salt) {
        if (typeof encrypted == "string")
            encrypted = { value: encrypted, salt: salt !== null && salt !== void 0 ? salt : "" };
        return new TextDecoder().decode(new Uint8Array(await crypto.subtle.decrypt({ name: (await this.key).algorithm.name, iv: decode$1(encrypted.salt, "url") }, await this.key, decode$1(encrypted.value, "url"))));
    }
    async export(parts) {
        let result;
        const key = new Uint8Array(await crypto.subtle.exportKey("raw", await this.key));
        if (parts == undefined)
            result = (await this.export(1))[0];
        else if (typeof parts == "number")
            result = await this.export(parts > 1 ? Algorithm$2.generateRandomKeys(key.length, parts - 1) : []);
        else if (typeof parts == "string")
            result = await this.export(decode$1(parts, "url"));
        else if (parts instanceof Uint8Array)
            result = (await this.export([parts]))[0];
        else if (this.isStringArray(parts))
            result = await this.export(parts.map(part => decode$1(part, "url")));
        else {
            parts = [Algorithm$2.reduceKeys([key, ...parts]), ...parts];
            result = parts.map(r => encode$1(r, "url"));
        }
        return result;
    }
    isStringArray(value) {
        return Array.isArray(value) && value.length > 0 && value.every((item) => typeof item == "string");
    }
    static aesCbc(key) {
        return Algorithm$2.generate("AES-CBC", key);
    }
    static aesGcm(key) {
        return Algorithm$2.generate("AES-GCM", key);
    }
    static random(length, parts) {
        const result = Algorithm$2.generateRandomKeys(length / 8, parts && parts > 0 ? parts : 1).map(r => encode$1(r, "url"));
        return parts ? result : result[0];
    }
    static generate(algorithm, key) {
        return new Algorithm$2(typeof key == "number"
            ? crypto.subtle.generateKey({ name: algorithm, length: key }, true, ["encrypt", "decrypt"])
            : crypto.subtle.importKey("raw", Array.isArray(key)
                ? Algorithm$2.reduceKeys(key.map(k => decode$1(k, "url")))
                : decode$1(key, "url"), algorithm, true, ["encrypt", "decrypt"]));
    }
    static generateRandomKeys(length, parts) {
        return parts > 0
            ? [crypto.getRandomValues(new Uint8Array(length)), ...this.generateRandomKeys(length, parts - 1)]
            : [];
    }
    static reduceKeys(keys) {
        const result = new Uint8Array(keys[0].length);
        for (let index = 0; index < keys[0].length; index++)
            result[index] = keys.reduce((p, c) => p ^ c[index], 0);
        return result;
    }
}

var Algorithms;
(function (Algorithms) {
    function create(create, current, ...secrets) {
        const [first, ...remainder] = isStringArray(secrets)
            ? secrets.map(part => Object.fromEntries(part.split(",").map(secret => secret.split(":", 2).map(item => item.trim()))))
            : secrets;
        const result = Object.assign({}, ...Object.entries(first)
            .map(([name, secret]) => [
            name,
            [secret, ...remainder.map(part => part[name]).filter(part => part)],
        ])
            .map(([name, secrets]) => ({
            get [name]() {
                return Object.assign(create(secrets), { name });
            },
        })));
        return { current: result[current], ...result };
    }
    Algorithms.create = create;
})(Algorithms || (Algorithms = {}));
function isStringArray(value) {
    return Array.isArray(value) && value.length > 0 && typeof value[0] == "string";
}

function encode(value, length) {
    const data = typeof value == "string" ? new TextEncoder().encode(value) : value;
    let result = [];
    for (const d of data)
        result.push(Math.floor(d / 16).toString(16), (d % 16).toString(16));
    if (length)
        result = result.slice(0, length);
    return result.join("");
}
function decode(value) {
    if (value.length % 2 == 1)
        value += "0";
    const result = new Uint8Array(value.length / 2);
    for (let index = 0; index < result.length; index++)
        result[index] = Number.parseInt(value[index * 2], 16) * 16 + Number.parseInt(value[index * 2 + 1], 16);
    return result;
}

class Digest {
    constructor(algorithm) {
        this.algorithm = algorithm;
    }
    get length() {
        return Digest.lengths[this.algorithm];
    }
    async digest(data, base = "standard") {
        let result;
        if (typeof data == "string") {
            const digest = await this.digest(new TextEncoder().encode(data));
            result = base == 16 ? encode(digest) : encode$1(digest, base);
        }
        else
            result = new Uint8Array(await crypto.subtle.digest(this.algorithm, data));
        return result;
    }
}
Digest.lengths = {
    "SHA-1": 128,
    "SHA-256": 256,
    "SHA-384": 384,
    "SHA-512": 512,
};

var Encrypted;
(function (Encrypted) {
    function is(value) {
        return (typeof value == "object" &&
            (value.key == undefined || typeof value.key == "string") &&
            typeof value.value == "string" &&
            typeof value.salt == "string");
    }
    Encrypted.is = is;
    function stringify(encrypted) {
        encrypted.key = encrypted.key && encrypted.key.length != 4 ? encrypted.key.slice(-2) : encrypted.key;
        return [encrypted.key, encrypted.salt, encrypted.value].join(".");
    }
    Encrypted.stringify = stringify;
    function parse(encryptedString) {
        const splitted = encryptedString.split(".");
        const encrypted = { key: splitted[0], salt: splitted[1], value: splitted[2] };
        return Encrypted.is(encrypted) ? encrypted : undefined;
    }
    Encrypted.parse = parse;
})(Encrypted || (Encrypted = {}));

var Identifier;
(function (Identifier) {
    function is(value, length) {
        return (typeof value == "string" &&
            (length == undefined || value.length == length) &&
            Array.from(value).every(c => (c >= "0" && c <= "9") || (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || c == "-" || c == "_"));
    }
    Identifier.is = is;
    function fromUint24(value) {
        return fromHexadecimal(value.toString(16).padStart(6, "0"));
    }
    Identifier.fromUint24 = fromUint24;
    function toUint24(identifier) {
        return Number.parseInt(toHexadecimal(identifier, 6), 16);
    }
    Identifier.toUint24 = toUint24;
    function fromUint48(value) {
        return fromHexadecimal(value.toString(16).padStart(12, "0"));
    }
    Identifier.fromUint48 = fromUint48;
    function toUint48(identifier) {
        return Number.parseInt(toHexadecimal(identifier, 12), 16);
    }
    Identifier.toUint48 = toUint48;
    function fromBinary(identifier) {
        return encode$1(identifier, "url");
    }
    Identifier.fromBinary = fromBinary;
    function toBinary(identifier) {
        return decode$1(identifier, "url");
    }
    Identifier.toBinary = toBinary;
    function generate(length) {
        return fromBinary(crypto.getRandomValues(new Uint8Array((length / 4) * 3)));
    }
    Identifier.generate = generate;
    function fromHexadecimal(identifier) {
        if (identifier.length % 2 == 1)
            identifier += "0";
        const result = new Uint8Array(identifier.length / 2);
        for (let index = 0; index < result.length; index++)
            result[index] = Number.parseInt(identifier[index * 2], 16) * 16 + Number.parseInt(identifier[index * 2 + 1], 16);
        return fromBinary(result);
    }
    Identifier.fromHexadecimal = fromHexadecimal;
    function toHexadecimal(identifier, length) {
        const data = decode$1(identifier, "url");
        let result = [];
        for (const d of data)
            result.push(Math.floor(d / 16).toString(16), (d % 16).toString(16));
        if (length)
            result = result.slice(0, length);
        return result.join("");
    }
    Identifier.toHexadecimal = toHexadecimal;
    Identifier.length = [
        4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112,
        116, 120, 124, 128,
    ];
    let Length;
    (function (Length) {
        function is(value) {
            return typeof value == "number" && value >= 4 && value <= 128 && (value & 252) == value;
        }
        Length.is = is;
    })(Length = Identifier.Length || (Identifier.Length = {}));
})(Identifier || (Identifier = {}));

var Password$1;
(function (Password) {
    function is(value) {
        return (typeof value == "string" ||
            (typeof value == "object" && typeof value.hash == "string" && typeof value.salt == "string"));
    }
    Password.is = is;
    async function hash(algorithm, password, salt) {
        if (!salt)
            salt = encode$1(crypto.getRandomValues(new Uint8Array(64)));
        return {
            hash: await algorithm.sign(salt + password),
            salt,
        };
    }
    Password.hash = hash;
    async function verify(algorithm, hash, password) {
        return (await Password.hash(algorithm, password, hash.salt)).hash == hash.hash;
    }
    Password.verify = verify;
    let Hashed;
    (function (Hashed) {
        function is(value) {
            return typeof value == "object" && typeof value.hash == "string" && typeof value.salt == "string";
        }
        Hashed.is = is;
    })(Hashed = Password.Hashed || (Password.Hashed = {}));
})(Password$1 || (Password$1 = {}));

var RandomValue;
(function (RandomValue) {
    function generate(array) {
        return crypto.getRandomValues(array);
    }
    RandomValue.generate = generate;
})(RandomValue || (RandomValue = {}));

var Algorithm$1;
(function (Algorithm) {
    function is(value) {
        return value == "HMAC" || value == "RSA" || value == "ECDSA" || value == "RSA-PSS";
    }
    Algorithm.is = is;
})(Algorithm$1 || (Algorithm$1 = {}));

class Base {
    async sign(data) {
        return typeof data == "string"
            ? encode$1(await this.signBinary(new TextEncoder().encode(data)), "url")
            : this.signBinary(data);
    }
    verify(data, signature) {
        if (typeof signature == "string")
            signature = decode$1(signature, "url");
        return typeof data == "string"
            ? this.verifyBinary(new TextEncoder().encode(data), signature)
            : this.verifyBinary(data, signature);
    }
}

class ECDSA extends Base {
    constructor(hash, publicKey, privateKey) {
        super();
        this.hash = hash;
        if (publicKey) {
            if (typeof publicKey == "string")
                publicKey = decode$1(publicKey);
            this.publicKey = crypto.subtle.importKey("spki", publicKey, { name: "ECDSA", namedCurve: hash.replace("SHA", "P") == "P-512" ? "P-521" : hash.replace("SHA", "P") }, false, ["verify"]);
        }
        if (privateKey) {
            if (typeof privateKey == "string")
                privateKey = decode$1(privateKey);
            this.privateKey = crypto.subtle.importKey("pkcs8", privateKey, { name: "ECDSA", namedCurve: hash.replace("SHA", "P") == "P-512" ? "P-521" : hash.replace("SHA", "P") }, true, ["sign", "verify"]);
        }
    }
    async signBinary(data) {
        return new Uint8Array(await crypto.subtle.sign({ name: "ECDSA", hash: { name: this.hash } }, await this.privateKey, data));
    }
    async verifyBinary(data, signature) {
        return crypto.subtle.verify({ name: "ECDSA", hash: { name: this.hash } }, await this.publicKey, signature, data);
    }
}

var Hash;
(function (Hash) {
    function is(value) {
        return value == "SHA-1" || value == "SHA-256" || value == "SHA-384" || value == "SHA-512";
    }
    Hash.is = is;
})(Hash || (Hash = {}));

class Symmetric$1 extends Base {
    async verifyBinary(data, signature) {
        return encode$1(await this.signBinary(data), "url") == encode$1(signature, "url");
    }
}

class HMAC extends Symmetric$1 {
    constructor(hash, key) {
        super();
        this.hash = hash;
        if (typeof key == "string")
            key = decode$1(key, "url");
        this.key = crypto.subtle.importKey("raw", key, { name: "HMAC", hash: { name: hash } }, false, ["sign", "verify"]);
    }
    async signBinary(data) {
        return new Uint8Array(await crypto.subtle.sign("HMAC", await this.key, data));
    }
}

class None extends Symmetric$1 {
    signBinary(_) {
        return Promise.resolve(new Uint8Array(0));
    }
}

class RSA extends Base {
    constructor(hash, publicKey, privateKey) {
        super();
        this.hash = hash;
        if (publicKey) {
            if (typeof publicKey == "string")
                publicKey = decode$1(publicKey);
            this.publicKey = crypto.subtle.importKey("spki", publicKey, { name: "RSASSA-PKCS1-v1_5", hash: { name: hash } }, false, ["verify"]);
        }
        if (privateKey) {
            if (typeof privateKey == "string")
                privateKey = decode$1(privateKey);
            this.privateKey = crypto.subtle.importKey("pkcs8", privateKey, { name: "RSASSA-PKCS1-v1_5", hash: { name: hash } }, true, ["sign"]);
        }
    }
    async signBinary(data) {
        return new Uint8Array(await crypto.subtle.sign("RSASSA-PKCS1-v1_5", await this.privateKey, data));
    }
    async verifyBinary(data, signature) {
        return crypto.subtle.verify("RSASSA-PKCS1-v1_5", await this.publicKey, signature, data);
    }
}

class RSAPSS extends Base {
    constructor(hash, publicKey, privateKey) {
        super();
        this.hash = hash;
        if (publicKey) {
            if (typeof publicKey == "string")
                publicKey = decode$1(publicKey);
            this.publicKey = crypto.subtle.importKey("spki", publicKey, { name: "RSA-PSS", hash: { name: hash } }, false, [
                "verify",
            ]);
        }
        if (privateKey) {
            if (typeof privateKey == "string")
                privateKey = decode$1(privateKey);
            this.privateKey = crypto.subtle.importKey("pkcs8", privateKey, { name: "RSA-PSS", hash: { name: hash } }, true, [
                "sign",
                "verify",
            ]);
        }
    }
    async signBinary(data) {
        return new Uint8Array(await crypto.subtle.sign({ name: "RSA-PSS", saltLength: 128 }, await this.privateKey, data));
    }
    async verifyBinary(data, signature) {
        return crypto.subtle.verify({ name: "RSA-PSS", saltLength: 128 }, await this.publicKey, signature, data);
    }
}

var Signer;
(function (Signer) {
    let Algorithm;
    (function (Algorithm) {
        Algorithm.is = Algorithm$1.is;
    })(Algorithm = Signer.Algorithm || (Signer.Algorithm = {}));
    let Hash$1;
    (function (Hash$1) {
        Hash$1.is = Hash.is;
    })(Hash$1 = Signer.Hash || (Signer.Hash = {}));
    function create(algorithm, hash, ...keys) {
        let result;
        switch (algorithm) {
            case "HMAC":
                if (hash != undefined)
                    result = new HMAC(hash, keys[0]);
                break;
            case "RSA":
                if (hash != undefined)
                    result = new RSA(hash, keys[0], keys[1]);
                break;
            case "RSA-PSS":
                if (hash != undefined)
                    result = new RSAPSS(hash, keys[0], keys[1]);
                break;
            case "ECDSA":
                if (hash != undefined)
                    result = new ECDSA(hash, keys[0], keys[1]);
                break;
            case "None":
                result = new None();
        }
        return result;
    }
    Signer.create = create;
})(Signer || (Signer = {}));

if (!Uint8Array.__proto__.from) {
    ;
    (() => {
        Uint8Array.__proto__.from = function (object, theFunction, thisObject) {
            const typedArrayClass = Uint8Array.__proto__;
            if (typeof this !== "function") {
                throw new TypeError("# is not a constructor");
            }
            if (this.__proto__ !== typedArrayClass) {
                throw new TypeError("this is not a typed array.");
            }
            theFunction = theFunction || (element => element);
            if (typeof theFunction !== "function") {
                throw new TypeError("specified argument is not a function");
            }
            object = Object(object);
            if (!object.length) {
                return new this(0);
            }
            let copyData = [];
            for (const data of copyData) {
                copyData.push(data);
            }
            copyData = copyData.map(theFunction, thisObject);
            const typedArray = new this(copyData.length);
            for (let i = 0; i < typedArray.length; i++) {
                typedArray[i] = copyData[i];
            }
            return typedArray;
        };
    })();
}

var __awaiter$4 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Converter$1 {
    constructor(conversionMap) {
        this.conversionMap = conversionMap;
    }
    apply(payload) {
        return __awaiter$4(this, void 0, void 0, function* () {
            return payload && this.convert(payload, true);
        });
    }
    reverse(payload) {
        return __awaiter$4(this, void 0, void 0, function* () {
            return payload && this.convert(payload, false);
        });
    }
    convert(payload, forward) {
        return __awaiter$4(this, void 0, void 0, function* () {
            for (const key in this.conversionMap) {
                const fnction = forward ? this.conversionMap[key].forward : this.conversionMap[key].backward;
                const property = key.split(".");
                payload = yield this.convertProperty(payload, property, fnction);
            }
            return payload;
        });
    }
    convertProperty(payload, property, fnction) {
        return __awaiter$4(this, void 0, void 0, function* () {
            const result = Object.assign({}, payload);
            if (result[property[0]])
                result[property[0]] =
                    property.length == 1
                        ? yield fnction(result[property[0]])
                        : yield this.convertProperty(result[property[0]], property.slice(1), fnction);
            return result;
        });
    }
}

var Converter;
(function (Converter) {
    function is(value) {
        return typeof value == "object" && Object.entries(value).every(v => typeof v == "function");
    }
    Converter.is = is;
})(Converter || (Converter = {}));

var Crypto$1;
(function (Crypto) {
    function is(value) {
        return Array.isArray(value) && value.every(v => typeof v == "string");
    }
    Crypto.is = is;
})(Crypto$1 || (Crypto$1 = {}));

var Renamer$1;
(function (Renamer) {
    function is(value) {
        return typeof value == "object" && Object.entries(value).every(thing => typeof thing[1] == "string");
    }
    Renamer.is = is;
})(Renamer$1 || (Renamer$1 = {}));

var Creatable$3;
(function (Creatable) {
    function is(value) {
        return Crypto$1.is(value) || Converter.is(value) || Renamer$1.is(value);
    }
    Creatable.is = is;
    let Converter$1;
    (function (Converter$1) {
        Converter$1.is = Converter.is;
    })(Converter$1 = Creatable.Converter || (Creatable.Converter = {}));
    let Crypto;
    (function (Crypto) {
        Crypto.is = Crypto$1.is;
    })(Crypto = Creatable.Crypto || (Creatable.Crypto = {}));
    let Renamer;
    (function (Renamer) {
        Renamer.is = Renamer$1.is;
    })(Renamer = Creatable.Renamer || (Creatable.Renamer = {}));
})(Creatable$3 || (Creatable$3 = {}));

class Remover {
    constructor(toRemove) {
        this.toRemove = toRemove;
    }
    apply(payload) {
        return payload && this.removeFrom(payload);
    }
    reverse(payload) {
        return payload && this.removeFrom(payload);
    }
    removeFrom(payload) {
        let result = Object.assign({}, payload);
        this.toRemove.forEach(str => {
            const property = str.split(".");
            result = this.removeProperty(result, property);
        });
        return result;
    }
    removeProperty(payload, property) {
        const result = Object.assign({}, payload);
        if (result[property[0]])
            if (property.length == 1)
                delete result[property[0]];
            else
                result[property[0]] = this.removeProperty(result[property[0]], property.slice(1));
        return result;
    }
    static create(toRemove) {
        return toRemove.length == 0 ? undefined : new Remover(toRemove);
    }
}

var __awaiter$3 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Crypto {
    constructor(secret, ...properties) {
        this.secret = secret;
        this.encoder = new TextEncoder();
        this.decoder = new TextDecoder();
        this.properties = properties.map(p => p.split("."));
    }
    apply(payload) {
        return __awaiter$3(this, void 0, void 0, function* () {
            return (payload &&
                this.process(payload, value => this.encoder.encode(JSON.stringify(value)), value => encode$1(value, "url")));
        });
    }
    reverse(payload) {
        return __awaiter$3(this, void 0, void 0, function* () {
            return (payload &&
                this.process(payload, value => (typeof value == "string" ? decode$1(value, "url") : new Uint8Array()), value => JSON.parse(this.decoder.decode(value))));
        });
    }
    process(payload, preprocess, postprocess) {
        return __awaiter$3(this, void 0, void 0, function* () {
            const secret = this.secret + payload.sub + payload.iat;
            for (const property of this.properties)
                payload = yield this.processProperty(payload, property, secret + property.join("."), preprocess, postprocess);
            return payload;
        });
    }
    processProperty(payload, property, secret, preprocess, postprocess) {
        return __awaiter$3(this, void 0, void 0, function* () {
            const result = Object.assign({}, payload);
            if (result[property[0]])
                if (property.length == 1) {
                    const data = preprocess(payload[property[0]]);
                    const key = yield new Digest("SHA-512").digest(this.encoder.encode(secret));
                    const processed = new Uint8Array(data.length);
                    for (let index = 0; index < data.length; index++)
                        processed[index] = data[index] ^ key[index];
                    result[property[0]] = postprocess(processed);
                }
                else
                    result[property[0]] = yield this.processProperty(result[property[0]], property.slice(1), secret, preprocess, postprocess);
            return result;
        });
    }
    static create(secret, ...properties) {
        return secret ? new Crypto(secret, ...properties) : Remover.create(properties);
    }
}

class Renamer {
    constructor(forwardTransformMap) {
        this.forwardTransformMap = forwardTransformMap;
        this.createBackwardTransformMap();
    }
    createBackwardTransformMap() {
        const result = {};
        for (const key in this.forwardTransformMap) {
            result[this.forwardTransformMap[key]] = key;
        }
        this.backwardTransformMap = result ? result : {};
    }
    apply(payload) {
        return payload && this.remap(payload, true);
    }
    reverse(payload) {
        return payload && this.remap(payload, false);
    }
    remap(payload, forward) {
        const transformMap = forward ? this.forwardTransformMap : this.backwardTransformMap;
        const result = {};
        for (const key in payload)
            if (key in transformMap)
                result[transformMap[key]] = this.resolve(payload[key], forward);
            else
                result[key] = this.resolve(payload[key], forward);
        return result;
    }
    resolve(payload, forward) {
        let result;
        if (Array.isArray(payload)) {
            result = [];
            payload.forEach(value => result.push(this.resolve(value, forward)));
        }
        else
            result = typeof payload == "object" ? this.remap(payload, forward) : payload;
        return result;
    }
}

var Transformer;
(function (Transformer) {
    function is(value) {
        return typeof value == "object" && typeof value.apply == "function" && typeof value.reverse == "function";
    }
    Transformer.is = is;
    function create(transformer) {
        return {
            apply: transformer.apply ? transformer.apply : (v) => v,
            reverse: transformer.reverse ? transformer.reverse : (v) => v,
        };
    }
    Transformer.create = create;
})(Transformer || (Transformer = {}));

class Typeguard {
    constructor(...is) {
        this.is = is;
    }
    apply(payload) {
        return this.is.some(f => f(payload)) ? payload : undefined;
    }
    reverse(payload) {
        return this.is.some(f => f(payload)) ? payload : undefined;
    }
}

class Actor {
    constructor(id) {
        this.id = id;
        this.transformers = [];
    }
    add(...argument) {
        argument.forEach(value => value && this.transformers.push(Creatable$3.is(value) ? this.creatableToTransformer(value) : value));
        return this;
    }
    creatableToTransformer(creatable) {
        return Creatable$3.Converter.is(creatable)
            ? new Converter$1(creatable)
            : Creatable$3.Crypto.is(creatable)
                ? Crypto.create(creatable[0], ...creatable.slice(1))
                : new Renamer(creatable);
    }
}

var Asymmetric;
(function (Asymmetric) {
    function is(value) {
        return (value == "RS256" ||
            value == "RS384" ||
            value == "RS512" ||
            value == "ES256" ||
            value == "ES384" ||
            value == "ES512" ||
            value == "PS256" ||
            value == "PS384" ||
            value == "PS512");
    }
    Asymmetric.is = is;
})(Asymmetric || (Asymmetric = {}));

var Symmetric;
(function (Symmetric) {
    function is(value) {
        return value == "HS256" || value == "HS384" || value == "HS512";
    }
    Symmetric.is = is;
})(Symmetric || (Symmetric = {}));

var Name$1;
(function (Name) {
    function is(value) {
        return value == "none" || Symmetric.is(value) || Asymmetric.is(value);
    }
    Name.is = is;
    let Symmetric$1;
    (function (Symmetric$1) {
        Symmetric$1.is = Symmetric.is;
    })(Symmetric$1 = Name.Symmetric || (Name.Symmetric = {}));
    let Asymmetric$1;
    (function (Asymmetric$1) {
        Asymmetric$1.is = Asymmetric.is;
    })(Asymmetric$1 = Name.Asymmetric || (Name.Asymmetric = {}));
})(Name$1 || (Name$1 = {}));

var __awaiter$2 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Algorithm {
    constructor(name, signer) {
        this.name = name;
        this.signer = signer;
    }
    sign(data) {
        return __awaiter$2(this, void 0, void 0, function* () {
            return typeof data == "string" ? this.signer.sign(data) : this.signer.sign(data);
        });
    }
    verify(data, signature) {
        return this.signer.verify(data, signature);
    }
    static create(name, ...keys) {
        let result;
        switch (name) {
            case "ES256":
                result = Signer.create("ECDSA", "SHA-256", keys[0], keys[1]);
                break;
            case "ES384":
                result = Signer.create("ECDSA", "SHA-384", keys[0], keys[1]);
                break;
            case "ES512":
                result = Signer.create("ECDSA", "SHA-512", keys[0], keys[1]);
                break;
            case "PS256":
                result = Signer.create("RSA-PSS", "SHA-256", keys[0], keys[1]);
                break;
            case "PS384":
                result = Signer.create("RSA-PSS", "SHA-384", keys[0], keys[1]);
                break;
            case "PS512":
                result = Signer.create("RSA-PSS", "SHA-512", keys[0], keys[1]);
                break;
            case "HS256":
                result = Signer.create("HMAC", "SHA-256", keys[0]);
                break;
            case "HS384":
                result = Signer.create("HMAC", "SHA-384", keys[0]);
                break;
            case "HS512":
                result = Signer.create("HMAC", "SHA-512", keys[0]);
                break;
            case "RS256":
                result = Signer.create("RSA", "SHA-256", keys[0], keys[1]);
                break;
            case "RS384":
                result = Signer.create("RSA", "SHA-384", keys[0], keys[1]);
                break;
            case "RS512":
                result = Signer.create("RSA", "SHA-512", keys[0], keys[1]);
                break;
            case "none":
                result = Signer.create("None");
                break;
        }
        return result && new Algorithm(name, result);
    }
    static none() {
        return Algorithm.create("none");
    }
    static HS256(key) {
        return Algorithm.create("HS256", key);
    }
    static HS384(key) {
        return Algorithm.create("HS384", key);
    }
    static HS512(key) {
        return Algorithm.create("HS512", key);
    }
    static RS256(publicKey, privateKey) {
        return Algorithm.create("RS256", publicKey, privateKey);
    }
    static RS384(publicKey, privateKey) {
        return Algorithm.create("RS384", publicKey, privateKey);
    }
    static RS512(publicKey, privateKey) {
        return Algorithm.create("RS512", publicKey, privateKey);
    }
    static ES256(publicKey, privateKey) {
        return Algorithm.create("ES256", publicKey, privateKey);
    }
    static ES384(publicKey, privateKey) {
        return Algorithm.create("ES384", publicKey, privateKey);
    }
    static ES512(publicKey, privateKey) {
        return Algorithm.create("ES512", publicKey, privateKey);
    }
    static PS256(publicKey, privateKey) {
        return Algorithm.create("PS256", publicKey, privateKey);
    }
    static PS384(publicKey, privateKey) {
        return Algorithm.create("PS384", publicKey, privateKey);
    }
    static PS512(publicKey, privateKey) {
        return Algorithm.create("PS512", publicKey, privateKey);
    }
}
(function (Algorithm) {
    let Name;
    (function (Name) {
        Name.is = Name$1.is;
        let Symmetric;
        (function (Symmetric) {
            Symmetric.is = Name$1.Symmetric.is;
        })(Symmetric = Name.Symmetric || (Name.Symmetric = {}));
        let Asymmetric;
        (function (Asymmetric) {
            Asymmetric.is = Name$1.Asymmetric.is;
        })(Asymmetric = Name.Asymmetric || (Name.Asymmetric = {}));
    })(Name = Algorithm.Name || (Algorithm.Name = {}));
})(Algorithm || (Algorithm = {}));

var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Issuer extends Actor {
    constructor(issuer, algorithm) {
        super(issuer);
        this.algorithm = algorithm;
    }
    get header() {
        return {
            alg: this.algorithm.name,
            typ: "JWT",
        };
    }
    get payload() {
        const result = { iss: this.id, iat: Issuer.issuedAt };
        if (this.audience)
            result.aud = this.audience;
        if (this.duration && result.iat)
            result.exp = result.iat + this.duration;
        return result;
    }
    sign(payload, issuedAt) {
        return __awaiter$1(this, void 0, void 0, function* () {
            payload = Object.assign(Object.assign({}, this.payload), payload);
            if (issuedAt)
                payload.iat = typeof issuedAt == "number" ? issuedAt : issuedAt.getTime() / 1000;
            const transformed = yield this.transformers.reduce((p, c) => __awaiter$1(this, void 0, void 0, function* () { return c.apply(yield p); }), Promise.resolve(payload));
            const data = transformed &&
                `${encode$1(new TextEncoder().encode(JSON.stringify(this.header)), "url")}.${encode$1(new TextEncoder().encode(JSON.stringify(transformed)), "url")}`;
            return data && `${data}.${yield this.algorithm.sign(data)}`;
        });
    }
    static get issuedAt() {
        return Issuer.defaultIssuedAt == undefined
            ? Math.floor(Date.now() / 1000)
            : typeof Issuer.defaultIssuedAt == "number"
                ? Issuer.defaultIssuedAt
                : Math.floor(Issuer.defaultIssuedAt.getTime() / 1000);
    }
    static create(issuer, algorithm) {
        return (algorithm && new Issuer(issuer, algorithm)) || undefined;
    }
}

var Token;
(function (Token) {
    function is(value) {
        return typeof value == "string" && /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(value);
    }
    Token.is = is;
})(Token || (Token = {}));

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Verifier extends Actor {
    constructor(...algorithms) {
        super();
        if (algorithms.length > 0) {
            this.algorithms = {};
            for (const algorithm of algorithms)
                if (this.algorithms[algorithm.name])
                    this.algorithms[algorithm.name].push(algorithm);
                else
                    this.algorithms[algorithm.name] = [algorithm];
        }
        else
            this.algorithms = undefined;
    }
    verify(token, ...audience) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            if (token) {
                const splitted = token.split(".", 3);
                if (splitted.length < 2)
                    result = undefined;
                else {
                    try {
                        const oldDecoder = token.includes("/") || token.includes("+");
                        const header = JSON.parse(new TextDecoder().decode(decode$1(splitted[0], oldDecoder ? "standard" : "url")));
                        result = JSON.parse(new TextDecoder().decode(decode$1(splitted[1], oldDecoder ? "standard" : "url")));
                        if (this.algorithms) {
                            const algorithm = this.algorithms[header.alg];
                            result =
                                splitted.length == 3 &&
                                    algorithm &&
                                    algorithm.some((a) => __awaiter(this, void 0, void 0, function* () { return yield a.verify(`${splitted[0]}.${splitted[1]}`, splitted[2]); }))
                                    ? result
                                    : undefined;
                        }
                    }
                    catch (_a) {
                        result = undefined;
                    }
                    result = result && this.verifyAudience(result.aud, audience) ? result : undefined;
                    if (result) {
                        const now = Math.floor(Date.now() / 1000);
                        if ((result === null || result === void 0 ? void 0 : result.iat) && result.iat > 1000000000000)
                            result.iat = Math.floor(result.iat / 1000);
                        if ((result === null || result === void 0 ? void 0 : result.exp) && result.exp > 1000000000000)
                            result.exp = Math.floor(result.exp / 1000);
                        result =
                            (result.exp == undefined || result.exp > now) && (result.iat == undefined || result.iat <= now)
                                ? result
                                : undefined;
                    }
                    if (result) {
                        result.token = token;
                        result = yield this.transformers.reduceRight((p, c) => __awaiter(this, void 0, void 0, function* () { return c.reverse(yield p); }), Promise.resolve(result));
                    }
                }
            }
            return result;
        });
    }
    verifyAudience(audience, allowed) {
        return (audience == undefined ||
            allowed.length == 0 ||
            (typeof audience == "string" && allowed.some(a => a == audience)) ||
            (Array.isArray(audience) && audience.some(a => allowed.some(ta => ta == a))));
    }
    authenticate(authorization, ...audience) {
        return __awaiter(this, void 0, void 0, function* () {
            return authorization && authorization.startsWith("Bearer ")
                ? this.verify(authorization.substr(7), ...audience)
                : undefined;
        });
    }
    static create(...algorithms) {
        return (((algorithms.length == 0 || algorithms.some(a => !!a)) &&
            new Verifier(...algorithms.filter(a => !!a))) ||
            undefined);
    }
}

var Credentials;
(function (Credentials) {
    function is(value) {
        return (typeof value == "object" && typeof value.user == "string" && value.user != "" && typeof value.password == "string");
    }
    Credentials.is = is;
    function fromBasic(login) {
        let result;
        if (login && login.substring(0, 6).toLowerCase() == "basic ") {
            const data = new TextDecoder().decode(decode$1(login.substring(6), "standard")).split(":");
            result = data.length == 2 ? { user: data[0], password: data[1] } : undefined;
        }
        return result;
    }
    Credentials.fromBasic = fromBasic;
    function toBasic(credentials) {
        return `Basic ${encode$1(new TextEncoder().encode(credentials.user + ":" + credentials.password), "standard", "=")}`;
    }
    Credentials.toBasic = toBasic;
})(Credentials || (Credentials = {}));

var Creatable$2;
(function (Creatable) {
    function is(value) {
        return (typeof value == "object" &&
            typeof value.email == "string" &&
            typeof value.name == "object" &&
            typeof value.name.first == "string" &&
            typeof value.name.last == "string" &&
            typeof value.permissions == "object" &&
            Object.keys(value.permissions).includes("*") &&
            Object.entries(value.permissions).every(([k, v]) => typeof k == "string" && typeof v == "string") &&
            Object.keys(value.permissions).includes("*"));
    }
    Creatable.is = is;
})(Creatable$2 || (Creatable$2 = {}));

const transformers = [
    new Renamer({
        issuer: "iss",
        audience: "aud",
        issued: "iat",
        expires: "exp",
        email: "sub",
        permissions: "prm",
        name: "nam",
        token: "tok",
    }),
];
const publicKeys = {
    saaswidget: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuqU98n52HN6Up2jO79MDvwnVc3nJrg8ahe40qarkvKGYDPP7TTJIM5JMMHFLQDk/dvRuFFvxmOFj29lI1shqICAhktOyQWB+BdwmnNuKwK1k6vwHGPPdijP7gZMeUXifO0BPbb+swtbwkATx+YT90haNi0Be3b7oUVOalnUC1LaEIT8xw+vSCs/wIdYkizNJl67d+6nHkeSOkkv8oAzaLU6OosflrGYk5IMeSuEJgw7TCM8jVSnqIVluGV0QtGGnZMuhFI3Rwc9L7ZbFaraX8RrcdR1S2MG8qksJwcL5QOzR02pHkFNtAg2LQcf0Lio6JOVAdGh1hCbHvGL46UfA1QIDAQAB",
    wrangler: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuqU98n52HN6Up2jO79MDvwnVc3nJrg8ahe40qarkvKGYDPP7TTJIM5JMMHFLQDk/dvRuFFvxmOFj29lI1shqICAhktOyQWB+BdwmnNuKwK1k6vwHGPPdijP7gZMeUXifO0BPbb+swtbwkATx+YT90haNi0Be3b7oUVOalnUC1LaEIT8xw+vSCs/wIdYkizNJl67d+6nHkeSOkkv8oAzaLU6OosflrGYk5IMeSuEJgw7TCM8jVSnqIVluGV0QtGGnZMuhFI3Rwc9L7ZbFaraX8RrcdR1S2MG8qksJwcL5QOzR02pHkFNtAg2LQcf0Lio6JOVAdGh1hCbHvGL46UfA1QIDAQAB",
};
var Key;
(function (Key) {
    function is(value) {
        return (Creatable$2.is(value) &&
            typeof value.issuer == "string" &&
            typeof value.audience == "string" &&
            DateTime.is(value.issued) &&
            DateTime.is(value.expires) &&
            typeof value.token == "string");
    }
    Key.is = is;
    function isIssuer(value) {
        return Object.keys(publicKeys).includes(value);
    }
    Key.isIssuer = isIssuer;
    async function unpack(token) {
        let result;
        const textDecoder = new TextDecoder();
        if (token.split(".").length == 3) {
            const issuer = JSON.parse(textDecoder.decode(decode$1(token.split(".")[1])))["iss"];
            if (Object.keys(publicKeys).includes(issuer) && token.split(".").pop()) {
                const verifier = Signed.Verifier.create(issuer);
                result = await verifier.verify(token);
            }
            else {
                const verifier = Unsigned.Verifier.create();
                result = await verifier.verify(token);
            }
        }
        else
            result = undefined;
        return result;
    }
    Key.unpack = unpack;
    let Signed;
    (function (Signed) {
        let Issuer$1;
        (function (Issuer$1) {
            function create(issuer, privateKey, audience) {
                const result = Issuer.create(issuer, Algorithm.RS256(undefined, privateKey)).add(...transformers);
                result.audience = audience;
                result.duration = 60 * 60 * 12;
                return result;
            }
            Issuer$1.create = create;
        })(Issuer$1 = Signed.Issuer || (Signed.Issuer = {}));
        let Verifier$1;
        (function (Verifier$1) {
            function create(issuer) {
                return Verifier.create(Algorithm.RS256(publicKeys[issuer])).add(...transformers);
            }
            Verifier$1.create = create;
        })(Verifier$1 = Signed.Verifier || (Signed.Verifier = {}));
    })(Signed = Key.Signed || (Key.Signed = {}));
    let Unsigned;
    (function (Unsigned) {
        let Issuer$1;
        (function (Issuer$1) {
            function create(issuer, audience) {
                const result = Issuer.create(issuer, Algorithm.none()).add(...transformers);
                result.audience = audience;
                result.duration = 60 * 60 * 12;
                return result;
            }
            Issuer$1.create = create;
        })(Issuer$1 = Unsigned.Issuer || (Unsigned.Issuer = {}));
        let Verifier$1;
        (function (Verifier$1) {
            function create() {
                return Verifier.create(Algorithm.none()).add(...transformers);
            }
            Verifier$1.create = create;
        })(Verifier$1 = Unsigned.Verifier || (Unsigned.Verifier = {}));
    })(Unsigned = Key.Unsigned || (Key.Unsigned = {}));
    Key.Creatable = Creatable$2;
})(Key || (Key = {}));

var Name;
(function (Name) {
    function is(value) {
        return typeof value == "object" && typeof value.first == "string" && typeof value.last == "string";
    }
    Name.is = is;
})(Name || (Name = {}));

var Set;
(function (Set) {
    function is(value) {
        return typeof value == "object" && value.new == "string" && value.repeat == "string";
    }
    Set.is = is;
})(Set || (Set = {}));

var Change;
(function (Change) {
    function is(value) {
        return Set.is(value) && typeof value.old == "string";
    }
    Change.is = is;
})(Change || (Change = {}));

var Password;
(function (Password) {
    function is(value) {
        return Set.is(value) || Change.is(value);
    }
    Password.is = is;
    Password.Change = Change;
    Password.Set = Set;
})(Password || (Password = {}));

var User;
(function (User) {
    function is(value) {
        return (typeof value == "object" &&
            Name.is(value.name) &&
            typeof value.permissions == "object" &&
            Object.entries(value.permissions).every(([appId, org]) => typeof appId == "string" &&
                typeof org == "object" &&
                org != null &&
                Object.entries(org).every(([orgId, permissions]) => typeof orgId == "string" && typeof permissions == "string")) &&
            DateTime.is(value.modified));
    }
    User.is = is;
    User.Name = Name;
    let Key$1;
    (function (Key$1) {
        Key$1.is = Key.is;
        Key$1.isIssuer = Key.isIssuer;
        Key$1.unpack = Key.unpack;
        let Unsigned;
        (function (Unsigned) {
            Unsigned.Issuer = Key.Unsigned.Issuer;
            Unsigned.Verifier = Key.Unsigned.Verifier;
        })(Unsigned = Key$1.Unsigned || (Key$1.Unsigned = {}));
        let Signed;
        (function (Signed) {
            Signed.Issuer = Key.Signed.Issuer;
            Signed.Verifier = Key.Signed.Verifier;
        })(Signed = Key$1.Signed || (Key$1.Signed = {}));
        Key$1.Creatable = Key.Creatable;
    })(Key$1 = User.Key || (User.Key = {}));
    User.Credentials = Credentials;
    let Password$1;
    (function (Password$1) {
        Password$1.Change = Password.Change;
        Password$1.Set = Password.Set;
    })(Password$1 = User.Password || (User.Password = {}));
})(User || (User = {}));

var Creatable$1;
(function (Creatable) {
    function is(value) {
        return typeof value == "object" && typeof value.name == "string";
    }
    Creatable.is = is;
})(Creatable$1 || (Creatable$1 = {}));

var Organization;
(function (Organization) {
    function is(value) {
        return (Organization.Creatable.is(value) &&
            typeof value.name == "string" &&
            Array.isArray(value.users) &&
            value.users.every(user => typeof user == "string") &&
            DateTime.is(value.modified));
    }
    Organization.is = is;
    Organization.Creatable = Creatable$1;
})(Organization || (Organization = {}));

var Creatable;
(function (Creatable) {
    function is(value) {
        return (typeof value == "object" &&
            typeof value.name == "string" &&
            typeof value.permissions == "string" &&
            typeof value.organizations == "object" &&
            Object.entries(value.organizations).every(([k, v]) => typeof k == "string" && Organization.is(v)));
    }
    Creatable.is = is;
})(Creatable || (Creatable = {}));

var Application;
(function (Application) {
    function is(value) {
        return Application.Creatable.is(value) && typeof value.id == "string" && DateTime.is(value.modified);
    }
    Application.is = is;
    Application.Creatable = Creatable;
})(Application || (Application = {}));

export { User as U };

//# sourceMappingURL=index-5e02d811.js.map