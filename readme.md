Fast Banner Template for Animate CC
=======================



* This is a banner template with Animate CC in fast production envirenment.
* Build HTML5 banners with old Flash timeline control.
* Use CraeteJS canvas features such as Blending, blur, maskinng, asset preloader etc.

#### Features

* Animate banners fast using Animate CC.
* Supports [DoubleClick Richmedia(Studio)](https://support.google.com/richmedia/answer/2672545), [DCM Standard(with ClickTag)](https://support.google.com/richmedia/answer/6279525?hl=en), DFP Standard(with DFP macro), [AdSense/Adwords/GDN Image ads](https://support.google.com/adwordspolicy/answer/176108?hl=en-AU) and [Sizmek(MediaMind)](https://www.sizmek.com/html5-guides/).
* Never worry about QA rejection.
* Uses Google/Sizmek hosted Create JS. This doesn't count towards the ad server/publisher's max filesize limit.

#### Requirements

![Adobe Animate CC](etc/animatecc.png)
Adobe Animate CC

Start building banners
---------------------------------------
1. Duplicate _build/JOB0000_animatecc_300x250 folder and rename it with your jobNumber_concept_pixelDimension.
2. Open the .fla file. 
3. Update stage's width and height from Properties window.
4. Go to Publish Settings. On 'Advanced' tab, click 'Import New' button.
⋅⋅⋅ Pick the correct template from _export_template/.

![Animate CC](etc/animatecc_publish.png)

* _dc_richmedia.html - DoubleClick Studio Richmedia
* _dcm_std.html - DoubleClick Standard banner for DCM
* _dfp_std.html - DoubleClick Standard banner for DFP (with DFP macro)
* _gdn_adsense_adwords.html - GDN and AdSense banner
* _sizmek_std.html - Sizmek Standard banner


#### /psd folder
This folder contains back-up static image template in PSD. 
On e uploaded to DoubleClick, a GIF/JPG/PNG file including 'backup' in filename will automatically be assigned as a back-up image.

License
---------------------------------------

The code is available under the [MIT license](LICENSE.md).
