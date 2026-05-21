var APP_DATA = {
  "scenes": [
    {
      "id": "0-third-floor",
      "name": "Third Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.446060567913668,
          "pitch": 0.07317408579475426,
          "rotation": 0,
          "target": "1-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-second-floor",
      "name": "Second Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.951490231851146,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.16044612829101546,
          "pitch": 0.07993574047189611,
          "rotation": 0,
          "target": "0-third-floor"
        },
        {
          "yaw": 0.3833463292510899,
          "pitch": 0.15597524626665304,
          "rotation": 3.141592653589793,
          "target": "3-first-floor"
        },
        {
          "yaw": 0.9197169598406738,
          "pitch": 0.24276646968733928,
          "rotation": 5.497787143782138,
          "target": "7-steam-classroom"
        },
        {
          "yaw": 1.403663475903297,
          "pitch": 0.10358090803112674,
          "rotation": 0,
          "target": "8-arts-classroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-exhibition-hall-1f",
      "name": "Exhibition Hall (1F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9359886313007397,
          "pitch": 0.2913936290447854,
          "rotation": 0,
          "target": "1-second-floor"
        },
        {
          "yaw": -2.1165899374767907,
          "pitch": 0.258081156803021,
          "rotation": 0,
          "target": "3-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-first-floor",
      "name": "First Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4197362049887907,
          "pitch": 0.07889490760959816,
          "rotation": 0,
          "target": "2-exhibition-hall-1f"
        },
        {
          "yaw": 0.1570117653754579,
          "pitch": -0.020867989082905325,
          "rotation": 0.7853981633974483,
          "target": "4-admissions"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-admissions",
      "name": "Admissions",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4483514133272397,
          "pitch": 0.02548894106895716,
          "rotation": 0,
          "target": "3-first-floor"
        },
        {
          "yaw": -2.591121853421358,
          "pitch": 0.07574984346738312,
          "rotation": 0,
          "target": "5-student-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6748164356097135,
          "pitch": 0.27731439117395773,
          "title": "Student Service",
          "text": "At Student Services, we support your child’s academic, emotional, and social growth while guiding their path to higher education, ensuring they thrive and feel right at home in our diverse global community."
        }
      ]
    },
    {
      "id": "5-student-entrance",
      "name": "Student Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2196866557641677,
          "pitch": 0.013317950818576563,
          "rotation": 0,
          "target": "4-admissions"
        },
        {
          "yaw": -1.304557797940097,
          "pitch": -0.024151289797426756,
          "rotation": 0,
          "target": "6-basketball-court"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-basketball-court",
      "name": "Basketball Court",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.4715166784794977,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.6435235388358649,
          "pitch": 0.041424866750480405,
          "rotation": 0,
          "target": "5-student-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-steam-classroom",
      "name": "STEAM Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.171559734028744,
          "pitch": -0.0937390703991774,
          "rotation": 0,
          "target": "1-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-arts-classroom",
      "name": "Arts Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.39274206659244904,
          "pitch": 0.024951376656940027,
          "rotation": 0,
          "target": "1-second-floor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
