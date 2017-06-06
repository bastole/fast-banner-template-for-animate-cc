Fast Banner Template for Animate CC
=======================



* This is a banner template with Animate CC in fast production envirenment.
* Build HTML5 banners with oldschool Flash timeline control, blending, filter, vector masking and shape tween.

#### Features

* Animate banners fast using Animate CC.
* Supports version 2017(latest) and 2015.2.
* Supports [DoubleClick Richmedia(Studio)](https://support.google.com/richmedia/answer/2672545), [DCM Standard(with ClickTag)](https://support.google.com/richmedia/answer/6279525?hl=en), [AdSense/Adwords/GDN Image ads](https://support.google.com/adwordspolicy/answer/176108?hl=en-AU) and [Sizmek(MediaMind)](https://www.sizmek.com/html5-guides/).
* Never worry about DC's QA rejection again.
* Uses Google/Sizmek hosted [CreateJS](http://www.createjs.com/). This doesn't count towards the ad server/publisher's max filesize limit.
* Polite loading with preloader

#### Requirements

[![Adobe Animate CC](etc/animatecc.png)](http://www.adobe.com/au/products/animate.html)


Start building banners
---------------------------------------
1. Duplicate _build/JOB0000_animatecc_300x250 folder and rename it with your jobNumber_concept_pixelDimension.
2. Open the .fla file. 
3. Update stage's width and height from Properties window.
4. Go to Publish Settings. On 'Advanced' tab, click 'Import New' button.
⋅⋅⋅ Pick the correct template from _export_template/[your animacecc version].

![Animate CC](etc/animatecc_publish.png)

* _dc_richmedia_[version].html - DoubleClick Studio Richmedia
* _dcm_std.html_[version] - DoubleClick Standard banner for DCM
* _gdn_adsense_adwords_[version].html - GDN and AdSense banner
* _sizmek_std_[version].html - Sizmek Standard banner


#### /psd folder
This folder contains back-up static image template in PSD. 
On e uploaded to DoubleClick, a GIF/JPG/PNG file including 'backup' in filename will automatically be assigned as a back-up image.

License
---------------------------------------

The code is available under the [MIT license](LICENSE.md).

