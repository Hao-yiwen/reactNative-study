__d((function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),s=t((function t(){n(this,t),this.any_blank_count=0,this.any_blank_ms=0,this.any_blank_speed_sum=0,this.mostly_blank_count=0,this.mostly_blank_ms=0,this.pixels_blank=0,this.pixels_sampled=0,this.pixels_scrolled=0,this.total_time_spent=0,this.sample_count=0})),l=[],_=10,o=null,h=(function(){return t((function t(l){n(this,t),this._anyBlankStartTime=null,this._enabled=!1,this._info=new s,this._mostlyBlankStartTime=null,this._samplesStartTime=null,this._getFrameMetrics=l,this._enabled=(o||0)>Math.random(),this._resetData()}),[{key:"activate",value:function(){this._enabled&&null==this._samplesStartTime&&(this._samplesStartTime=g.performance.now())}},{key:"deactivateAndFlush",value:function(){if(this._enabled){var t=this._samplesStartTime;if(null!=t)if(this._info.sample_count<_)this._resetData();else{var n=g.performance.now()-t,s=Object.assign({},this._info,{total_time_spent:n});l.forEach((function(t){return t(s)})),this._resetData()}}}},{key:"computeBlankness",value:function(t,n,s){if(!this._enabled||0===t.getItemCount(t.data)||n.last<n.first||null==this._samplesStartTime)return 0;var l=s.dOffset,_=s.offset,o=s.velocity,h=s.visibleLength;this._info.sample_count++,this._info.pixels_sampled+=Math.round(h),this._info.pixels_scrolled+=Math.round(Math.abs(l));var u=Math.round(1e3*Math.abs(o)),f=g.performance.now();null!=this._anyBlankStartTime&&(this._info.any_blank_ms+=f-this._anyBlankStartTime),this._anyBlankStartTime=null,null!=this._mostlyBlankStartTime&&(this._info.mostly_blank_ms+=f-this._mostlyBlankStartTime),this._mostlyBlankStartTime=null;for(var c=0,k=n.first,y=this._getFrameMetrics(k,t);k<=n.last&&(!y||!y.inLayout);)y=this._getFrameMetrics(k,t),k++;y&&k>0&&(c=Math.min(h,Math.max(0,y.offset-_)));for(var p=0,b=n.last,v=this._getFrameMetrics(b,t);b>=n.first&&(!v||!v.inLayout);)v=this._getFrameMetrics(b,t),b--;if(v&&b<t.getItemCount(t.data)-1){var S=v.offset+v.length;p=Math.min(h,Math.max(0,_+h-S))}var M=Math.round(c+p),T=M/h;return T>0?(this._anyBlankStartTime=f,this._info.any_blank_speed_sum+=u,this._info.any_blank_count++,this._info.pixels_blank+=M,T>.5&&(this._mostlyBlankStartTime=f,this._info.mostly_blank_count++)):(u<.01||Math.abs(l)<1)&&this.deactivateAndFlush(),T}},{key:"enabled",value:function(){return this._enabled}},{key:"_resetData",value:function(){this._anyBlankStartTime=null,this._info=new s,this._mostlyBlankStartTime=null,this._samplesStartTime=null}}],[{key:"addListener",value:function(t){return null===o&&console.warn('Call `FillRateHelper.setSampleRate` before `addListener`.'),l.push(t),{remove:function(){l=l.filter((function(n){return t!==n}))}}}},{key:"setSampleRate",value:function(t){o=t}},{key:"setMinSampleCount",value:function(t){_=t}}])})();m.exports=h}),318,[15,14]);