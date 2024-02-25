"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[18271],{291012:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-f1b959e6","path":"/devices/PEHPL0X.html","title":"Perenio PEHPL0X control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Perenio PEHPL0X control via MQTT","description":"Integrate your Perenio PEHPL0X via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-06-01T15:08:55.000Z"},"excerpt":"","headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Default on off state (enum)","slug":"default-on-off-state-enum","link":"#default-on-off-state-enum","children":[]},{"level":3,"title":"Rms voltage (numeric)","slug":"rms-voltage-numeric","link":"#rms-voltage-numeric","children":[]},{"level":3,"title":"Active power (numeric)","slug":"active-power-numeric","link":"#active-power-numeric","children":[]},{"level":3,"title":"Consumed energy (numeric)","slug":"consumed-energy-numeric","link":"#consumed-energy-numeric","children":[]},{"level":3,"title":"Alarm voltage min (binary)","slug":"alarm-voltage-min-binary","link":"#alarm-voltage-min-binary","children":[]},{"level":3,"title":"Alarm voltage max (binary)","slug":"alarm-voltage-max-binary","link":"#alarm-voltage-max-binary","children":[]},{"level":3,"title":"Alarm power max (binary)","slug":"alarm-power-max-binary","link":"#alarm-power-max-binary","children":[]},{"level":3,"title":"Alarm consumed energy (binary)","slug":"alarm-consumed-energy-binary","link":"#alarm-consumed-energy-binary","children":[]},{"level":3,"title":"Voltage min (numeric)","slug":"voltage-min-numeric","link":"#voltage-min-numeric","children":[]},{"level":3,"title":"Voltage max (numeric)","slug":"voltage-max-numeric","link":"#voltage-max-numeric","children":[]},{"level":3,"title":"Power max (numeric)","slug":"power-max-numeric","link":"#power-max-numeric","children":[]},{"level":3,"title":"Consumed energy limit (numeric)","slug":"consumed-energy-limit-numeric","link":"#consumed-energy-limit-numeric","children":[]},{"level":3,"title":"Rssi (numeric)","slug":"rssi-numeric","link":"#rssi-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1708897102000},"filePathRelative":"devices/PEHPL0X.md"}')},409234:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var a=o(166252);const i=(0,a._)("h1",{id:"perenio-pehpl0x",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#perenio-pehpl0x","aria-hidden":"true"},"#"),(0,a.Uk)(" Perenio PEHPL0X")],-1),d=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"PEHPL0X")],-1),n=(0,a._)("td",null,"Vendor",-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Power link")],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"switch (state), default_on_off_state, rms_voltage, active_power, consumed_energy, alarm_voltage_min, alarm_voltage_max, alarm_power_max, alarm_consumed_energy, voltage_min, voltage_max, power_max, consumed_energy_limit, rssi, linkquality")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/PEHPL0X.png",alt:"Perenio PEHPL0X"})])],-1),u=(0,a._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,a.Uk)(" OTA updates")],-1),m=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),h=(0,a.uE)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off" aria-hidden="true">#</a> On with timed off</h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionnaly an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depend on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="default-on-off-state-enum" tabindex="-1"><a class="header-anchor" href="#default-on-off-state-enum" aria-hidden="true">#</a> Default on off state (enum)</h3><p>Value can be found in the published state on the <code>default_on_off_state</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;default_on_off_state&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;default_on_off_state&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>previous</code>.</p><h3 id="rms-voltage-numeric" tabindex="-1"><a class="header-anchor" href="#rms-voltage-numeric" aria-hidden="true">#</a> Rms voltage (numeric)</h3><p>RMS voltage. Value can be found in the published state on the <code>rms_voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="active-power-numeric" tabindex="-1"><a class="header-anchor" href="#active-power-numeric" aria-hidden="true">#</a> Active power (numeric)</h3><p>Active power. Value can be found in the published state on the <code>active_power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="consumed-energy-numeric" tabindex="-1"><a class="header-anchor" href="#consumed-energy-numeric" aria-hidden="true">#</a> Consumed energy (numeric)</h3><p>Consumed energy. Value can be found in the published state on the <code>consumed_energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W*h</code>.</p><h3 id="alarm-voltage-min-binary" tabindex="-1"><a class="header-anchor" href="#alarm-voltage-min-binary" aria-hidden="true">#</a> Alarm voltage min (binary)</h3><p>Indicates if the alarm is triggered on the voltage drop below the limit, allows to reset alarms. Value can be found in the published state on the <code>alarm_voltage_min</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;alarm_voltage_min&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_voltage_min&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm voltage min is ON, if <code>false</code> OFF.</p><h3 id="alarm-voltage-max-binary" tabindex="-1"><a class="header-anchor" href="#alarm-voltage-max-binary" aria-hidden="true">#</a> Alarm voltage max (binary)</h3><p>Indicates if the alarm is triggered on the voltage rise above the limit, allows to reset alarms. Value can be found in the published state on the <code>alarm_voltage_max</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;alarm_voltage_max&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_voltage_max&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm voltage max is ON, if <code>false</code> OFF.</p><h3 id="alarm-power-max-binary" tabindex="-1"><a class="header-anchor" href="#alarm-power-max-binary" aria-hidden="true">#</a> Alarm power max (binary)</h3><p>Indicates if the alarm is triggered on the active power rise above the limit, allows to reset alarms. Value can be found in the published state on the <code>alarm_power_max</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;alarm_power_max&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_power_max&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm power max is ON, if <code>false</code> OFF.</p><h3 id="alarm-consumed-energy-binary" tabindex="-1"><a class="header-anchor" href="#alarm-consumed-energy-binary" aria-hidden="true">#</a> Alarm consumed energy (binary)</h3><p>Indicates if the alarm is triggered when the consumption energy limit is reached, allows to reset alarms. Value can be found in the published state on the <code>alarm_consumed_energy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;alarm_consumed_energy&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_consumed_energy&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm consumed energy is ON, if <code>false</code> OFF.</p><h3 id="voltage-min-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-min-numeric" aria-hidden="true">#</a> Voltage min (numeric)</h3><p>Minimum allowable voltage limit for alarms.. Value can be found in the published state on the <code>voltage_min</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage_min&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;voltage_min&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>253</code>.</p><h3 id="voltage-max-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-max-numeric" aria-hidden="true">#</a> Voltage max (numeric)</h3><p>Maximum allowable voltage limit for alarms.. Value can be found in the published state on the <code>voltage_max</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage_max&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;voltage_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>253</code>.</p><h3 id="power-max-numeric" tabindex="-1"><a class="header-anchor" href="#power-max-numeric" aria-hidden="true">#</a> Power max (numeric)</h3><p>Maximum allowable power limit for alarms.. Value can be found in the published state on the <code>power_max</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_max&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65534</code>.</p><h3 id="consumed-energy-limit-numeric" tabindex="-1"><a class="header-anchor" href="#consumed-energy-limit-numeric" aria-hidden="true">#</a> Consumed energy limit (numeric)</h3><p>Limit of electric energy consumption in kW*h. 0 value represents no limit. Value can be found in the published state on the <code>consumed_energy_limit</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;consumed_energy_limit&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;consumed_energy_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65534</code>.</p><h3 id="rssi-numeric" tabindex="-1"><a class="header-anchor" href="#rssi-numeric" aria-hidden="true">#</a> Rssi (numeric)</h3><p>RSSI seen by the device. Value can be found in the published state on the <code>rssi</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-128</code> and the maximum value is <code>127</code>. The unit of this value is <code>dB</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',34),p={},g=(0,o(983744).Z)(p,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),i,(0,a._)("table",null,[d,(0,a._)("tbody",null,[l,(0,a._)("tr",null,[n,(0,a._)("td",null,[(0,a.Wm)(o,{to:"/supported-devices/#v=Perenio"},{default:(0,a.w5)((()=>[(0,a.Uk)("Perenio")])),_:1})])]),r,c,s])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,a.kq)(" Notes END: Do not edit below this line "),u,(0,a._)("p",null,[(0,a.Uk)("This device supports OTA updates, for more information see "),(0,a.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("OTA updates")])),_:1}),(0,a.Uk)(".")]),m,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);