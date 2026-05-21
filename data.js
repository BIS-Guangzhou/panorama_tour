var APP_DATA = {
  "scenes": [
    {
      "id": "0-7-third-floor",
      "name": "7 third floor",
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
          "target": "1-6-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-6-second-floor",
      "name": "6 second floor",
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
          "yaw": 0.16044612829101546,
          "pitch": 0.07993574047189611,
          "rotation": 0,
          "target": "0-7-third-floor"
        },
        {
          "yaw": 0.3833463292510899,
          "pitch": 0.15597524626665304,
          "rotation": 3.141592653589793,
          "target": "3-4-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-5-stairs-first-floor",
      "name": "5 stairs first floor",
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
          "target": "1-6-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4-first-floor",
      "name": "4 first floor",
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
          "target": "2-5-stairs-first-floor"
        },
        {
          "yaw": 0.1570117653754579,
          "pitch": -0.020867989082905325,
          "rotation": 0.7853981633974483,
          "target": "4-3-marketing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-3-marketing",
      "name": "3 Marketing",
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
          "target": "3-4-first-floor"
        },
        {
          "yaw": -2.591121853421358,
          "pitch": 0.07574984346738312,
          "rotation": 0,
          "target": "5-2-students-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-2-students-entrance",
      "name": "2 Students Entrance",
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
          "target": "4-3-marketing"
        },
        {
          "yaw": -1.304557797940097,
          "pitch": -0.024151289797426756,
          "rotation": 0,
          "target": "6-1-school-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-1-school-center",
      "name": "1 School Center",
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
          "yaw": 0.6435235388358649,
          "pitch": 0.041424866750480405,
          "rotation": 0,
          "target": "5-2-students-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
