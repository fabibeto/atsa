TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "vfov": 180,
  "partial": false,
  "adjacentPanoramas": [
   {
    "backwardYaw": 54.86,
    "class": "AdjacentPanorama",
    "panorama": {
     "hfov": 360,
     "vfov": 180,
     "partial": false,
     "adjacentPanoramas": [
      {
       "backwardYaw": 74.73,
       "class": "AdjacentPanorama",
       "panorama": {
        "hfov": 360,
        "vfov": 180,
        "partial": false,
        "adjacentPanoramas": [
         {
          "backwardYaw": 172.54,
          "class": "AdjacentPanorama",
          "panorama": {
           "hfov": 360,
           "vfov": 180,
           "partial": false,
           "adjacentPanoramas": [
            {
             "backwardYaw": -72.28,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038",
             "yaw": 172.54,
             "distance": 1
            },
            {
             "backwardYaw": -45.89,
             "class": "AdjacentPanorama",
             "panorama": {
              "hfov": 360,
              "vfov": 180,
              "partial": false,
              "adjacentPanoramas": [
               {
                "backwardYaw": 105.32,
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_DD779C99_D45C_5E24_41DA_A544916934D8",
                "yaw": -45.89,
                "distance": 1
               }
              ],
              "id": "panorama_DD77D18B_D45C_4624_41D2_03E13AED80BD",
              "class": "Panorama",
              "frames": [
               {
                "sphere": {
                 "levels": [
                  {
                   "height": 3217,
                   "width": 6434,
                   "url": "media/panorama_DD77D18B_D45C_4624_41D2_03E13AED80BD_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_DD77D18B_D45C_4624_41D2_03E13AED80BD.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_DD779C99_D45C_5E24_41DA_A544916934D8, this.camera_CD207A60_D47D_DF32_41EA_A179D1F86F61); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 67,
                       "width": 67,
                       "url": "media/panorama_DD77D18B_D45C_4624_41D2_03E13AED80BD_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 7.48,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -45.89,
                    "pitch": -4.25
                   }
                  ],
                  "id": "overlay_D9D82590_D464_4E25_41D1_406734232967",
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 134,
                       "width": 134,
                       "url": "media/panorama_DD77D18B_D45C_4624_41D2_03E13AED80BD_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 7.48,
                    "yaw": -45.89,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -4.25
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_DD77D18B_D45C_4624_41D2_03E13AED80BD_t.jpg"
               }
              ],
              "pitch": 0,
              "hfovMin": 60,
              "hfovMax": 120,
              "label": "4",
              "thumbnailUrl": "media/panorama_DD77D18B_D45C_4624_41D2_03E13AED80BD_t.jpg"
             },
             "yaw": 105.32,
             "distance": 1
            }
           ],
           "id": "panorama_DD779C99_D45C_5E24_41DA_A544916934D8",
           "class": "Panorama",
           "frames": [
            {
             "sphere": {
              "levels": [
               {
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_DD779C99_D45C_5E24_41DA_A544916934D8_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_DD779C99_D45C_5E24_41DA_A544916934D8.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 67,
                    "width": 67,
                    "url": "media/panorama_DD779C99_D45C_5E24_41DA_A544916934D8_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 7.48,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 4.79,
                 "pitch": 3.97
                }
               ],
               "id": "overlay_D90E373A_D46C_4A64_41B4_688BA27CC708",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 134,
                    "width": 134,
                    "url": "media/panorama_DD779C99_D45C_5E24_41DA_A544916934D8_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 7.48,
                 "yaw": 4.79,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": 3.97
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_DD77D18B_D45C_4624_41D2_03E13AED80BD, this.camera_CD2E5A37_D47D_DF1E_41D6_E7DACF91C80F); this.mainPlayList.set('selectedIndex', 7)"
                }
               ],
               "enabledInCardboard": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 67,
                    "width": 67,
                    "url": "media/panorama_DD779C99_D45C_5E24_41DA_A544916934D8_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 7.48,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 105.32,
                 "pitch": -4.33
                }
               ],
               "id": "overlay_D9BCA47B_D464_4EE4_41DC_4D0AD91341A1",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 134,
                    "width": 134,
                    "url": "media/panorama_DD779C99_D45C_5E24_41DA_A544916934D8_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 7.48,
                 "yaw": 105.32,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -4.33
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.mainPlayList.set('selectedIndex', 6); this.MainViewerVideoPlayer.play()"
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 67,
                    "width": 67,
                    "url": "media/panorama_DD779C99_D45C_5E24_41DA_A544916934D8_0_HS_3_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 7.48,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -14.46,
                 "pitch": 3.73
                }
               ],
               "id": "overlay_DA8C8E08_D46C_7A24_41E2_9572EA58B11C",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 134,
                    "width": 134,
                    "url": "media/panorama_DD779C99_D45C_5E24_41DA_A544916934D8_0_HS_3_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 7.48,
                 "yaw": -14.46,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": 3.73
                }
               ]
              },
              {
               "image": {
                "levels": [
                 {
                  "height": 850,
                  "width": 850,
                  "url": "media/panorama_DDB542A4_D45C_4A6C_4195_644B577705C3_tcap0.png",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "hfov": 72,
               "inertia": false,
               "id": "panorama_DD779C99_D45C_5E24_41DA_A544916934D8_tcap0",
               "click": "this.showWindow(this.window_CDC7AF76_D4E4_5AEC_417A_FE5C5C2C7272, null, false)",
               "rotate": false,
               "class": "TripodCapPanoramaOverlay",
               "angle": 0
              },
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038, this.camera_CD55DA1E_D47D_DF11_41E1_CDF680D70F98); this.mainPlayList.set('selectedIndex', 3)"
                }
               ],
               "enabledInCardboard": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 67,
                    "width": 67,
                    "url": "media/panorama_DD779C99_D45C_5E24_41DA_A544916934D8_0_HS_4_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 7.36,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 172.54,
                 "pitch": -11.2
                }
               ],
               "id": "overlay_C154A41D_D4DC_CE5C_41D4_91B7F2067E59",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 134,
                    "width": 134,
                    "url": "media/panorama_DD779C99_D45C_5E24_41DA_A544916934D8_0_HS_4_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 7.36,
                 "yaw": 172.54,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -11.2
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_DD779C99_D45C_5E24_41DA_A544916934D8_t.jpg"
            }
           ],
           "pitch": 0,
           "hfovMin": 60,
           "hfovMax": 120,
           "label": "3",
           "thumbnailUrl": "media/panorama_DD779C99_D45C_5E24_41DA_A544916934D8_t.jpg"
          },
          "yaw": -72.28,
          "distance": 1
         },
         {
          "backwardYaw": 15.93,
          "class": "AdjacentPanorama",
          "panorama": {
           "hfov": 360,
           "vfov": 180,
           "partial": false,
           "adjacentPanoramas": [
            {
             "backwardYaw": 34.27,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038",
             "yaw": 15.93,
             "distance": 1
            }
           ],
           "id": "panorama_DD773862_D45C_46E4_41D4_E5F3E53018E6",
           "class": "Panorama",
           "frames": [
            {
             "sphere": {
              "levels": [
               {
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_DD773862_D45C_46E4_41D4_E5F3E53018E6_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_DD773862_D45C_46E4_41D4_E5F3E53018E6.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038, this.camera_CD297A4B_D47D_DF76_41E6_CBFDF0FF7234); this.mainPlayList.set('selectedIndex', 3)"
                }
               ],
               "enabledInCardboard": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 51,
                    "width": 67,
                    "url": "media/panorama_DD773862_D45C_46E4_41D4_E5F3E53018E6_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 7.5,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 15.93,
                 "pitch": -1.65
                }
               ],
               "id": "overlay_D916909A_D46C_4624_41E5_F50C0F7B9D39",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 102,
                    "width": 134,
                    "url": "media/panorama_DD773862_D45C_46E4_41D4_E5F3E53018E6_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 7.5,
                 "yaw": 15.93,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -1.65
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_DD773862_D45C_46E4_41D4_E5F3E53018E6_t.jpg"
            }
           ],
           "pitch": 0,
           "hfovMin": 60,
           "hfovMax": 120,
           "label": "5",
           "thumbnailUrl": "media/panorama_DD773862_D45C_46E4_41D4_E5F3E53018E6_t.jpg"
          },
          "yaw": 34.27,
          "distance": 1
         },
         {
          "backwardYaw": -54.65,
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_DD735F83_D45C_7A24_41CE_427C764573F7",
          "yaw": 74.73,
          "distance": 1
         }
        ],
        "id": "panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038",
        "class": "Panorama",
        "frames": [
         {
          "sphere": {
           "levels": [
            {
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_DD735F83_D45C_7A24_41CE_427C764573F7, this.camera_CD5A7A0E_D47D_DF0E_41C6_3255C7C65A1C); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 67,
                 "width": 67,
                 "url": "media/panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 7.1,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 74.73,
              "pitch": -18.91
             }
            ],
            "id": "overlay_D92F25B5_D464_4E6C_41D0_13F5D3E69F63",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "height": 134,
                 "width": 134,
                 "url": "media/panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 7.1,
              "yaw": 74.73,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -18.91
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_DD779C99_D45C_5E24_41DA_A544916934D8, this.camera_CD4759ED_D47D_DD33_41B0_78745F4F067D); this.mainPlayList.set('selectedIndex', 5)"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 67,
                 "width": 67,
                 "url": "media/panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 7.46,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -72.28,
              "pitch": -5.76
             }
            ],
            "id": "overlay_D8BF4BE3_D464_59E4_41D2_7C5CB0FAB76E",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "height": 134,
                 "width": 134,
                 "url": "media/panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 7.46,
              "yaw": -72.28,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -5.76
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_DD773862_D45C_46E4_41D4_E5F3E53018E6, this.camera_CD4319FD_D47D_DD12_41E6_B45DA98EED5D); this.mainPlayList.set('selectedIndex', 8)"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 67,
                 "width": 67,
                 "url": "media/panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 7.48,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 34.27,
              "pitch": -4.61
             }
            ],
            "id": "overlay_D9C4579A_D464_4A24_41E1_C5339E385284",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "height": 134,
                 "width": 134,
                 "url": "media/panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 7.48,
              "yaw": 34.27,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -4.61
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 9)"
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 67,
                 "width": 67,
                 "url": "media/panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038_0_HS_3_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 7.38,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 150.75,
              "pitch": 10.28
             }
            ],
            "id": "overlay_C31FE00F_D4FC_C63C_41D2_16F459DD4C4D",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "height": 134,
                 "width": 134,
                 "url": "media/panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 7.38,
              "yaw": 150.75,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 10.28
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038_t.jpg"
         }
        ],
        "pitch": 0,
        "hfovMin": 60,
        "hfovMax": 120,
        "label": "3.1",
        "thumbnailUrl": "media/panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038_t.jpg"
       },
       "yaw": -54.65,
       "distance": 1
      },
      {
       "backwardYaw": -70.32,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_DDB542A4_D45C_4A6C_4195_644B577705C3",
       "yaw": 54.86,
       "distance": 1
      }
     ],
     "id": "panorama_DD735F83_D45C_7A24_41CE_427C764573F7",
     "class": "Panorama",
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_DD735F83_D45C_7A24_41CE_427C764573F7_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_DD735F83_D45C_7A24_41CE_427C764573F7.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_DDB542A4_D45C_4A6C_4195_644B577705C3, this.camera_CD4A39D7_D47D_DD1E_41D8_5AADE6148211); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 67,
              "width": 67,
              "url": "media/panorama_DD735F83_D45C_7A24_41CE_427C764573F7_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 7.41,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 54.86,
           "pitch": -8.96
          }
         ],
         "id": "overlay_D897C8FB_D45B_C7E4_41C9_05ACF9E47583",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "image": {
            "levels": [
             {
              "height": 134,
              "width": 134,
              "url": "media/panorama_DD735F83_D45C_7A24_41CE_427C764573F7_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 7.41,
           "yaw": 54.86,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -8.96
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038, this.camera_CD4C99C6_D47D_DD7E_41C9_621DD56886DD); this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 67,
              "width": 67,
              "url": "media/panorama_DD735F83_D45C_7A24_41CE_427C764573F7_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 7.41,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -54.65,
           "pitch": -9.05
          }
         ],
         "id": "overlay_D8BC20C5_D465_C62C_41CD_89CCD985B176",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "image": {
            "levels": [
             {
              "height": 134,
              "width": 134,
              "url": "media/panorama_DD735F83_D45C_7A24_41CE_427C764573F7_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 7.41,
           "yaw": -54.65,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -9.05
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 67,
              "width": 67,
              "url": "media/panorama_DD735F83_D45C_7A24_41CE_427C764573F7_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 5.97,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -138.68,
           "pitch": -37.3
          }
         ],
         "id": "overlay_DBBAB379_D46D_CAE7_41E9_4FB306AB0273",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "image": {
            "levels": [
             {
              "height": 134,
              "width": 134,
              "url": "media/panorama_DD735F83_D45C_7A24_41CE_427C764573F7_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 5.97,
           "yaw": -138.68,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -37.3
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_DD735F83_D45C_7A24_41CE_427C764573F7_t.jpg"
      }
     ],
     "pitch": 0,
     "hfovMin": 60,
     "hfovMax": 120,
     "label": "2",
     "thumbnailUrl": "media/panorama_DD735F83_D45C_7A24_41CE_427C764573F7_t.jpg"
    },
    "yaw": -70.32,
    "distance": 1
   }
  ],
  "id": "panorama_DDB542A4_D45C_4A6C_4195_644B577705C3",
  "class": "Panorama",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_DDB542A4_D45C_4A6C_4195_644B577705C3_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DDB542A4_D45C_4A6C_4195_644B577705C3.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_DD735F83_D45C_7A24_41CE_427C764573F7, this.camera_CD71F9B3_D47D_DD16_41D6_E71DD01CB1BF); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 67,
           "width": 67,
           "url": "media/panorama_DDB542A4_D45C_4A6C_4195_644B577705C3_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 7.43,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -70.32,
        "pitch": -8.05
       }
      ],
      "id": "overlay_DFE0EBC0_D45D_FA24_41E3_B0B8A44432DF",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 134,
           "url": "media/panorama_DDB542A4_D45C_4A6C_4195_644B577705C3_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 7.43,
        "yaw": -70.32,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -8.05
       }
      ]
     },
     {
      "bleaching": 0.7,
      "id": "overlay_C6BFC6F5_D4A4_CBEC_41C3_735482334C58",
      "class": "LensFlarePanoramaOverlay",
      "yaw": 34.71,
      "bleachingDistance": 0.53,
      "pitch": 23.99
     },
     {
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_DDB542A4_D45C_4A6C_4195_644B577705C3_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "hfov": 72,
      "inertia": false,
      "id": "panorama_DDB542A4_D45C_4A6C_4195_644B577705C3_tcap0",
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "angle": 0
     },
     {
      "bleaching": 0.7,
      "id": "overlay_CCFF7927_D464_7D3F_41E2_190FC6BA6346",
      "class": "LensFlarePanoramaOverlay",
      "yaw": 17.61,
      "bleachingDistance": 0.4,
      "pitch": 3.72
     }
    ],
    "thumbnailUrl": "media/panorama_DDB542A4_D45C_4A6C_4195_644B577705C3_t.jpg"
   }
  ],
  "pitch": 0,
  "hfovMin": 60,
  "hfovMax": 120,
  "label": "1",
  "thumbnailUrl": "media/panorama_DDB542A4_D45C_4A6C_4195_644B577705C3_t.jpg"
 },
 {
  "preloadEnabled": false,
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "gyroscopeVerticalDraggingEnabled": true,
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "class": "PanoramaPlayer"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_DDB542A4_D45C_4A6C_4195_644B577705C3_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_DD735F83_D45C_7A24_41CE_427C764573F7",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_DD735F83_D45C_7A24_41CE_427C764573F7_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_DAA4E360_D464_4AE4_41DA_08D255129017_AlbumPlayList",
   "items": [
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.42",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.66"
      },
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "image": {
       "levels": [
        {
         "url": "media/album_DAA4E360_D464_4AE4_41DA_08D255129017_0.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000,
      "label": "IMG_8344",
      "thumbnailUrl": "media/album_DAA4E360_D464_4AE4_41DA_08D255129017_0_t.jpg",
      "width": 5184,
      "id": "album_DAA4E360_D464_4AE4_41DA_08D255129017_0",
      "height": 3456,
      "class": "Photo"
     }
    },
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.69",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.61"
      },
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "image": {
       "levels": [
        {
         "url": "media/album_DAA4E360_D464_4AE4_41DA_08D255129017_1.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000,
      "label": "IMG_8367",
      "thumbnailUrl": "media/album_DAA4E360_D464_4AE4_41DA_08D255129017_1_t.jpg",
      "width": 5013,
      "id": "album_DAA4E360_D464_4AE4_41DA_08D255129017_1",
      "height": 3456,
      "class": "Photo"
     }
    },
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.29",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.55"
      },
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "image": {
       "levels": [
        {
         "url": "media/album_DAA4E360_D464_4AE4_41DA_08D255129017_2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000,
      "label": "IMG_8376",
      "thumbnailUrl": "media/album_DAA4E360_D464_4AE4_41DA_08D255129017_2_t.jpg",
      "width": 4918,
      "id": "album_DAA4E360_D464_4AE4_41DA_08D255129017_2",
      "height": 3456,
      "class": "Photo"
     }
    },
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.67",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.55"
      },
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "image": {
       "levels": [
        {
         "url": "media/album_DAA4E360_D464_4AE4_41DA_08D255129017_3.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000,
      "label": "IMG_8386",
      "thumbnailUrl": "media/album_DAA4E360_D464_4AE4_41DA_08D255129017_3_t.jpg",
      "width": 5184,
      "id": "album_DAA4E360_D464_4AE4_41DA_08D255129017_3",
      "height": 3456,
      "class": "Photo"
     }
    },
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.73",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.68"
      },
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "image": {
       "levels": [
        {
         "url": "media/album_DAA4E360_D464_4AE4_41DA_08D255129017_4.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000,
      "label": "IMG_8462",
      "thumbnailUrl": "media/album_DAA4E360_D464_4AE4_41DA_08D255129017_4_t.jpg",
      "width": 4861,
      "id": "album_DAA4E360_D464_4AE4_41DA_08D255129017_4",
      "height": 3456,
      "class": "Photo"
     }
    }
   ]
  },
  "label": "Album de Fotos IMG_8344",
  "thumbnailUrl": "media/album_DAA4E360_D464_4AE4_41DA_08D255129017_t.png",
  "id": "album_DAA4E360_D464_4AE4_41DA_08D255129017",
  "class": "PhotoAlbum"
 },
 {
  "viewerArea": "this.MainViewer",
  "class": "PhotoAlbumPlayer",
  "id": "MainViewerPhotoAlbumPlayer"
 },
 "this.album_DAA4E360_D464_4AE4_41DA_08D255129017_0",
 "this.album_DAA4E360_D464_4AE4_41DA_08D255129017_1",
 "this.album_DAA4E360_D464_4AE4_41DA_08D255129017_2",
 "this.album_DAA4E360_D464_4AE4_41DA_08D255129017_3",
 "this.album_DAA4E360_D464_4AE4_41DA_08D255129017_4",
 "this.panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_D9064AA9_D464_DA64_41C4_BF1FE0A48DA3_AlbumPlayList",
   "items": [
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.31",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.52"
      },
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "image": {
       "levels": [
        {
         "url": "media/album_D9064AA9_D464_DA64_41C4_BF1FE0A48DA3_0.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000,
      "label": "IMG_8390",
      "thumbnailUrl": "media/album_D9064AA9_D464_DA64_41C4_BF1FE0A48DA3_0_t.jpg",
      "width": 5184,
      "id": "album_D9064AA9_D464_DA64_41C4_BF1FE0A48DA3_0",
      "height": 3456,
      "class": "Photo"
     }
    },
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.68",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.38"
      },
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "image": {
       "levels": [
        {
         "url": "media/album_D9064AA9_D464_DA64_41C4_BF1FE0A48DA3_1.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000,
      "label": "IMG_8395",
      "thumbnailUrl": "media/album_D9064AA9_D464_DA64_41C4_BF1FE0A48DA3_1_t.jpg",
      "width": 5184,
      "id": "album_D9064AA9_D464_DA64_41C4_BF1FE0A48DA3_1",
      "height": 3456,
      "class": "Photo"
     }
    },
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.49",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.29"
      },
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "image": {
       "levels": [
        {
         "url": "media/album_D9064AA9_D464_DA64_41C4_BF1FE0A48DA3_2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000,
      "label": "IMG_8397",
      "thumbnailUrl": "media/album_D9064AA9_D464_DA64_41C4_BF1FE0A48DA3_2_t.jpg",
      "width": 5184,
      "id": "album_D9064AA9_D464_DA64_41C4_BF1FE0A48DA3_2",
      "height": 3456,
      "class": "Photo"
     }
    },
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.47",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.59"
      },
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "image": {
       "levels": [
        {
         "url": "media/album_D9064AA9_D464_DA64_41C4_BF1FE0A48DA3_3.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000,
      "label": "IMG_8398",
      "thumbnailUrl": "media/album_D9064AA9_D464_DA64_41C4_BF1FE0A48DA3_3_t.jpg",
      "width": 5176,
      "id": "album_D9064AA9_D464_DA64_41C4_BF1FE0A48DA3_3",
      "height": 3451,
      "class": "Photo"
     }
    }
   ]
  },
  "label": "Album de Fotos IMG_8390",
  "thumbnailUrl": "media/album_D9064AA9_D464_DA64_41C4_BF1FE0A48DA3_t.png",
  "id": "album_D9064AA9_D464_DA64_41C4_BF1FE0A48DA3",
  "class": "PhotoAlbum"
 },
 "this.album_D9064AA9_D464_DA64_41C4_BF1FE0A48DA3_0",
 "this.album_D9064AA9_D464_DA64_41C4_BF1FE0A48DA3_1",
 "this.album_D9064AA9_D464_DA64_41C4_BF1FE0A48DA3_2",
 "this.album_D9064AA9_D464_DA64_41C4_BF1FE0A48DA3_3",
 "this.panorama_DD779C99_D45C_5E24_41DA_A544916934D8",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_DD779C99_D45C_5E24_41DA_A544916934D8_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "Video",
  "label": "ATSA",
  "video": {
   "mp4Url": "media/video_DA91D597_D464_4E2C_41C3_8D5ED759D266.mp4",
   "height": 1080,
   "width": 1920,
   "class": "VideoResource"
  },
  "width": 1920,
  "id": "video_DA91D597_D464_4E2C_41C3_8D5ED759D266",
  "loop": false,
  "thumbnailUrl": "media/video_DA91D597_D464_4E2C_41C3_8D5ED759D266_t.jpg",
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer"
 },
 "this.panorama_DD77D18B_D45C_4624_41D2_03E13AED80BD",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_DD77D18B_D45C_4624_41D2_03E13AED80BD_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_DD773862_D45C_46E4_41D4_E5F3E53018E6",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_DD773862_D45C_46E4_41D4_E5F3E53018E6_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_AlbumPlayList",
   "items": [
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.45",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.37"
      },
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "image": {
       "levels": [
        {
         "url": "media/album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_0.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000,
      "label": "IMG_8312",
      "thumbnailUrl": "media/album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_0_t.jpg",
      "width": 5184,
      "id": "album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_0",
      "height": 3456,
      "class": "Photo"
     }
    },
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.64",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.65"
      },
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "image": {
       "levels": [
        {
         "url": "media/album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_1.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000,
      "label": "IMG_8348",
      "thumbnailUrl": "media/album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_1_t.jpg",
      "width": 5184,
      "id": "album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_1",
      "height": 3456,
      "class": "Photo"
     }
    },
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.40",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.66"
      },
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "image": {
       "levels": [
        {
         "url": "media/album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000,
      "label": "IMG_8354",
      "thumbnailUrl": "media/album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_2_t.jpg",
      "width": 5184,
      "id": "album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_2",
      "height": 3456,
      "class": "Photo"
     }
    },
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.45",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.36"
      },
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "image": {
       "levels": [
        {
         "url": "media/album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_3.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000,
      "label": "IMG_8363",
      "thumbnailUrl": "media/album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_3_t.jpg",
      "width": 5184,
      "id": "album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_3",
      "height": 3456,
      "class": "Photo"
     }
    },
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.54",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.61"
      },
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "image": {
       "levels": [
        {
         "url": "media/album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_4.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000,
      "label": "IMG_8405",
      "thumbnailUrl": "media/album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_4_t.jpg",
      "width": 5184,
      "id": "album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_4",
      "height": 3456,
      "class": "Photo"
     }
    }
   ]
  },
  "label": "Album de Fotos IMG_8312",
  "thumbnailUrl": "media/album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_t.png",
  "id": "album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434",
  "class": "PhotoAlbum"
 },
 "this.album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_0",
 "this.album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_1",
 "this.album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_2",
 "this.album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_3",
 "this.album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434_4",
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_DDB542A4_D45C_4A6C_4195_644B577705C3",
    "camera": "this.panorama_DDB542A4_D45C_4A6C_4195_644B577705C3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_DD735F83_D45C_7A24_41CE_427C764573F7",
    "camera": "this.panorama_DD735F83_D45C_7A24_41CE_427C764573F7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPhotoAlbumPlayer",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.album_DAA4E360_D464_4AE4_41DA_08D255129017"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038",
    "camera": "this.panorama_DD77D5C5_D45C_4E2C_41C2_72D388B89038_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPhotoAlbumPlayer",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.album_D9064AA9_D464_DA64_41C4_BF1FE0A48DA3"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_DD779C99_D45C_5E24_41DA_A544916934D8",
    "camera": "this.panorama_DD779C99_D45C_5E24_41DA_A544916934D8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.video_DA91D597_D464_4E2C_41C3_8D5ED759D266",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 6, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 6, this.video_DA91D597_D464_4E2C_41C3_8D5ED759D266)"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_DD77D18B_D45C_4624_41D2_03E13AED80BD",
    "camera": "this.panorama_DD77D18B_D45C_4624_41D2_03E13AED80BD_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_DD773862_D45C_46E4_41D4_E5F3E53018E6",
    "camera": "this.panorama_DD773862_D45C_46E4_41D4_E5F3E53018E6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPhotoAlbumPlayer",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "media": "this.album_CDB705A7_D4E4_CE6C_41A5_99CD6A5AA434"
   }
  ]
 },
 {
  "headerPaddingRight": 10,
  "bodyPaddingRight": 5,
  "footerHeight": 5,
  "shadowHorizontalLength": 3,
  "backgroundColor": [],
  "modal": true,
  "headerBorderColor": "#000000",
  "headerPaddingBottom": 10,
  "minWidth": 20,
  "paddingTop": 0,
  "shadowBlurRadius": 6,
  "headerPaddingTop": 10,
  "titleFontSize": 14,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "titleFontWeight": "normal",
  "titlePaddingRight": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "footerBackgroundColorRatios": [
   1
  ],
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "footerBorderSize": 0,
  "closeButtonPaddingBottom": 0,
  "veilShowEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "bodyBackgroundOpacity": 1,
  "title": "",
  "closeButtonBorderRadius": 11,
  "shadow": true,
  "shadowOpacity": 0.5,
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "titlePaddingTop": 5,
  "closeButtonBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titlePaddingLeft": 5,
  "bodyBackgroundColorRatios": [
   0
  ],
  "shadowColor": "#000000",
  "shadowVerticalLength": 0,
  "bodyPaddingTop": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonIconColor": "#000000",
  "borderSize": 0,
  "bodyPaddingBottom": 5,
  "backgroundOpacity": 1,
  "closeButtonPressedIconColor": "#FFFFFF",
  "headerBackgroundColor": [
   "#333333"
  ],
  "verticalAlign": "middle",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "footerBackgroundColor": [
   "#333333"
  ],
  "bodyBackgroundColor": [
   "#333333"
  ],
  "children": [
   {
    "scaleMode": "fit_inside",
    "minHeight": 0,
    "paddingBottom": 0,
    "shadow": false,
    "width": "100%",
    "id": "image_uidCD7F3989_D47D_DDF2_41E1_FD5454291CDC_0",
    "class": "Image",
    "borderSize": 0,
    "minWidth": 0,
    "horizontalAlign": "center",
    "height": "50%",
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "paddingRight": 0,
    "paddingTop": 0,
    "borderRadius": 0,
    "url": "media/photo_CE876949_D464_5D72_41E1_8F9E1DD97966.png"
   },
   {
    "scrollBarWidth": 10,
    "width": "100%",
    "height": "50%",
    "minWidth": 0,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "minHeight": 0,
    "paddingRight": 10,
    "shadow": false,
    "paddingBottom": 10,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;\">Transformamos tus celebraciones en momentos inolvidables. Ofrecemos un servicio de catering elegante y personalizado, con platos exquisitos y presentaciones impecables que se adaptan a cualquier tipo de evento. </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;\">Desde reuniones \u00edntimas hasta grandes celebraciones, cuidamos cada detalle para sorprender a tus invitados. </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;\">\u00a1Sabores \u00fanicos, estilo inigualable y la mejor atenci\u00f3n para que disfrutes sin preocupaciones!</SPAN></SPAN></DIV></div>",
    "id": "htmlText_uidCD7F3989_D47D_DDF2_41E1_FD5454291CDC",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingLeft": 10,
    "scrollBarOpacity": 0.5,
    "paddingTop": 10,
    "borderRadius": 0
   }
  ],
  "closeButtonBorderColor": "#000000",
  "bodyBorderSize": 0,
  "titleFontStyle": "normal",
  "headerBorderSize": 0,
  "scrollBarWidth": 10,
  "closeButtonBorderSize": 0,
  "titleTextDecoration": "none",
  "titleFontFamily": "Arial",
  "width": 400,
  "closeButtonBackgroundColor": [],
  "height": 600,
  "footerBackgroundOpacity": 1,
  "headerBackgroundColorDirection": "vertical",
  "titlePaddingBottom": 5,
  "gap": 10,
  "veilColorDirection": "horizontal",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "horizontalAlign": "center",
  "bodyPaddingLeft": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingRight": 0,
  "minHeight": 20,
  "closeButtonIconWidth": 12,
  "layout": "vertical",
  "paddingRight": 0,
  "headerBackgroundColorRatios": [
   0
  ],
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "closeButtonBackgroundColorRatios": [],
  "bodyBackgroundColorDirection": "vertical",
  "footerBorderColor": "#000000",
  "headerBackgroundOpacity": 1,
  "veilColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "shadowSpread": 1,
  "bodyBorderColor": "#000000",
  "closeButtonPaddingTop": 0,
  "contentOpaque": false,
  "id": "window_CDC7AF76_D4E4_5AEC_417A_FE5C5C2C7272",
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "scrollBarColor": "#000000",
  "headerPaddingLeft": 10,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonBackgroundOpacity": 1,
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "closeButtonPaddingLeft": 0,
  "closeButtonIconLineWidth": 2,
  "closeButtonIconHeight": 12,
  "titleFontColor": "#000000",
  "paddingLeft": 0,
  "class": "Window",
  "borderRadius": 5
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -125.14,
   "pitch": 0
  },
  "id": "camera_CD71F9B3_D47D_DD16_41D6_E71DD01CB1BF",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -105.27,
   "pitch": 0
  },
  "id": "camera_CD4C99C6_D47D_DD7E_41C9_621DD56886DD",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 109.68,
   "pitch": 0
  },
  "id": "camera_CD4A39D7_D47D_DD1E_41D8_5AADE6148211",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -7.46,
   "pitch": 0
  },
  "id": "camera_CD4759ED_D47D_DD33_41B0_78745F4F067D",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -164.07,
   "pitch": 0
  },
  "id": "camera_CD4319FD_D47D_DD12_41E6_B45DA98EED5D",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 125.35,
   "pitch": 0
  },
  "id": "camera_CD5A7A0E_D47D_DF0E_41C6_3255C7C65A1C",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 107.72,
   "pitch": 0
  },
  "id": "camera_CD55DA1E_D47D_DF11_41E1_CDF680D70F98",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 134.11,
   "pitch": 0
  },
  "id": "camera_CD2E5A37_D47D_DF1E_41D6_E7DACF91C80F",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -145.73,
   "pitch": 0
  },
  "id": "camera_CD297A4B_D47D_DF76_41E6_CBFDF0FF7234",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -74.68,
   "pitch": 0
  },
  "id": "camera_CD207A60_D47D_DF32_41EA_A179D1F86F61",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "audio_DB46249F_D465_CE5B_41B8_48CD71BE788D",
  "autoplay": true,
  "audio": {
   "mp3Url": "media/audio_DB46249F_D465_CE5B_41B8_48CD71BE788D.mp3",
   "oggUrl": "media/audio_DB46249F_D465_CE5B_41B8_48CD71BE788D.ogg",
   "class": "AudioResource"
  },
  "class": "PanoramaAudio"
 },
 {
  "id": "audio_C0718C72_D4A7_BEE4_41E0_C972B3B8255A",
  "autoplay": true,
  "audio": {
   "mp3Url": "media/audio_C0718C72_D4A7_BEE4_41E0_C972B3B8255A.mp3",
   "oggUrl": "media/audio_C0718C72_D4A7_BEE4_41E0_C972B3B8255A.ogg",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "image": {
   "levels": [
    {
     "url": "media/photo_CE876949_D464_5D72_41E1_8F9E1DD97966.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000,
  "label": "NADIR",
  "thumbnailUrl": "media/photo_CE876949_D464_5D72_41E1_8F9E1DD97966_t.png",
  "width": 850,
  "id": "photo_CE876949_D464_5D72_41E1_8F9E1DD97966",
  "height": 850,
  "class": "Photo"
 }
], "children": [
 {
  "playbackBarBorderSize": 0,
  "progressBarOpacity": 1,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "borderRadius": 0,
  "progressBackgroundOpacity": 1,
  "toolTipFontWeight": "normal",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "minWidth": 100,
  "paddingTop": 0,
  "toolTipBorderColor": "#767676",
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingTop": 4,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipPaddingBottom": 4,
  "progressBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarLeft": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadHeight": 15,
  "toolTipShadowSpread": 0,
  "shadow": false,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowVerticalLength": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0,
  "borderSize": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipFontFamily": "Arial",
  "progressBackgroundColorDirection": "vertical",
  "progressHeight": 10,
  "progressLeft": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipBorderSize": 1,
  "playbackBarBottom": 5,
  "playbackBarHeadShadow": true,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarBackgroundOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBorderColor": "#000000",
  "toolTipFontStyle": "normal",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "width": "100%",
  "progressBorderRadius": 0,
  "height": "100%",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressRight": 0,
  "playbackBarOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeight": 10,
  "progressOpacity": 1,
  "playbackBarHeadWidth": 6,
  "minHeight": 50,
  "playbackBarProgressBorderSize": 0,
  "paddingRight": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowColor": "#000000",
  "paddingBottom": 0,
  "progressBarBorderSize": 0,
  "playbackBarRight": 0,
  "progressBarBorderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "id": "MainViewer",
  "toolTipShadowColor": "#333333",
  "progressBottom": 0,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "toolTipOpacity": 1,
  "paddingLeft": 0,
  "class": "ViewerArea",
  "toolTipTextShadowColor": "#000000",
  "toolTipBorderRadius": 3
 }
], 
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "mouseWheelEnabled": true,
 "height": "100%",
 "layout": "absolute",
 "minWidth": 20,
 "class": "Player",
 "scrollBarMargin": 2,
 "gap": 10,
 "minHeight": 20,
 "scripts": {
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "existsKey": function(key){  return key in window; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; }
 },
 "paddingRight": 0,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingBottom": 0,
 "overflow": "visible",
 "backgroundPreloadEnabled": true,
 "id": "rootPlayer",
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "start": "this.playAudioList([this.audio_C0718C72_D4A7_BEE4_41E0_C972B3B8255A]); this.mainPlayList.set('selectedIndex', 0)",
 "paddingTop": 0,
 "borderRadius": 0
})