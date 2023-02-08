import React, { useState } from "react";
import './SAC.css';

const SAC = ({handleClick3}) => {

    
    const SALARIOS = {
        "11": {
            "202204": {
                salarioBase: 87188.65,
                mes: 0.06
            },
            "202205": {
                salarioBase: 87188.65,
                mes: 0.12
            },
            "202206": {
                salarioBase: 87188.65,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 87188.65,
                mes: 0.18
            },
            "202208": {
                salarioBase: 87188.65,
                mes: 0.38
            },
            "202209": {
                salarioBase: 87188.65,
                mes: 0.48
            },
            "202210": {
                salarioBase: 87188.65,
                mes: 0.48
            },
            "202211": {
                salarioBase: 87188.65,
                mes: 0.59
            },
            "202212": {
                salarioBase: 87188.65,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 87188.65,
                mes: 0.60
            },
            "202302": {
                salarioBase: 105267.22,
                mes: 0.49
            },
            "202303": {
                salarioBase: 120824.52,
                mes: 0.43
            },
            "202304": {
                salarioBase: 172701.76,
                mes: 0.00
            }
        },
        "12": {
            "202204": {
                salarioBase: 87441.01,
                mes: 0.06
            },
            "202205": {
                salarioBase: 87441.01,
                mes: 0.12
            },
            "202206": {
                salarioBase: 87441.01,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 87441.01,
                mes: 0.18
            },
            "202208": {
                salarioBase: 87441.01,
                mes: 0.39
            },
            "202209": {
                salarioBase: 87441.01,
                mes: 0.49
            },
            "202210": {
                salarioBase: 87441.01,
                mes: 0.49
            },
            "202211": {
                salarioBase: 87441.01,
                mes: 0.59
            },
            "202212": {
                salarioBase: 87441.01,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 87441.01,
                mes: 0.59
            },
            "202302": {
                salarioBase: 105571.90,
                mes: 0.49
            },
            "202303": {
                salarioBase: 121174.23,
                mes: 0.43
            },
            "202304": {
                salarioBase: 173201.63,
                mes: 0.00
            }
        },
        "13": {
            "202204": {
                salarioBase: 88325.25,
                mes: 0.06
            },
            "202205": {
                salarioBase: 88325.25,
                mes: 0.12
            },
            "202206": {
                salarioBase: 88325.25,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 88325.25,
                mes: 0.18
            },
            "202208": {
                salarioBase: 88325.25,
                mes: 0.39
            },
            "202209": {
                salarioBase: 88325.25,
                mes: 0.49
            },
            "202210": {
                salarioBase: 88325.25,
                mes: 0.49
            },
            "202211": {
                salarioBase: 88325.25,
                mes: 0.59
            },
            "202212": {
                salarioBase: 88325.25,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 88325.25,
                mes: 0.59
            },
            "202302": {
                salarioBase: 106639.49,
                mes: 0.49
            },
            "202303": {
                salarioBase: 122399.60,
                mes: 0.43
            },
            "202304": {
                salarioBase: 174953.12,
                mes: 0.00
            }
        },
        "21": {
            "202204": {
                salarioBase: 88135.92,
                mes: 0.06
            },
            "202205": {
                salarioBase: 88135.92,
                mes: 0.12
            },
            "202206": {
                salarioBase: 88135.92,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 88135.92,
                mes: 0.18
            },
            "202208": {
                salarioBase: 88135.92,
                mes: 0.39
            },
            "202209": {
                salarioBase: 88135.92,
                mes: 0.49
            },
            "202210": {
                salarioBase: 88135.92,
                mes: 0.49
            },
            "202211": {
                salarioBase: 88135.92,
                mes: 0.59
            },
            "202212": {
                salarioBase: 88135.92,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 88135.92,
                mes: 0.59
            },
            "202302": {
                salarioBase: 106410.91,
                mes: 0.49
            },
            "202303": {
                salarioBase: 122137.24,
                mes: 0.43
            },
            "202304": {
                salarioBase: 174578.12,
                mes: 0.00
            }
        },
        "22": {
            "202204": {
                salarioBase: 88515.16,
                mes: 0.06
            },
            "202205": {
                salarioBase: 88515.16,
                mes: 0.12
            },
            "202206": {
                salarioBase: 88515.16,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 88515.16,
                mes: 0.18
            },
            "202208": {
                salarioBase: 88515.16,
                mes: 0.39
            },
            "202209": {
                salarioBase: 88515.16,
                mes: 0.49
            },
            "202210": {
                salarioBase: 88515.16,
                mes: 0.49
            },
            "202211": {
                salarioBase: 88515.16,
                mes: 0.59
            },
            "202212": {
                salarioBase: 88515.16,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 88515.16,
                mes: 0.59
            },
            "202302": {
                salarioBase: 106868.78,
                mes: 0.49
            },
            "202303": {
                salarioBase: 122662.77,
                mes: 0.43
            },
            "202304": {
                salarioBase: 175329.29,
                mes: 0.00
            }
        },
        "23": {
            "202204": {
                salarioBase: 88894.10,
                mes: 0.06
            },
            "202205": {
                salarioBase: 88894.10,
                mes: 0.12
            },
            "202206": {
                salarioBase: 88894.10,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 88894.10,
                mes: 0.18
            },
            "202208": {
                salarioBase: 88894.10,
                mes: 0.39
            },
            "202209": {
                salarioBase: 88894.10,
                mes: 0.49
            },
            "202210": {
                salarioBase: 88894.10,
                mes: 0.49
            },
            "202211": {
                salarioBase: 88894.10,
                mes: 0.59
            },
            "202212": {
                salarioBase: 88894.10,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 88894.10,
                mes: 0.59
            },
            "202302": {
                salarioBase: 107326.29,
                mes: 0.49
            },
            "202303": {
                salarioBase: 123187.90,
                mes: 0.43
            },
            "202304": {
                salarioBase: 176079.89,
                mes: 0.00
            }
        },
        "24": {
            "202204": {
                salarioBase: 90031.28,
                mes: 0.06
            },
            "202205": {
                salarioBase: 90031.28,
                mes: 0.12
            },
            "202206": {
                salarioBase: 90031.28,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 90031.28,
                mes: 0.18
            },
            "202208": {
                salarioBase: 90031.28,
                mes: 0.39
            },
            "202209": {
                salarioBase: 90031.28,
                mes: 0.49
            },
            "202210": {
                salarioBase: 90031.28,
                mes: 0.49
            },
            "202211": {
                salarioBase: 90031.28,
                mes: 0.59
            },
            "202212": {
                salarioBase: 90031.28,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 90031.28,
                mes: 0.59
            },
            "202302": {
                salarioBase: 108699.27,
                mes: 0.49
            },
            "202303": {
                salarioBase: 124763.78,
                mes: 0.43
            },
            "202304": {
                salarioBase: 178332.39,
                mes: 0.00
            }
        },
        "25": {
            "202204": {
                salarioBase: 90978.63,
                mes: 0.06
            },
            "202205": {
                salarioBase: 90978.63,
                mes: 0.12
            },
            "202206": {
                salarioBase: 90978.63,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 90978.63,
                mes: 0.18
            },
            "202208": {
                salarioBase: 90978.63,
                mes: 0.39
            },
            "202209": {
                salarioBase: 90978.63,
                mes: 0.49
            },
            "202210": {
                salarioBase: 90978.63,
                mes: 0.49
            },
            "202211": {
                salarioBase: 90978.63,
                mes: 0.59
            },
            "202212": {
                salarioBase: 90978.63,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 90978.63,
                mes: 0.59
            },
            "202302": {
                salarioBase: 109843.05,
                mes: 0.49
            },
            "202303": {
                salarioBase: 126076.61,
                mes: 0.43
            },
            "202304": {
                salarioBase: 180208.90,
                mes: 0.00
            }
        },
        "26": {
            "202204": {
                salarioBase: 92368.44,
                mes: 0.06
            },
            "202205": {
                salarioBase: 92368.44,
                mes: 0.12
            },
            "202206": {
                salarioBase: 92368.44,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 92368.44,
                mes: 0.18
            },
            "202208": {
                salarioBase: 92368.44,
                mes: 0.39
            },
            "202209": {
                salarioBase: 92368.44,
                mes: 0.49
            },
            "202210": {
                salarioBase: 92368.44,
                mes: 0.49
            },
            "202211": {
                salarioBase: 92368.44,
                mes: 0.59
            },
            "202212": {
                salarioBase: 92368.44,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 92368.44,
                mes: 0.59
            },
            "202302": {
                salarioBase: 111521.03,
                mes: 0.49
            },
            "202303": {
                salarioBase: 128002.58,
                mes: 0.43
            },
            "202304": {
                salarioBase: 182961.80,
                mes: 0.00
            }
        },
        "31": {
            "202204": {
                salarioBase: 88451.66,
                mes: 0.06
            },
            "202205": {
                salarioBase: 88451.66,
                mes: 0.12
            },
            "202206": {
                salarioBase: 88451.66,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 88451.66,
                mes: 0.18
            },
            "202208": {
                salarioBase: 88451.66,
                mes: 0.39
            },
            "202209": {
                salarioBase: 88451.66,
                mes: 0.49
            },
            "202210": {
                salarioBase: 88451.66,
                mes: 0.49
            },
            "202211": {
                salarioBase: 88451.66,
                mes: 0.59
            },
            "202212": {
                salarioBase: 88451.66,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 88451.66,
                mes: 0.59
            },
            "202302": {
                salarioBase: 106792.12,
                mes: 0.49
            },
            "202303": {
                salarioBase: 122574.78,
                mes: 0.43
            },
            "202304": {
                salarioBase: 175203.52,
                mes: 0.00
            }
        },
        "32": {
            "202204": {
                salarioBase: 88894.07,
                mes: 0.06
            },
            "202205": {
                salarioBase: 88894.07,
                mes: 0.12
            },
            "202206": {
                salarioBase: 88894.07,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 88894.07,
                mes: 0.18
            },
            "202208": {
                salarioBase: 88894.07,
                mes: 0.39
            },
            "202209": {
                salarioBase: 88894.07,
                mes: 0.49
            },
            "202210": {
                salarioBase: 88894.07,
                mes: 0.49
            },
            "202211": {
                salarioBase: 88894.07,
                mes: 0.59
            },
            "202212": {
                salarioBase: 88894.07,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 88894.07,
                mes: 0.59
            },
            "202302": {
                salarioBase: 107326.26,
                mes: 0.49
            },
            "202303": {
                salarioBase: 123187.86,
                mes: 0.43
            },
            "202304": {
                salarioBase: 176079.83,
                mes: 0.00
            }
        },
        "33": {
            "202204": {
                salarioBase: 89462.64,
                mes: 0.06
            },
            "202205": {
                salarioBase: 89462.64,
                mes: 0.12
            },
            "202206": {
                salarioBase: 89462.64,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 89462.64,
                mes: 0.18
            },
            "202208": {
                salarioBase: 89462.64,
                mes: 0.39
            },
            "202209": {
                salarioBase: 89462.64,
                mes: 0.49
            },
            "202210": {
                salarioBase: 89462.64,
                mes: 0.49
            },
            "202211": {
                salarioBase: 89462.64,
                mes: 0.59
            },
            "202212": {
                salarioBase: 89462.64,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 89462.64,
                mes: 0.59
            },
            "202302": {
                salarioBase: 108012.72,
                mes: 0.49
            },
            "202303": {
                salarioBase: 123975.77,
                mes: 0.43
            },
            "202304": {
                salarioBase: 177206.04,
                mes: 0.00
            }
        },
        "41": {
            "202204": {
                salarioBase: 88451.66,
                mes: 0.06
            },
            "202205": {
                salarioBase: 88451.66,
                mes: 0.12
            },
            "202206": {
                salarioBase: 88451.66,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 88451.66,
                mes: 0.18
            },
            "202208": {
                salarioBase: 88451.66,
                mes: 0.39
            },
            "202209": {
                salarioBase: 88451.66,
                mes: 0.49
            },
            "202210": {
                salarioBase: 88451.66,
                mes: 0.49
            },
            "202211": {
                salarioBase: 88451.66,
                mes: 0.59
            },
            "202212": {
                salarioBase: 88451.66,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 88451.66,
                mes: 0.59
            },
            "202302": {
                salarioBase: 106792.12,
                mes: 0.49
            },
            "202303": {
                salarioBase: 122574.78,
                mes: 0.43
            },
            "202304": {
                salarioBase: 175203.52,
                mes: 0.00
            }
        },
        "42": {
            "202204": {
                salarioBase: 89083.39,
                mes: 0.06
            },
            "202205": {
                salarioBase: 89083.39,
                mes: 0.12
            },
            "202206": {
                salarioBase: 89083.39,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 89083.39,
                mes: 0.18
            },
            "202208": {
                salarioBase: 89083.39,
                mes: 0.39
            },
            "202209": {
                salarioBase: 89083.39,
                mes: 0.49
            },
            "202210": {
                salarioBase: 89083.39,
                mes: 0.49
            },
            "202211": {
                salarioBase: 89083.39,
                mes: 0.59
            },
            "202212": {
                salarioBase: 89083.39,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 89083.39,
                mes: 0.59
            },
            "202302": {
                salarioBase: 107554.83,
                mes: 0.49
            },
            "202303": {
                salarioBase: 123450.22,
                mes: 0.43
            },
            "202304": {
                salarioBase: 176454.84,
                mes: 0.00
            }
        },
        "43": {
            "202204": {
                salarioBase: 91168.17,
                mes: 0.06
            },
            "202205": {
                salarioBase: 91168.17,
                mes: 0.12
            },
            "202206": {
                salarioBase: 91168.17,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 91168.17,
                mes: 0.18
            },
            "202208": {
                salarioBase: 91168.17,
                mes: 0.39
            },
            "202209": {
                salarioBase: 91168.17,
                mes: 0.49
            },
            "202210": {
                salarioBase: 91168.17,
                mes: 0.49
            },
            "202211": {
                salarioBase: 91168.17,
                mes: 0.59
            },
            "202212": {
                salarioBase: 91168.17,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 91168.17,
                mes: 0.59
            },
            "202302": {
                salarioBase: 110071.89,
                mes: 0.49
            },
            "202303": {
                salarioBase: 126339.27,
                mes: 0.43
            },
            "202304": {
                salarioBase: 180584.33,
                mes: 0.00
            }
        },
        "51": {
            "202204": {
                salarioBase: 89210.05,
                mes: 0.06
            },
            "202205": {
                salarioBase: 89210.05,
                mes: 0.12
            },
            "202206": {
                salarioBase: 89210.05,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 89210.05,
                mes: 0.18
            },
            "202208": {
                salarioBase: 89210.05,
                mes: 0.39
            },
            "202209": {
                salarioBase: 89210.05,
                mes: 0.49
            },
            "202210": {
                salarioBase: 89210.05,
                mes: 0.49
            },
            "202211": {
                salarioBase: 89210.05,
                mes: 0.59
            },
            "202212": {
                salarioBase: 89210.05,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 89210.05,
                mes: 0.59
            },
            "202302": {
                salarioBase: 107707.76,
                mes: 0.49
            },
            "202303": {
                salarioBase: 123625.74,
                mes: 0.43
            },
            "202304": {
                salarioBase: 176705.72,
                mes: 0.00
            }
        },
        "52": {
            "202204": {
                salarioBase: 90347.00,
                mes: 0.06
            },
            "202205": {
                salarioBase: 90347.00,
                mes: 0.12
            },
            "202206": {
                salarioBase: 90347.00,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 90347.00,
                mes: 0.18
            },
            "202208": {
                salarioBase: 90347.00,
                mes: 0.39
            },
            "202209": {
                salarioBase: 90347.00,
                mes: 0.49
            },
            "202210": {
                salarioBase: 90347.00,
                mes: 0.49
            },
            "202211": {
                salarioBase: 90347.00,
                mes: 0.59
            },
            "202212": {
                salarioBase: 90347.00,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 90347.00,
                mes: 0.59
            },
            "202302": {
                salarioBase: 109080.44,
                mes: 0.49
            },
            "202303": {
                salarioBase: 125201.30,
                mes: 0.43
            },
            "202304": {
                salarioBase: 178957.76,
                mes: 0.00
            }
        },
        "61": {
            "202204": {
                salarioBase: 88451.66,
                mes: 0.06
            },
            "202205": {
                salarioBase: 88451.66,
                mes: 0.12
            },
            "202206": {
                salarioBase: 88451.66,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 88451.66,
                mes: 0.18
            },
            "202208": {
                salarioBase: 88451.66,
                mes: 0.39
            },
            "202209": {
                salarioBase: 88451.66,
                mes: 0.49
            },
            "202210": {
                salarioBase: 88451.66,
                mes: 0.49
            },
            "202211": {
                salarioBase: 88451.66,
                mes: 0.59
            },
            "202212": {
                salarioBase: 88451.66,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 88451.66,
                mes: 0.59
            },
            "202302": {
                salarioBase: 106792.12,
                mes: 0.49
            },
            "202303": {
                salarioBase: 122574.78,
                mes: 0.43
            },
            "202304": {
                salarioBase: 175203.52,
                mes: 0.00
            }
        },
        "62": {
            "202204": {
                salarioBase: 90347.23,
                mes: 0.06
            },
            "202205": {
                salarioBase: 90347.23,
                mes: 0.12
            },
            "202206": {
                salarioBase: 90347.23,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 90347.23,
                mes: 0.18
            },
            "202208": {
                salarioBase: 90347.23,
                mes: 0.39
            },
            "202209": {
                salarioBase: 90347.23,
                mes: 0.49
            },
            "202210": {
                salarioBase: 90347.23,
                mes: 0.49
            },
            "202211": {
                salarioBase: 90347.23,
                mes: 0.59
            },
            "202212": {
                salarioBase: 90347.23,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 90347.23,
                mes: 0.59
            },
            "202302": {
                salarioBase: 109080.73,
                mes: 0.49
            },
            "202303": {
                salarioBase: 125201.63,
                mes: 0.43
            },
            "202304": {
                salarioBase: 178958.23,
                mes: 0.00
            }
        },
        "63": {
            "202204": {
                salarioBase: 90978.63,
                mes: 0.06
            },
            "202205": {
                salarioBase: 90978.63,
                mes: 0.12
            },
            "202206": {
                salarioBase: 90978.63,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 90978.63,
                mes: 0.18
            },
            "202208": {
                salarioBase: 90978.63,
                mes: 0.39
            },
            "202209": {
                salarioBase: 90978.63,
                mes: 0.49
            },
            "202210": {
                salarioBase: 90978.63,
                mes: 0.49
            },
            "202211": {
                salarioBase: 90978.63,
                mes: 0.59
            },
            "202212": {
                salarioBase: 90978.63,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 90978.63,
                mes: 0.59
            },
            "202302": {
                salarioBase: 109843.05,
                mes: 0.49
            },
            "202303": {
                salarioBase: 126076.61,
                mes: 0.43
            },
            "202304": {
                salarioBase: 180208.90,
                mes: 0.00
            }
        },
        "64": {
            "202204": {
                salarioBase: 92368.44,
                mes: 0.06
            },
            "202205": {
                salarioBase: 92368.44,
                mes: 0.12
            },
            "202206": {
                salarioBase: 92368.44,
                mes: 0.18,
                sac: true
            },
            "202207": {
                salarioBase: 92368.44,
                mes: 0.18
            },
            "202208": {
                salarioBase: 92368.44,
                mes: 0.39
            },
            "202209": {
                salarioBase: 92368.44,
                mes: 0.49
            },
            "202210": {
                salarioBase: 92368.44,
                mes: 0.49
            },
            "202211": {
                salarioBase: 92368.44,
                mes: 0.59
            },
            "202212": {
                salarioBase: 92368.44,
                mes: 0.59,
                sac: true
            },
            "202301": {
                salarioBase: 92368.44,
                mes: 0.59
            },
            "202302": {
                salarioBase: 111521.03,
                mes: 0.49
            },
            "202303": {
                salarioBase: 128002.58,
                mes: 0.43
            },
            "202304": {
                salarioBase: 182961.80,
                mes: 0.00
            }
        },
    };

    const [category, setCategory] = useState("");
    const [month, setMonth] = useState("");
    const [ant, setAnt] = useState("");
    const [jornada, setJornada] = useState("");
    const [base, setBase] = useState("");
    const [agui, setAgui] = useState("");
    const [error, setError] = useState(true);

    var JOR = 0, ANT = 0, PRES = 0, SUM = 0, AGUI = 0, sBase = 0;

    const handleSubmit = e => {
        e.preventDefault();
        if(!category || !month || !ant || !jornada || category === "" || month === "" || ant === "" || jornada === "") {
            return;
        }
        if(base === ""){ sBase = SALARIOS[category][month].salarioBase} else { sBase = Number(base)};
        JOR = sBase * (Number(jornada)/8);
        ANT = JOR * Number(ant);
        PRES = (JOR + ANT) * 0.08333;
        SUM = JOR + ANT + PRES;
        AGUI = SUM/2
        setAgui(AGUI);
    }

    const handleErrase = () => {
        if(category === "" || month === "" || ant === "" || jornada === "") return;
        setCategory("");
        setMonth("");
        setAnt("");
        setJornada("");
        setBase("");
        setAgui("");
    }

    const handleClosure = () => {
        handleClick3(false);
        handleErrase();
    }

    return(
        <section id="SAC">
            <div className="SAC-style">
                <div className="SAC-title">
                    <h2>Calculadora de Aguinaldo (SAC)</h2>
                </div>
                <form onSubmit={handleSubmit}>
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <h4>Categoría</h4>
                            <select
                            class="form-select text-center"
                            type="text"
                            name="Category"
                            required
                            autoFocus
                            value={category}
                            onChange={(e) => { setCategory(e.target.value)}}>
                                <option defaultValue={""}>Elegí una opción</option>
                                <option value="11" >Maestranza A</option>
                                <option value="12" >Maestranza B</option>
                                <option value="13" >Maestranza C</option>
                                <option value="21" >Administrativo A</option>
                                <option value="22" >Administrativo B</option>
                                <option value="23" >Administrativo C</option>
                                <option value="24" >Administrativo D</option>
                                <option value="25" >Administrativo E</option>
                                <option value="26" >Administrativo F</option>
                                <option value="31" >Cajeros A</option>
                                <option value="32" >Cajeros B</option>
                                <option value="33" >Cajeros C</option>
                                <option value="41" >Auxiliar A</option>
                                <option value="42" >Auxiliar B</option>
                                <option value="43" >Auxiliar C</option>
                                <option value="51" >Auxiliar Especializado A</option>
                                <option value="52" >Auxiliar Especializado B</option>
                                <option value="61" >Vendedor A</option>
                                <option value="62" >Vendedor B</option>
                                <option value="63" >Vendedor C</option>
                                <option value="64" >Vendedor D</option>
                            </select>
                        </div>
                        <div class="col">
                            <h4>Mes de Cálculo</h4>
                            <select
                            class="form-select text-center"
                            type="text"
                            name="month"
                            //required
                            autoFocus
                            value={month}
                            onChange={(e) => { setMonth(e.target.value)}}>
                                <option defaultValue={"0"}>Elegí una opción</option>
                                <option value="202304" >Abr.2023</option>
                                <option value="202303" >Mar.2023</option>
                                <option value="202302" >Feb.2023</option>
                                <option value="202301" >Ene.2023</option>
                                <option value="202212" >Dic.2022</option>
                                <option value="202211">Nov.2022</option>
                                <option value="202210" >Oct.2022</option>
                                <option value="202209" >Sep.2022</option>
                                <option value="202208" >Ago.2022</option>
                                <option value="202207" >Jul.2022</option>
                                <option value="202206" >Jun.2022</option>
                                <option value="202205" >May.2022</option>
                                <option value="202204" >Abr.2022</option>
                            </select>
                        </div>
                        <div class="col">
                            <h4>Años de Antigüedad</h4>
                            <select
                            class="form-select text-center"
                            type="number"
                            name="ant"
                            required
                            //autoFocus
                            value={ant}
                            onChange={(e) => { setAnt(e.target.value)}}>
                                <option defaultValue={""}>Elegí una opción</option>
                                <option value="0.00">0</option>
                                <option value="0.01">1</option>
                                <option value="0.02">2</option>
                                <option value="0.03">3</option>
                                <option value="0.04">4</option>
                                <option value="0.05">5</option>
                                <option value="0.06">6</option>
                                <option value="0.07">7</option>
                                <option value="0.08">8</option>
                                <option value="0.09">9</option>
                                <option value="0.10">10</option>
                                <option value="0.11">11</option>
                                <option value="0.12">12</option>
                                <option value="0.13">13</option>
                                <option value="0.14">14</option>
                                <option value="0.15">15</option>
                                <option value="0.16">16</option>
                                <option value="0.17">17</option>
                                <option value="0.18">18</option>
                                <option value="0.19">19</option>
                                <option value="0.20">20</option>
                                <option value="0.21">21</option>
                                <option value="0.22">22</option>
                                <option value="0.23">23</option>
                                <option value="0.24">24</option>
                                <option value="0.25">25</option>
                                <option value="0.26">26</option>
                                <option value="0.27">27</option>
                                <option value="0.28">28</option>
                                <option value="0.29">29</option>
                                <option value="0.30">30</option>
                                <option value="0.31">31</option>
                                <option value="0.32">32</option>
                                <option value="0.33">33</option>
                                <option value="0.34">34</option>
                                <option value="0.35">35</option>
                                <option value="0.36">36</option>
                                <option value="0.37">37</option>
                                <option value="0.38">38</option>
                                <option value="0.39">39</option>
                                <option value="0.40">40</option>
                                <option value="0.41">41</option>
                                <option value="0.42">42</option>
                                <option value="0.43">43</option>
                                <option value="0.44">44</option>
                                <option value="0.45">45</option>
                                <option value="0.46">46</option>
                                <option value="0.47">47</option>
                                <option value="0.48">48</option>
                                <option value="0.49">49</option>
                                <option value="0.50">50</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <h4>Jornada</h4>
                            <select
                            class="form-select text-center"
                            type="number"
                            name="jornada"
                            required
                            //autoFocus
                            value={jornada}
                            onChange={(e) => { setJornada(e.target.value)}}>
                                <option defaultValue={""}>Elegí una opción</option>
                                <option value={4} >1/2 jornada (4hs)</option>
                                <option value={5} >5 hs.</option>
                                <option value={5.333} >2/3 Jornada</option>
                                <option value={6} >6 hs.</option>
                                <option value={8}>Jornada Completa (8hs)</option>
                            </select>
                        </div>
                    </div>
                </div>    
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <h4>Sueldo Base</h4>
                            <input type="number" class="form-control text-center" id="base" placeholder="Ingresá tu sueldo base (Opcional)" onChange={(e) => { setBase(e.target.value)}}></input>
                        </div>
                    </div>
                </div>
                </form>
                <div className="results">
                        <div className="extras-50"><h2 className="Sub-h2">Total Aguinaldo Base: ${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(agui)}</h2></div>
                    </div>
                <div className="Selector">
                    <div class="d-grid gap-2">
                            <button class="btn btn-success" type="submit" onClick={handleSubmit}>Simular</button>
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-danger" type="reset" onClick={handleErrase}>Borrar Calculadora</button>
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="reset" onClick={handleClosure}>Cerrar Calculadora</button>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default SAC