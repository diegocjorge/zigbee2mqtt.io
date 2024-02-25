"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[96383],{629602:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-006cca75","path":"/devices/S093TH-ZG.html","title":"HZC Electric S093TH-ZG control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"HZC Electric S093TH-ZG control via MQTT","description":"Integrate your HZC Electric S093TH-ZG via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-10-10T21:00:00.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Factory Reset","slug":"factory-reset","link":"#factory-reset","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"LED indicators","slug":"led-indicators","link":"#led-indicators","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1708897102000},"filePathRelative":"devices/S093TH-ZG.md"}')},99927:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var a=i(166252);const n=(0,a._)("h1",{id:"hzc-electric-s093th-zg",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#hzc-electric-s093th-zg","aria-hidden":"true"},"#"),(0,a.Uk)(" HZC Electric S093TH-ZG")],-1),r=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),o=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"S093TH-ZG")],-1),l=(0,a._)("td",null,"Vendor",-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Temperature and humidity sensor")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"temperature, humidity, linkquality")],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/S093TH-ZG.png",alt:"HZC Electric S093TH-ZG"})])],-1),u=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>The device has an indicator LED (red/orange/green) on the front and a button on the back.</p><p>Device supports Zigbee 3.0, is powered by a CR2450 battery, has a temperature accuracy of plus minus 1.5 K and a humidity accuracy of 5 percent. The stated battery life is two years and the operating temperature is from -10C to +45C. The physical dimensions are 45 x 45 x 17.1 mm.</p><h3 id="factory-reset" tabindex="-1"><a class="header-anchor" href="#factory-reset" aria-hidden="true">#</a> Factory Reset</h3><p>Push the button three short and one long time. After about 10 seconds, the LED will blink quickly in red. Then release the button. The LED will stay solid red for three seconds and reset.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Push the button three times.</p><p>If the device is not paired, the LED will blink slowly in orange and the device will attempt to pair.</p><p>If the device is paired but can&#39;t connect, the LED will blink quickly in orange for three seconds.</p><p>If the device is paired, the LED will blink slowly in green for five seconds.</p><h3 id="led-indicators" tabindex="-1"><a class="header-anchor" href="#led-indicators" aria-hidden="true">#</a> LED indicators</h3><p>The LED blinks slowly 7 times when powered on.</p><p>When pairing, the LED will blink slowly in orange while searching for a network. The search will timeout after two minutes.</p><p>When pairing is in progress, the LED will stay on in green. The official documentation is very unclear on what this actually means.</p><p>After successfuly pairing, the LED will turn off.</p><p>If pairing failed, the LED will stay solidly orange for three seconds.</p><p>If the battery is below 10 % the LED will blink orange once a minute.</p>',17),h=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),p=(0,a.uE)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),m={},f=(0,i(983744).Z)(m,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),n,(0,a._)("table",null,[r,(0,a._)("tbody",null,[o,(0,a._)("tr",null,[l,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=HZC%20Electric"},{default:(0,a.w5)((()=>[(0,a.Uk)("HZC Electric")])),_:1})])]),d,s,c])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,a.kq)(" Notes END: Do not edit below this line "),h,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);