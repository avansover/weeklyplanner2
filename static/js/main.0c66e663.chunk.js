(this.webpackJsonpweeklyplanner2=this.webpackJsonpweeklyplanner2||[]).push([[0],{41:function(t,e,s){t.exports=s(55)},46:function(t,e,s){},47:function(t,e,s){},55:function(t,e,s){"use strict";s.r(e);var r=s(0),a=s.n(r),o=s(18),n=s.n(o),i=(s(46),s(37)),l=s(2),f=s(3),c=s(5),p=s(4),h=s(12),d=s(8),u=(s(47),function(t){Object(c.a)(s,t);var e=Object(p.a)(s);function s(){var t;Object(l.a)(this,s);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).drag=function(e){e.dataTransfer.setData("workerId",t.props.workerDB3[t.props.i1].id),e.dataTransfer.setData("srcClass",e.target.className),e.dataTransfer.setData("ticketWorkerId",t.props.workerDB3[t.props.i1].id),e.dataTransfer.setData("ticketClass",e.target.className)},t.draging=function(t){},t.bringWorkerID1=function(){t.props.bringWorkerID2(t.props.workerDB3[t.props.i1].id)},t}return Object(f.a)(s,[{key:"render",value:function(){return a.a.createElement("div",{id:"ticket".concat(this.props.i1),className:"ticketDiv",style:{borderColor:"".concat(this.props.workerDB3[this.props.i1].color)},draggable:"true",onDragStart:this.drag,onDrag:this.draging,onMouseDown:this.bringWorkerID1},this.props.workerDB3[this.props.i1].name)}}]),s}(r.Component)),g=function(t){Object(c.a)(s,t);var e=Object(p.a)(s);function s(){var t;Object(l.a)(this,s);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).bringWorkerID3=function(e){t.props.bringWorkerID4(e)},t}return Object(f.a)(s,[{key:"render",value:function(){var t=this;return a.a.createElement("div",null,this.props.workerDB2.map((function(e,s){return a.a.createElement(u,{bringWorkerID2:t.bringWorkerID3,key:s,workerDB3:t.props.workerDB2,i1:s})})))}}]),s}(r.Component),v=function(t){Object(c.a)(s,t);var e=Object(p.a)(s);function s(){var t;Object(l.a)(this,s);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).markerData=function(){var e=0,s=0,r=document.getElementsByClassName("dropAreaDiv")[0].offsetLeft;if(void 0!==t.props.axisX1){var a=t.props.axisX1-r,o=t.props.localShifts.map((function(t){return t.shiftStart}));o.push(720),o.push(a);for(var n=0;n<o.length-1;n++)for(var i=0;i<o.length-1-n;i++)if(o[i]>o[i+1]){var l=o[i];o[i]=o[i+1],o[i+1]=l}for(var f=0;f<o.length;f++)if(o[f]===a)var c=f;var p=o[c+1],h=t.props.localShifts.map((function(t){return t.shiftLength+t.shiftStart}));h.push(0),h.push(a);for(var d=0;d<h.length-1;d++)for(var u=0;u<h.length-1-d;u++)if(h[u]>h[u+1]){var g=h[u];h[u]=h[u+1],h[u+1]=g}for(var v=0;v<h.length;v++)if(h[v]===a)var m=v;var k=h[m-1];if(a<k+120)s=k,e=240,p-k<240&&(s=k,e=p-k);else if(a>p-120){var I=p-k;I>=240?(s=p-240,e=240):I<240&&(s=k,e=p-k)}else s=a-120,e=240,s=5*Math.floor((s+1)/5)}return{mrkStr:s,mrkLnth:e}},t.markerColor=function(){return 0===t.markerData().mrkLnth?"#ffffff":"#ffaaaa"},t.markerDataColor=function(){return 0===t.markerData().mrkLnth?"#ffffff":"#000000"},t.addShift=function(){console.log("addShift")},t}return Object(f.a)(s,[{key:"render",value:function(){return a.a.createElement("div",{id:"markerDiv",style:{position:"relative",display:"flex",justifyContent:"space-between",alignItems:"center",height:"21px",width:"".concat(this.markerData().mrkLnth,"px"),border:"0px solid blue",left:"".concat(this.markerData().mrkStr,"px"),zIndex:"-1",backgroundColor:"".concat(this.markerColor())}},a.a.createElement("div",{style:{color:"".concat(this.markerDataColor()),zIndex:-1,fontSize:"12px"}},this.markerData().mrkStr),a.a.createElement("div",{style:{color:"".concat(this.markerDataColor()),zIndex:-1,fontSize:"12px"}},this.markerData().mrkStr+this.markerData().mrkLnth))}}]),s}(r.Component),m=function(t){Object(c.a)(s,t);var e=Object(p.a)(s);function s(t){var r;return Object(l.a)(this,s),(r=e.call(this,t)).shiftColor=function(){var t=parseInt(r.props.shiftData.workerId);return r.props.workerDB4.filter((function(e){return e.id===t}))[0].color},r.workerName=function(){var t=parseInt(r.props.shiftData.workerId),e=r.props.workerDB4.filter((function(e){return e.id===t})),s=r.props.localShifts[r.props.shiftInd1].shiftLength;if(void 0===r.state.shiftLength){if(s>=160)return e[0].name;if(s<160)return"srt"}else{if(r.state.shiftLength>=160)return e[0].name;if(r.state.shiftLength<160)return"srt"}},r.drag=function(t){console.log(t.target),t.dataTransfer.setData("srcDay",r.props.dayInd3),t.dataTransfer.setData("srcPost",r.props.postInd2),t.dataTransfer.setData("srcWorkerId",r.props.shiftData.workerId),t.dataTransfer.setData("srcId",t.target.id),t.dataTransfer.setData("srcClass",t.target.className)},r.rightClick=function(){r.props.rightClick()},r.resizeShift=function(t){t.preventDefault();var e=t.target;console.log(e.className);var s=t.target.parentNode.parentNode;console.log(s);var a=t.target.parentNode.parentNode.parentNode;console.log(a),window.addEventListener("mousemove",r.resize),window.addEventListener("mouseup",r.stopResize);var o=a.offsetLeft,n=s.offsetWidth,i=s.offsetLeft;console.log("dropAreaLeft "+o),console.log("ShiftOldWidth "+n),console.log("shiftOldLeft "+i),r.resize(t),r.setState({shift:s,resizer:e.className,dropAreaLeft:o,ShiftOldWidth:n,shiftOldLeft:i})},r.resize=function(t){var e=r.state.shift,s=r.state.resizer,a=r.state.dropAreaLeft,o=r.state.ShiftOldWidth,n=r.state.shiftOldLeft;if("leftResizer"===s)if(t.pageX>a&&t.pageX-a<=n+o-60){e.style.left=5*Math.floor((t.pageX-a+1)/5)+"px",e.style.width=o+n-5*Math.floor((t.pageX-a+1)/5)+"px";var i=5*Math.floor((t.pageX-a+1)/5),l=o+n-5*Math.floor((t.pageX-a+1)/5);r.setState({shiftLength:l}),r.setState({shiftLeftFinal:i}),r.setState({shiftLengthFinal:l})}else t.pageX<=a?(e.style.left="0px",e.style.width=o+n+"px",r.setState({shiftLength:o+n})):t.pageX-a>n+o-60&&(e.style.left=n+o-60+"px",e.style.width="60px",r.setState({shiftLength:60}));else if("rightResizer"===s)if(t.pageX-a<720&&t.pageX-a>=n+60){e.style.width=5*Math.floor((t.pageX-a-n+1)/5)+"px";var f=5*Math.floor((t.pageX-a-n+1)/5);r.setState({shiftLength:f}),r.setState({shiftLengthFinal:f})}else t.pageX-a>=720?e.style.width=720-n+"px":t.pageX-a<n+60&&(e.style.width="60px")},r.stopResize=function(){window.removeEventListener("mousemove",r.resize),window.removeEventListener("mouseup",r.stopResize),r.props.setResizeData(r.state.resizer,r.state.shiftOldLeft,r.state.ShiftOldWidth,r.state.shiftLeftFinal,r.state.shiftLengthFinal,r.props.shiftData.workerId,r.props.dayInd3,r.props.postInd2)},r.state={shift:void 0,resizer:void 0,dropAreaLeft:void 0,ShiftOldWidth:void 0,shiftOldLeft:void 0,shiftLength:void 0,shiftLeftFinal:void 0,shiftLengthFinal:void 0},r}return Object(f.a)(s,[{key:"render",value:function(){return a.a.createElement("div",{className:"shiftDiv",id:"d".concat(this.props.dayInd3,"p").concat(this.props.postInd2,"s").concat(this.props.localShifts[this.props.shiftInd1].shiftStart,"w").concat(this.props.shiftData.workerId),draggable:"true",onDragStart:this.drag,onDrag:this.draging,onMouseDown:this.bring,onAuxClick:this.rightClick,style:{position:"absolute",width:"".concat(this.props.localShifts[this.props.shiftInd1].shiftLength,"px"),left:"".concat(this.props.localShifts[this.props.shiftInd1].shiftStart,"px"),top:"-1px",display:"flex",justifyContent:"space-between",backgroundColor:"".concat(this.shiftColor()),height:"23px",borderRadius:"3px",zIndex:1}},a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("div",{style:{backgroundColor:"#888888",width:"3px",height:"100%",cursor:"ew-resize"},className:"leftResizer",onMouseDown:this.resizeShift}),a.a.createElement("div",{className:"shiftDataDiv",style:{zIndex:0,fontSize:"8px",pointerEvents:"none",backgroundColor:"#dddddd"}},this.props.localShifts[this.props.shiftInd1].shiftStart)),a.a.createElement("div",{style:{pointerEvents:"none",position:"relative",zIndex:0,fontSize:"12px"}},this.workerName()),a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("div",{className:"shiftDataDiv",style:{zIndex:0,fontSize:"8px",pointerEvents:"none",backgroundColor:"#dddddd"}},this.props.localShifts[this.props.shiftInd1].shiftStart+this.props.localShifts[this.props.shiftInd1].shiftLength),a.a.createElement("div",{style:{backgroundColor:"#888888",width:"3px",height:"100%",cursor:"ew-resize"},className:"rightResizer",onMouseDown:this.resizeShift})))}}]),s}(r.Component),k=s(16),I=Object(r.createContext)(),D=function(t){Object(c.a)(s,t);var e=Object(p.a)(s);function s(){var t;Object(l.a)(this,s);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={globalMarkDay:void 0,globalMarkPost:void 0,shiftLeftFinal:void 0,shiftLengthFinal:void 0,workerId:void 0,dayInd:void 0,postInd:void 0},t.setMarkerIndCon=function(e,s){t.setState({globalMarkDay:e,globalMarkPost:s})},t.setResizeDataCon=function(e,s,r,a,o){t.setState({shiftLeftFinal:e,shiftLengthFinal:s,workerId:r,dayInd:a,postInd:o})},t}return Object(f.a)(s,[{key:"render",value:function(){return a.a.createElement(I.Provider,{value:Object(k.a)(Object(k.a)({},this.state),{},{setMarkerInd:this.setMarkerIndCon,setResizeData:this.setResizeDataCon})},this.props.children)}}]),s}(r.Component),w=function(t){Object(c.a)(s,t);var e=Object(p.a)(s);function s(t){var r;return Object(l.a)(this,s),(r=e.call(this,t)).allowDrop=function(t){if(t.preventDefault(),r.state.axisX!==t.pageX&&r.setState({axisX:t.pageX}),"shiftDiv"!==t.target.className&&"shiftDataDiv"!==t.target.className){var e=r.props.dayInd2,s=r.props.postInd1;(0,r.context.setMarkerInd)(e,s)}},r.placeMarker1=function(){var t=r.context,e=t.globalMarkDay,s=t.globalMarkPost;if(r.props.dayInd2===e&&r.props.postInd1===s)return a.a.createElement(v,{axisX1:r.state.axisX,localShifts:r.props.shiftSet3[r.props.dayInd2].posts[r.props.postInd1].shifts,dayInd3:r.props.dayInd2,postInd2:r.props.postInd1,markerWorkerID4:r.props.markerWorkerID3})},r.drop=function(t){t.preventDefault(),console.log(t.target);var e=t.dataTransfer.getData("srcClass");if("ticketDiv"===e&&"dropAreaDiv"===t.target.className){console.log("clone");var s=t.dataTransfer.getData("ticketWorkerId");console.log("ticketWorkerId "+s),console.log("day "+r.props.dayInd2),console.log("post "+r.props.postInd1),console.log("x "+t.pageX);var a=r.props.shiftSet3,o=s,n=r.props.dayInd2,i=r.props.postInd1,l=t.pageX,f=240,c=l-document.getElementsByClassName("dropAreaDiv")[0].offsetLeft,p=a[n].posts[i].shifts.map((function(t,e){return t.shiftStart}));p.push(720),p.push(c);for(var h=0;h<p.length-1;h++)for(var d=0;d<p.length-1-h;d++)if(p[d]>p[d+1]){var u=p[d];p[d]=p[d+1],p[d+1]=u}for(var g=0;g<p.length;g++)if(p[g]===c)var v=g;var m=p[v+1],k=a[n].posts[i].shifts.map((function(t,e){return t.shiftLength+t.shiftStart}));k.push(0),k.push(c);for(var I=0;I<k.length-1;I++)for(var D=0;D<k.length-1-I;D++)if(k[D]>k[D+1]){var w=k[D];k[D]=k[D+1],k[D+1]=w}for(var y=0;y<k.length;y++)if(k[y]===c)var S=y;var b=k[S-1];if(c<b+120){var E=b;m-b<240&&(E=b,f=m-b)}else if(c>m-120){var O=m-b;O>=240?E=m-240:O<240&&(E=b,f=m-b)}else E=c-120,E=5*Math.floor((E+1)/5);a[n].posts[i].shifts.push({workerId:o,shiftStart:E,shiftLength:f,shiftId:"d".concat(n,"p").concat(i,"s").concat(E,"w").concat(o)});for(var x=0;x<a[n].posts[i].shifts.length;x++)for(var L=0;L<a[n].posts[i].shifts.length-1-x;L++){var j=a[n].posts[i].shifts[L],C=a[n].posts[i].shifts[L+1];if(console.log(a[n].posts[i].shifts[L].shiftStart),j.shiftStart>C.shiftStart){var B=a[n].posts[i].shifts[L];a[n].posts[i].shifts[L]=a[n].posts[i].shifts[L+1],a[n].posts[i].shifts[L+1]=B}}for(var z=0;z<2;z++)for(var W=0;W<a[n].posts[i].shifts.length-1;W++){console.log(a[n].posts[i].shifts);var M=a[n].posts[i].shifts[W],N=a[n].posts[i].shifts[W+1];if(M.shiftStart+M.shiftLength===N.shiftStart&&M.workerId===N.workerId){a[n].posts[i].shifts.push({workerId:M.workerId,shiftStart:M.shiftStart,shiftLength:M.shiftLength+N.shiftLength,shiftId:"d".concat(n,"p").concat(i,"s").concat(M.shiftStart,"w").concat(o)});var T=a[n].posts[i].shifts.length,X=a[n].posts[i].shifts[T-1];a[n].posts[i].shifts[W]=X,a[n].posts[i].shifts.splice(W+1,1),a[n].posts[i].shifts.pop()}}console.log(a)}else if("ticketDiv"===e&&"shiftDiv"===t.target.className){console.log("run over");var R=t.dataTransfer.getData("ticketWorkerId");console.log("ticketWorkerId "+R),console.log("day "+r.props.dayInd2),console.log("post "+r.props.postInd1);var A=r.props.dayInd2,P=r.props.postInd1,F=r.props.shiftSet3,V=t.target.id;console.log("tgtId "+V);var H=V.slice(V.indexOf("w")+1,V.length);console.log("tgtWorkerId "+H),console.log(F);for(var J=0;J<F[A].posts[P].shifts.length;J++)if(F[A].posts[P].shifts[J].shiftId===V){console.log("tgt found"),console.log(F[A].posts[P].shifts[J]);var U=J}var $=V.slice(0,V.indexOf("w")+1)+R;console.log($),F[A].posts[P].shifts[U].workerId=R,F[A].posts[P].shifts[U].shiftId=$;for(var q=0;q<2;q++)for(var G=0;G<F[A].posts[P].shifts.length-1;G++){console.log(F[A].posts[P].shifts);var K=F[A].posts[P].shifts[G],Q=F[A].posts[P].shifts[G+1];if(K.shiftStart+K.shiftLength===Q.shiftStart&&K.workerId===Q.workerId){F[A].posts[P].shifts.push({workerId:K.workerId,shiftStart:K.shiftStart,shiftLength:K.shiftLength+Q.shiftLength,shiftId:"d".concat(A,"p").concat(P,"s").concat(K.shiftStart,"w").concat(K.workerId)});var Y=F[A].posts[P].shifts.length,Z=F[A].posts[P].shifts[Y-1];F[A].posts[P].shifts[G]=Z,F[A].posts[P].shifts.splice(G+1,1),F[A].posts[P].shifts.pop()}}}else if("shiftDiv"===e&&"dropAreaDiv"===t.target.className){var _;!function(){console.log("transfer");var e=r.props.shiftSet3;console.log("day "+r.props.dayInd2),console.log("post "+r.props.postInd1),console.log("x "+t.pageX);var s=t.dataTransfer.getData("srcWorkerId"),a=r.props.dayInd2,o=r.props.postInd1,n=t.pageX;f=240;var i=document.getElementsByClassName("dropAreaDiv")[0].offsetLeft;c=n-i,(p=e[a].posts[o].shifts.map((function(t,e){return t.shiftStart}))).push(720),p.push(c);for(var l=0;l<p.length-1;l++)for(var h=0;h<p.length-1-l;h++)if(p[h]>p[h+1]){var d=p[h];p[h]=p[h+1],p[h+1]=d}for(var u=0;u<p.length;u++)p[u]===c&&(v=u);m=p[v+1],(k=e[a].posts[o].shifts.map((function(t,e){return t.shiftLength+t.shiftStart}))).push(0),k.push(c);for(var g=0;g<k.length-1;g++)for(var I=0;I<k.length-1-g;I++)if(k[I]>k[I+1]){var D=k[I];k[I]=k[I+1],k[I+1]=D}for(var w=0;w<k.length;w++)k[w]===c&&(S=w);if(b=k[S-1],c<b+120)E=b,m-b<240&&(E=b,f=m-b);else if(c>m-120){var y=m-b;y>=240?E=m-240:y<240&&(E=b,f=m-b)}else E=c-120,E=5*Math.floor((E+1)/5);e[a].posts[o].shifts.push({workerId:s,shiftStart:E,shiftLength:f,shiftId:"d".concat(a,"p").concat(o,"s").concat(E,"w").concat(s)});for(var O=0;O<e[a].posts[o].shifts.length;O++)for(var x=0;x<e[a].posts[o].shifts.length-1-O;x++){var L=e[a].posts[o].shifts[x],j=e[a].posts[o].shifts[x+1];if(console.log(e[a].posts[o].shifts[x].shiftStart),L.shiftStart>j.shiftStart){var C=e[a].posts[o].shifts[x];e[a].posts[o].shifts[x]=e[a].posts[o].shifts[x+1],e[a].posts[o].shifts[x+1]=C}}var B=t.dataTransfer.getData("srcId"),z=t.dataTransfer.getData("srcDay"),W=t.dataTransfer.getData("srcPost");console.log(B.slice(B.indexOf("s")+1,B.indexOf("w")));var M=parseInt(B.slice(B.indexOf("s")+1,B.indexOf("w")));console.log(e[z].posts[W].shifts.filter((function(t){return t.shiftStart===M})));for(var N=e[z].posts[W].shifts,T=0;T<N.length;T++)N.filter((function(t){return t.shiftStart===M}))[0].shiftStart===N[T].shiftStart&&(console.log(N[T]),_=T);N.splice(_,1);for(var X=0;X<2;X++)for(var R=0;R<e[a].posts[o].shifts.length-1;R++){console.log(e[a].posts[o].shifts);var A=e[a].posts[o].shifts[R],P=e[a].posts[o].shifts[R+1];if(A.shiftStart+A.shiftLength===P.shiftStart&&A.workerId===P.workerId){e[a].posts[o].shifts.push({workerId:A.workerId,shiftStart:A.shiftStart,shiftLength:A.shiftLength+P.shiftLength,shiftId:"d".concat(a,"p").concat(o,"s").concat(A.shiftStart,"w").concat(s)});var F=e[a].posts[o].shifts.length,V=e[a].posts[o].shifts[F-1];e[a].posts[o].shifts[R]=V,e[a].posts[o].shifts.splice(R+1,1),e[a].posts[o].shifts.pop()}}}()}else if("shiftDiv"===e&&"shiftDiv"===t.target.className){console.log("swap");var tt=t.dataTransfer.getData("srcId"),et=t.dataTransfer.getData("srcDay"),st=t.dataTransfer.getData("srcPost"),rt=t.dataTransfer.getData("srcWorkerId");console.log("swap"),console.log("srcId "+tt),console.log("srcDay "+et),console.log("srcPost "+st),console.log("srcWorkerId "+rt);var at=r.props.shiftSet3,ot=t.target.id;console.log("tgtId "+ot);var nt=r.props.dayInd2;console.log("tgt day "+nt);var it=r.props.postInd1;console.log("tgt post "+it);var lt=ot.slice(ot.indexOf("w")+1,ot.length);console.log("tgtWorkerId "+lt);for(var ft=0;ft<at[et].posts[st].shifts.length;ft++)if(at[et].posts[st].shifts[ft].shiftId===tt){console.log("src found"),console.log(at[et].posts[st].shifts[ft]);var ct=ft}for(var pt=0;pt<at[nt].posts[it].shifts.length;pt++)if(at[nt].posts[it].shifts[pt].shiftId===ot){console.log("tgt found"),console.log(at[nt].posts[it].shifts[pt]);var ht=pt}console.log(ct),console.log(ht),console.log("remaking shiftId ");var dt=tt.slice(0,tt.indexOf("w")+1)+lt;console.log("newSrcId "+dt);var ut=ot.slice(0,ot.indexOf("w")+1)+rt;console.log("tgtNewShiftId "+ut),at[et].posts[st].shifts[ct].workerId=lt,at[et].posts[st].shifts[ct].shiftId=dt,at[nt].posts[it].shifts[ht].workerId=rt,at[nt].posts[it].shifts[ht].shiftId=ut;for(var gt=0;gt<2;gt++){for(var vt=0;vt<at[et].posts[st].shifts.length-1;vt++){console.log(at[et].posts[st].shifts);var mt=at[et].posts[st].shifts[vt],kt=at[et].posts[st].shifts[vt+1];if(mt.shiftStart+mt.shiftLength===kt.shiftStart&&mt.workerId===kt.workerId){at[et].posts[st].shifts.push({workerId:mt.workerId,shiftStart:mt.shiftStart,shiftLength:mt.shiftLength+kt.shiftLength,shiftId:"d".concat(et,"p").concat(st,"s").concat(mt.shiftStart,"w").concat(mt.workerId)});var It=at[et].posts[st].shifts.length,Dt=at[et].posts[st].shifts[It-1];at[et].posts[st].shifts[vt]=Dt,at[et].posts[st].shifts.splice(vt+1,1),at[et].posts[st].shifts.pop()}}for(var wt=0;wt<at[nt].posts[it].shifts.length-1;wt++){console.log(at[nt].posts[it].shifts);var yt=at[nt].posts[it].shifts[wt],St=at[nt].posts[it].shifts[wt+1];if(yt.shiftStart+yt.shiftLength===St.shiftStart&&yt.workerId===St.workerId){at[nt].posts[it].shifts.push({workerId:yt.workerId,shiftStart:yt.shiftStart,shiftLength:yt.shiftLength+St.shiftLength,shiftId:"d".concat(nt,"p").concat(it,"s").concat(yt.shiftStart,"w").concat(yt.workerId)});var bt=at[nt].posts[it].shifts.length,Et=at[nt].posts[it].shifts[bt-1];at[nt].posts[it].shifts[wt]=Et,at[nt].posts[it].shifts.splice(wt+1,1),at[nt].posts[it].shifts.pop()}}}}console.log(t.target.className),r.deleteMarker1()},r.rightClick=function(){console.log("rightClick")},r.deleteMarker1=function(){var t=document.getElementById("markerDiv");null!==t&&t.remove(),r.props.deleteMarker2()},r.addShiftToDB1=function(t,e,s,a){r.props.addShiftToDB2(t,e,s,a)},r.state={axisX:void 0,shiftStartForDrop:void 0,shiftLengthForDrop:void 0,tempA:void 0},r}return Object(f.a)(s,[{key:"render",value:function(){var t=this;return a.a.createElement("div",null,a.a.createElement("div",{className:"postBodyDiv"},a.a.createElement("div",null,this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].name),a.a.createElement("div",{className:"dropAreaDiv",style:{display:"flex",position:"relative"},id:"dropDay".concat(this.props.dayInd2,"Post").concat(this.props.postInd1),onDragOver:this.allowDrop,onDrop:this.drop,onDragLeave:this.deleteMarker1},this.placeMarker1(),this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].shifts.map((function(e,s){return a.a.createElement(m,{setResizeData:t.props.setResizeData,rightClick:t.rightClick,key:s,localShifts:t.props.shiftSet3[t.props.dayInd2].posts[t.props.postInd1].shifts,workerDB4:t.props.workerDB3,markerWorkerID4:t.props.markerWorkerID3,shiftData:e,dayInd3:t.props.dayInd2,postInd2:t.props.postInd1,shiftInd1:s})})))))}}]),s}(r.Component);w.contextType=I;var y=function(t){Object(c.a)(s,t);var e=Object(p.a)(s);function s(){var t;Object(l.a)(this,s);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).deleteMarker3=function(){t.props.deleteMarker4()},t}return Object(f.a)(s,[{key:"render",value:function(){var t=this;return a.a.createElement("div",null,a.a.createElement("div",{className:"dayBodyDiv"},a.a.createElement("div",{className:"dayNameDiv"},this.props.shiftSet2[this.props.dayInd1].name),a.a.createElement("div",null,this.props.shiftSet2[this.props.dayInd1].posts.map((function(e,s){return a.a.createElement(D,{key:s},a.a.createElement(w,{deleteMarker2:t.deleteMarker3,setResizeData:t.props.setResizeData,key:s,shiftSet3:t.props.shiftSet2,workerDB3:t.props.workerDB2,postInd1:s,dayInd2:t.props.dayInd1,markerWorkerID3:t.props.markerWorkerID2}))})))))}}]),s}(r.Component),S=function(t){Object(c.a)(s,t);var e=Object(p.a)(s);function s(){var t;Object(l.a)(this,s);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).deleteMarker5=function(){t.props.deleteMarker6()},t.bringWorkerID5=function(e){t.props.bringWorkerID6(e)},t.drop=function(e){var s,r=e.dataTransfer.getData("srcClass");"shiftDiv"===r&&"shiftDiv"!==e.target.className&&"dropAreaDiv"!==e.target.className&&function(){var a=e.dataTransfer.getData("srcDay"),o=e.dataTransfer.getData("srcPost"),n=e.dataTransfer.getData("srcId");console.log(r),console.log(e.target.className);var i=parseInt(n.slice(n.indexOf("s")+1,n.indexOf("w")));console.log(i);for(var l=t.props.shiftSet1,f=l[a].posts[o].shifts,c=0;c<f.length;c++)f.filter((function(t){return t.shiftStart===i}))[0].shiftStart===f[c].shiftStart&&(console.log(f[c]),s=c);f.splice(s,1),console.log(l),t.props.deleteShift(l)}()},t.allowDrop=function(t){t.preventDefault()},t}return Object(f.a)(s,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{onDrop:this.drop,onDragOver:this.allowDrop},a.a.createElement("div",{id:"plnWrkBox"},a.a.createElement("div",null,a.a.createElement(D,null,a.a.createElement(g,{bringWorkerID4:this.bringWorkerID5,workerDB2:this.props.workerDB1}))),a.a.createElement("div",{id:"plannerDiv"},this.props.shiftSet1.map((function(e,s){return a.a.createElement(y,{deleteMarker4:t.deleteMarker5,setResizeData:t.props.setResizeData,key:s,shiftSet2:t.props.shiftSet1,workerDB2:t.props.workerDB1,dayInd1:s,markerWorkerID2:t.props.markerWorkerID1})})))))}}]),s}(r.Component),b=s(59),E=function(t){Object(c.a)(s,t);var e=Object(p.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(f.a)(s,[{key:"render",value:function(){return a.a.createElement("div",{style:{display:"flex",position:"relative"}},a.a.createElement("div",null,a.a.createElement(b.a,null,a.a.createElement(b.a.Toggle,{variant:"success",id:"dropdown-basic"},"Dropdown Button"),a.a.createElement(b.a.Menu,null,this.props.workerDB.map((function(t,e){return a.a.createElement(b.a.Item,{href:"#/worker".concat(t.id),key:e},t.id)}))))),a.a.createElement("div",null,"workers data"))}}]),s}(r.Component),O=function(t){Object(c.a)(s,t);var e=Object(p.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(f.a)(s,[{key:"render",value:function(){return a.a.createElement("div",null,"History")}}]),s}(r.Component),x=function(t){Object(c.a)(s,t);var e=Object(p.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(f.a)(s,[{key:"render",value:function(){return a.a.createElement("div",null,"SetPlan")}}]),s}(r.Component),L=function(t){Object(c.a)(s,t);var e=Object(p.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(f.a)(s,[{key:"render",value:function(){return a.a.createElement("div",null,"HomePage")}}]),s}(r.Component),j=function(t){Object(c.a)(s,t);var e=Object(p.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(f.a)(s,[{key:"render",value:function(){var t=this;return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("input",{placeholder:"user name",disabled:!0})),a.a.createElement("div",null,a.a.createElement("input",{placeholder:"password",disabled:!0})),a.a.createElement("div",null,a.a.createElement(h.b,{to:"/planner"},a.a.createElement("button",{onClick:function(){return t.props.login()}},"enter"))))}}]),s}(r.Component),C=function(t){Object(c.a)(s,t);var e=Object(p.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(f.a)(s,[{key:"render",value:function(){return a.a.createElement("div",null,"SignUp")}}]),s}(r.Component),B=function(t){Object(c.a)(s,t);var e=Object(p.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(f.a)(s,[{key:"render",value:function(){return a.a.createElement("div",{style:{display:"flex",position:"relative"}},a.a.createElement("div",null,a.a.createElement(b.a,null,a.a.createElement(b.a.Toggle,{variant:"success",id:"dropdown-basic"},"Dropdown Button"),a.a.createElement(b.a.Menu,null,this.props.workerDB.map((function(t,e){return a.a.createElement(b.a.Item,{href:"#/worker".concat(t.id),key:e},t.id)}))))),a.a.createElement("div",null,"Worker id is ",this.props.workerID))}}]),s}(r.Component),z=function(t){Object(c.a)(s,t);var e=Object(p.a)(s);function s(t){var r;return Object(l.a)(this,s),(r=e.call(this,t)).deleteMarker7=function(){r.setState({markerPlaceDay:void 0}),r.setState({markerPlacePost:void 0})},r.bringWorkerID7=function(t){},r.higherBarView=function(){return"in"===r.state.higherBarView?a.a.createElement("div",{style:{display:"flex",position:"relative"}},a.a.createElement("div",null,a.a.createElement(h.b,{to:"/login"},a.a.createElement("button",null,"log in"))),a.a.createElement("div",null,a.a.createElement(h.b,{to:"/signup"},a.a.createElement("button",null,"signup")))):"out"===r.state.higherBarView?a.a.createElement("div",{style:{display:"flex",position:"relative"}},a.a.createElement("div",{style:{marginRight:"10px"}},"hello user"),a.a.createElement("div",null,a.a.createElement(h.b,{to:"/"},a.a.createElement("button",{onClick:function(){return r.setState({higherBarView:"in"})}},"logout")))):void 0},r.lowerBarView=function(){return"in"===r.state.higherBarView?a.a.createElement("div",{style:{display:"flex",position:"relative"}}):"out"===r.state.higherBarView?a.a.createElement("div",{style:{display:"flex",position:"relative"}},a.a.createElement("div",null,a.a.createElement(h.b,{to:"/planner"},a.a.createElement("button",null,"Planner"))),a.a.createElement("div",null,a.a.createElement(h.b,{to:"/personal"},a.a.createElement("button",null,"Personal"))),a.a.createElement("div",null,a.a.createElement(h.b,{to:"/setplanner"},a.a.createElement("button",null,"Set Planner"))),a.a.createElement("div",null,a.a.createElement(h.b,{to:"/history"},a.a.createElement("button",null,"History")))):void 0},r.login=function(){r.setState({higherBarView:"out"})},r.deleteShift=function(t){r.setState({shiftSet:t})},r.setResizeData=function(t,e,s,a,o,n,l,f){console.log(t);var c=Object(i.a)(r.state.shiftSet);if("leftResizer"===t&&void 0!==a){console.log(t);for(var p=0;p<c[l].posts[f].shifts.length;p++)c[l].posts[f].shifts[p].shiftStart===e&&(c[l].posts[f].shifts[p].shiftStart=a,c[l].posts[f].shifts[p].shiftLength=o,c[l].posts[f].shifts[p].shiftId="d".concat(l,"p").concat(f,"s").concat(a,"w").concat(n),r.setState({shiftSet:c}))}else if("rightResizer"===t&&void 0!==o){console.log(t),console.log(o);for(var h=0;h<c[l].posts[f].shifts.length;h++)c[l].posts[f].shifts[h].shiftStart===e&&(c[l].posts[f].shifts[h].shiftLength=o,c[l].posts[f].shifts[h].shiftId="d".concat(l,"p").concat(f,"s").concat(a,"w").concat(n),r.setState({shiftSet:c}))}},r.state={shiftSet:[{name:"Su",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"Mo",posts:[{name:"post6",shifts:[]},{name:"post7",shifts:[]},{name:"post8",shifts:[]}]},{name:"Tu",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"We",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"Th",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"Fr",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]},{name:"post4",shifts:[]}]},{name:"Sa",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]}],workerDB:[{id:0,name:"Amir Vansover",color:"#ff0000"},{id:1,name:"drag",color:"#00aa00"},{id:2,name:"draggable 3",color:"#6666ff"},{id:3,name:"draggable 4",color:"#aaaa00"},{id:4,name:"draggable 5",color:"#ff00ff"},{id:124,name:"draggable 6",color:"#00ffff"}],markerWorkerID:void 0,higherBarView:"in"},r}return Object(f.a)(s,[{key:"render",value:function(){var t=this;return a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return console.log(t.state.shiftSet)}},"log state"),a.a.createElement(h.a,null,a.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",position:"relative"}},a.a.createElement("div",{style:{alignSelf:"flex-end"}},this.higherBarView())),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",position:"relative"}},a.a.createElement("div",{style:{alignSelf:"center"}},this.lowerBarView())),a.a.createElement(d.c,null,a.a.createElement(d.a,{exact:!0,path:"/planner",component:function(){return a.a.createElement(S,{deleteMarker6:t.deleteMarker7,deleteShift:t.deleteShift,setResizeData:t.setResizeData,bringWorkerID6:t.bringWorkerID7,workerDB1:t.state.workerDB,markerWorkerID1:t.state.markerWorkerID,shiftSet1:t.state.shiftSet})}}),a.a.createElement(d.a,{exact:!0,path:"/personal",component:function(){return a.a.createElement(E,{workerDB:t.state.workerDB})}}),this.state.workerDB.map((function(e,s){return a.a.createElement(d.a,{exact:!0,path:"/worker".concat(e.id),key:s,component:function(){return a.a.createElement(B,{workerDB:t.state.workerDB,workerID:e.id,key:s})}})})),a.a.createElement(d.a,{exact:!0,path:"/history",component:function(){return a.a.createElement(O,null)}}),a.a.createElement(d.a,{exact:!0,path:"/setplanner",component:function(){return a.a.createElement(x,null)}}),a.a.createElement(d.a,{exact:!0,path:"/",component:function(){return a.a.createElement(L,null)}}),a.a.createElement(d.a,{exact:!0,path:"/login",component:function(){return a.a.createElement(j,{login:t.login})}}),a.a.createElement(d.a,{exact:!0,path:"/signup",component:function(){return a.a.createElement(C,null)}}))))}}]),s}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s(54);var W=s(35),M=document.getElementById("root");n.a.render(a.a.createElement(z,null),M),Object(W.a)(M),n.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.0c66e663.chunk.js.map