var APP_DATA = {
  "scenes": [
    {
      "id": "0-sports-field",
      "name": "Sports Field",
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
          "yaw": -0.6038775766704685,
          "pitch": -0.02289024703665632,
          "rotation": 0,
          "target": "1-basketball-court"
        },
        {
          "yaw": -2.4642499640131597,
          "pitch": 0.11880522574613295,
          "rotation": 0,
          "target": "4-1f---"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-basketball-court",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4640734197060326,
          "pitch": 0.03970388992365059,
          "rotation": 0,
          "target": "0-sports-field"
        },
        {
          "yaw": 0.8242699274730967,
          "pitch": 0.12296847714109305,
          "rotation": 5.497787143782138,
          "target": "2-1f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-1f",
      "name": "1F",
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
      "faceSize": 2023.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9048131767307961,
          "pitch": 0.06783197293155752,
          "rotation": 0.7853981633974483,
          "target": "4-1f---"
        },
        {
          "yaw": 0.31963658837905307,
          "pitch": 0.042450839727489864,
          "rotation": 5.497787143782138,
          "target": "3-1f--"
        },
        {
          "yaw": 3.1111544901886283,
          "pitch": 0.12287129827238807,
          "rotation": 13.351768777756625,
          "target": "1-basketball-court"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.202429508602778,
          "pitch": -0.1881455057517183,
          "title": "Students Service",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-1f--",
      "name": "1F -",
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
      "faceSize": 2010.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4687804182608062,
          "pitch": 0.111554376530691,
          "rotation": 5.497787143782138,
          "target": "4-1f---"
        },
        {
          "yaw": 3.082036814189382,
          "pitch": 0.09779818154043518,
          "rotation": 0.7853981633974483,
          "target": "2-1f"
        },
        {
          "yaw": 0.7925340367340965,
          "pitch": 0.23370019393952646,
          "rotation": 0.7853981633974483,
          "target": "5-2f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-1f---",
      "name": "1F --",
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
      "faceSize": 2019.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3876519910041907,
          "pitch": 0.14236427359463377,
          "rotation": 6.283185307179586,
          "target": "0-sports-field"
        },
        {
          "yaw": -1.7870679080126841,
          "pitch": 0.21535091154746766,
          "rotation": 5.497787143782138,
          "target": "3-1f--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-2f",
      "name": "2F",
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
          "yaw": -0.7418741789574383,
          "pitch": 0.25273241647436784,
          "rotation": 0,
          "target": "6-2f---artsexhibition"
        },
        {
          "yaw": -1.734367889797646,
          "pitch": 0.10139620656288528,
          "rotation": 0,
          "target": "10-library"
        },
        {
          "yaw": 0.9413113963417619,
          "pitch": 0.11954351502674321,
          "rotation": 5.497787143782138,
          "target": "8-2f---arts-1"
        },
        {
          "yaw": 2.7361467128355965,
          "pitch": 0.32125154488299756,
          "rotation": 9.42477796076938,
          "target": "3-1f--"
        },
        {
          "yaw": 2.484564768997892,
          "pitch": 0.11909517301796946,
          "rotation": 0,
          "target": "11-3f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-2f---artsexhibition",
      "name": "2F - Artsexhibition",
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
      "faceSize": 2013,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6685883205242158,
          "pitch": 0.1998107920894796,
          "rotation": 0.7853981633974483,
          "target": "7-2f---artsexhibition-exit"
        },
        {
          "yaw": -2.801234783047267,
          "pitch": 0.280525590502986,
          "rotation": 0.7853981633974483,
          "target": "5-2f"
        },
        {
          "yaw": -0.8067464714249333,
          "pitch": 0.17400351461608032,
          "rotation": 0,
          "target": "10-library"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-2f---artsexhibition-exit",
      "name": "2F - Artsexhibition Exit",
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
          "yaw": -0.8163754755624524,
          "pitch": 0.07311887393689709,
          "rotation": 0,
          "target": "9-2f---arts-2"
        },
        {
          "yaw": 2.502372190721191,
          "pitch": 0.18660359923955738,
          "rotation": 0,
          "target": "10-library"
        },
        {
          "yaw": 1.2437445465626311,
          "pitch": 0.2763404359290611,
          "rotation": 7.0685834705770345,
          "target": "6-2f---artsexhibition"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-2f---arts-1",
      "name": "2F - Arts 1",
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
      "faceSize": 2009,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.177255723743265,
          "pitch": 0.1523286768657499,
          "rotation": 0,
          "target": "9-2f---arts-2"
        },
        {
          "yaw": 2.1079094809474013,
          "pitch": 0.19842406659870981,
          "rotation": 0.7853981633974483,
          "target": "5-2f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-2f---arts-2",
      "name": "2F - Arts 2",
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
          "yaw": 1.1246321097526497,
          "pitch": 0.08529523359908886,
          "rotation": 5.497787143782138,
          "target": "7-2f---artsexhibition-exit"
        },
        {
          "yaw": -0.6822530748202986,
          "pitch": 0.1030304321966824,
          "rotation": 6.283185307179586,
          "target": "8-2f---arts-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-library",
      "name": "Library",
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
          "yaw": -2.2760338078204647,
          "pitch": 0.43050119127354947,
          "rotation": 0,
          "target": "7-2f---artsexhibition-exit"
        },
        {
          "yaw": -1.1431608242895859,
          "pitch": 0.0222925167139163,
          "rotation": 4.71238898038469,
          "target": "5-2f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-3f",
      "name": "3F",
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
      "faceSize": 2036,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0250502189342843,
          "pitch": 0.21142547278636847,
          "rotation": 3.141592653589793,
          "target": "5-2f"
        },
        {
          "yaw": -2.269630523536918,
          "pitch": -0.021201718361869126,
          "rotation": 0,
          "target": "12-4f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-4f",
      "name": "4F",
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
          "yaw": 1.7082076209833517,
          "pitch": 0.13767928513347272,
          "rotation": 3.141592653589793,
          "target": "11-3f"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Britannia International School of Guangzhou",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
