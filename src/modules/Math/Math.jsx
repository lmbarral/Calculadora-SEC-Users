const Math = (form) => {

    //console.log({form})

    var sBase = 0, m = 0, agui = false;
    var params = {}, neto = {};

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

    if(!form || form === undefined) return;
    const category = form.category;
    const month = form.month;
    const ant = form.ant;
    const jornada = form.jornada;
    const os = form.os;
    const extras50 = form.extras50;
    const extras100 = form.extras100;
    const base = form.base;
    const feriados = form.feriados;
    const vacaciones = form.vacaciones;

    const resultados = ({params}) => {

        const {sBase, ant, jornada, os, extras50, extras100, m, feriados, vacaciones, category, agui} = params || 0;

        var AUM = 0, ANT = 0, JOR = 0, JUB = 0, DOS = 0, L19032 = 0, ART0 = 0, AGUI = 0, FAECYS = 0, EX50 = 0, EX100 = 0, TOTAL = 0, SUM = 0, RES = 0, PRES = 0, FER = 0, VAC = 0, NDOS = 0, NFAECYS = 0, NART0 = 0, NRES = 0;

        /*INICIO HABERES*/
        /*REMUNERATIVO*/
        JOR = sBase * (Number(jornada)/8);
        FER = (JOR/25) * feriados;
        ANT = JOR * Number(ant);
        VAC = ((JOR/25) - (JOR/30)) * vacaciones;
        PRES = (JOR + ANT) * 0.08333;
        EX50 = ((JOR + PRES)/192)*1.5*Number(extras50);
        EX100 = ((JOR + PRES)/192)*2*Number(extras100);
        SUM = JOR + FER + ANT + VAC + PRES + EX50 + EX100;
        AGUI = SUM/2;
        /*NO REMUNERATIVO*/
        AUM = JOR * m;
        /*FIN HABERES*/

        /*INICIO DEDUCCIONES*/
        /*REMUNERATIVAS*/
        JUB = SUM * 0.11;
        L19032 = SUM * 0.03;
        DOS = SUM * os;
        const OSECAC = 100;
        ART0 = SUM * 0.02;
        FAECYS /*(ART1)*/ = SUM * 0.005;
        RES = JUB + L19032 + DOS + OSECAC + ART0 + FAECYS;
        /*NO REMUNERATIVAS*/
        NDOS = AUM * os;
        NART0 = AUM * 0.02;
        NFAECYS = AUM *0.005;
        NRES = NDOS + NART0 + NFAECYS
        /*FIN DEDUCCIONES*/

        /*TOTAL*/
        TOTAL = SUM + AUM - RES - NRES;

        return {AUM, ANT, JOR, JUB, DOS, OSECAC, L19032, ART0, AGUI, FAECYS, EX50, EX100, TOTAL, SUM, RES, PRES, FER, VAC, NDOS, NFAECYS, NART0, NRES, ant, jornada, os, extras50, extras100, m, feriados, vacaciones, category, agui};
    }

    if(!Number(base)){ sBase = SALARIOS[category][month].salarioBase} else { sBase = Number(base)};
    m = SALARIOS[category][month].mes;
    if(SALARIOS[category][month].sac === true) agui = true; else agui = false;
    console.log(agui)
    params = {category, sBase, ant, jornada, os, extras50, extras100, m, feriados, vacaciones, agui}
    if(!params || params === undefined) return;
    neto = resultados({params});
    if(!neto || neto === undefined) return;
    //console.log(neto)
    return neto;
}

export default Math;