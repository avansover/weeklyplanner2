(this.webpackJsonpweeklyplanner2=this.webpackJsonpweeklyplanner2||[]).push([[0],{41:function(t,e,s){t.exports=s(55)},46:function(t,e,s){},47:function(t,e,s){},55:function(t,e,s){"use strict";s.r(e);var a=s(0),r=s.n(a),o=s(18),n=s.n(o),i=(s(46),s(19)),l=s(2),f=s(3),h=s(5),c=s(4),p=s(12),d=s(8),u=(s(47),function(t){Object(h.a)(s,t);var e=Object(c.a)(s);function s(){var t;Object(l.a)(this,s);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).drag=function(e){e.dataTransfer.setData("workerId",t.props.workerDB3[t.props.i1].id),e.dataTransfer.setData("srcClass",e.target.className),e.dataTransfer.setData("ticketWorkerId",t.props.workerDB3[t.props.i1].id),e.dataTransfer.setData("ticketClass",e.target.className)},t.draging=function(t){},t.bringWorkerID1=function(){t.props.bringWorkerID2(t.props.workerDB3[t.props.i1].id)},t}return Object(f.a)(s,[{key:"render",value:function(){return r.a.createElement("div",{id:"ticket".concat(this.props.i1),className:"ticketDiv",style:{borderColor:"".concat(this.props.workerDB3[this.props.i1].color)},draggable:"true",onDragStart:this.drag,onDrag:this.draging,onMouseDown:this.bringWorkerID1},this.props.workerDB3[this.props.i1].firstName," ",this.props.workerDB3[this.props.i1].lastName)}}]),s}(a.Component)),g=function(t){Object(h.a)(s,t);var e=Object(c.a)(s);function s(){var t;Object(l.a)(this,s);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).bringWorkerID3=function(e){t.props.bringWorkerID4(e)},t}return Object(f.a)(s,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,this.props.workerDB2.map((function(e,s){return r.a.createElement(u,{bringWorkerID2:t.bringWorkerID3,key:s,workerDB3:t.props.workerDB2,i1:s})})))}}]),s}(a.Component),v=function(t){Object(h.a)(s,t);var e=Object(c.a)(s);function s(){var t;Object(l.a)(this,s);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).markerData=function(){var e=0,s=0,a=document.getElementsByClassName("dropAreaDiv")[0].offsetLeft;if(void 0!==t.props.axisX1){var r=t.props.axisX1-a;if(r>-1&&r<720){var o=t.props.localShifts.map((function(t){return t.shiftStart}));o.push(720),o.push(r);for(var n=0;n<o.length-1;n++)for(var i=0;i<o.length-1-n;i++)if(o[i]>o[i+1]){var l=o[i];o[i]=o[i+1],o[i+1]=l}for(var f=0;f<o.length;f++)if(o[f]===r)var h=f;var c=o[h+1],p=t.props.localShifts.map((function(t){return t.shiftLength+t.shiftStart}));p.push(0),p.push(r);for(var d=0;d<p.length-1;d++)for(var u=0;u<p.length-1-d;u++)if(p[u]>p[u+1]){var g=p[u];p[u]=p[u+1],p[u+1]=g}for(var v=0;v<p.length;v++)if(p[v]===r)var m=v;var k=p[m-1];if(r<k+120)s=k,e=240,c-k<240&&(s=k,e=c-k);else if(r>c-120){var I=c-k;I>=240?(s=c-240,e=240):I<240&&(s=k,e=c-k)}else s=r-120,e=240,s=5*Math.floor((s+1)/5)}return{mrkStr:s,mrkLnth:e}}},t.markerColor=function(){return 0===t.markerData().mrkLnth?"#ffffff":"#aaaaaa"},t.markerDataColor=function(){return 0===t.markerData().mrkLnth?"#ffffff":"#000000"},t.addShift=function(){console.log("addShift")},t}return Object(f.a)(s,[{key:"render",value:function(){return r.a.createElement("div",{id:"markerDiv",style:{position:"relative",display:"flex",justifyContent:"space-between",alignItems:"center",height:"21px",width:"".concat(this.markerData().mrkLnth,"px"),border:"0px solid blue",left:"".concat(this.markerData().mrkStr,"px"),zIndex:"-1",backgroundColor:"".concat(this.markerColor())}},r.a.createElement("div",{style:{color:"".concat(this.markerDataColor()),zIndex:-1,fontSize:"12px"}},this.markerData().mrkStr),r.a.createElement("div",{style:{color:"".concat(this.markerDataColor()),zIndex:-1,fontSize:"12px"}},this.markerData().mrkStr+this.markerData().mrkLnth))}}]),s}(a.Component),m=function(t){Object(h.a)(s,t);var e=Object(c.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).shiftColor=function(){var t=a.props.shiftData.workerId;return a.props.workerDB4.filter((function(e){return e.id===t}))[0].color},a.workerName=function(){var t=a.props.shiftData.workerId,e=a.props.workerDB4.filter((function(e){return e.id===t})),s=a.props.localShifts[a.props.shiftInd1].shiftLength;if(void 0===a.state.shiftLength){if(s>=160)return r.a.createElement("div",null," ",e[0].firstName," ",e[0].lastName," ");if(s<160&&s>100)return r.a.createElement("div",null," ",e[0].firstName,". ",e[0].lastName.charAt(0)," ");if(s<=100)return r.a.createElement("div",null," ",e[0].firstName.charAt(0),". ",e[0].lastName.charAt(0)," ")}else{if(a.state.shiftLength>=160)return r.a.createElement("div",null," ",e[0].firstName," ",e[0].lastName," ");if(a.state.shiftLength<160&&a.state.shiftLength>100)return r.a.createElement("div",null," ",e[0].firstName,". ",e[0].lastName.charAt(0)," ");if(a.state.shiftLength<=100)return r.a.createElement("div",null," ",e[0].firstName.charAt(0),". ",e[0].lastName.charAt(0)," ")}},a.drag=function(t){console.log(t.target),t.dataTransfer.setData("srcDay",a.props.dayInd3),t.dataTransfer.setData("srcPost",a.props.postInd2),t.dataTransfer.setData("srcWorkerId",a.props.shiftData.workerId),t.dataTransfer.setData("srcId",t.target.id),t.dataTransfer.setData("srcClass",t.target.className)},a.rightClick=function(){a.props.rightClick()},a.resizeShift=function(t){t.preventDefault();var e=t.target;console.log(e.className);var s=t.target.parentNode.parentNode,r=t.target.parentNode.parentNode.id,o=t.target.parentNode.parentNode.parentNode;console.log(o),window.addEventListener("mousemove",a.resize),window.addEventListener("mouseup",a.stopResize);var n=o.offsetLeft,i=s.getBoundingClientRect().width,l=s.getBoundingClientRect().left-n-.625;console.log("dropAreaLeft "+n),console.log("ShiftOldWidth "+i),console.log("shiftOldLeft "+l),a.resize(t),a.setState({shiftId:r,shift:s,resizer:e.className,dropAreaLeft:n,ShiftOldWidth:i,shiftOldLeft:l})},a.resize=function(t){var e=a.state.shift,s=a.state.resizer,r=a.state.dropAreaLeft,o=a.state.ShiftOldWidth,n=a.state.shiftOldLeft,l=Object(i.a)(a.props.shiftSet4),f=a.props.dayInd3,h=a.props.postInd2;if("leftResizer"===s){for(var c=l[f].posts[h].shifts,p=[],d=0;d<c.length;d++)n>l[f].posts[h].shifts[d].shiftStart&&p.push(c[d]);if(t.pageX>r&&t.pageX-r<=n+o-10){e.style.left=5*Math.floor((t.pageX-r+1)/5)+"px",e.style.width=o+n-5*Math.floor((t.pageX-r+1)/5)+"px";var u=5*Math.floor((t.pageX-r+1)/5),g=o+n-5*Math.floor((t.pageX-r+1)/5);a.setState({shiftLength:g}),a.setState({shiftLeftFinal:u}),a.setState({shiftLengthFinal:g}),g<60?a.setState({shiftDataVIew:"none"}):g>=60&&a.setState({shiftDataVIew:"flex"});for(var v=0;v<p.length;v++){var m=p[v].shiftStart+p[v].shiftLength,k=document.getElementById("".concat(p[v].shiftId));if(u<m){if(k.style.width=u-p[v].shiftStart+"px",u-p[v].shiftStart<100&&p[v].shiftStart<u)for(var I=document.getElementById("".concat(p[v].shiftId));I.lastElementChild;)I.removeChild(I.lastElementChild)}else k.style.width=p[v].shiftLength+"px"}}else t.pageX<=r?(e.style.left="0px",e.style.width=o+n+"px",a.setState({shiftLength:o+n}),a.setState({shiftLeftFinal:0}),a.setState({shiftLengthFinal:o+n})):t.pageX-r>n+o-10&&(console.log(n+o-10),e.style.left=n+o-10+"px",e.style.width="10px",a.setState({shiftLength:10}),a.setState({shiftLeftFinal:n+o-10}),a.setState({shiftLengthFinal:10}),a.setState({shiftDataVIew:"none"}))}else if("rightResizer"===s){for(var S=l[f].posts[h].shifts,w=[],D=0;D<S.length;D++)n<l[f].posts[h].shifts[D].shiftStart&&w.push(S[D]);if(t.pageX-r<720&&t.pageX-r>=n+10){e.style.width=5*Math.floor((t.pageX-r-n+1)/5)+"px";var y=5*Math.floor((t.pageX-r-n+1)/5);a.setState({shiftLength:y}),a.setState({shiftLengthFinal:y}),y<60?a.setState({shiftDataVIew:"none"}):y>=60&&a.setState({shiftDataVIew:"flex"});for(var E=0;E<w.length;E++){var b=w[E].shiftStart,L=document.getElementById("".concat(w[E].shiftId));if(t.pageX-r>b&&t.pageX-r<w[E].shiftStart+w[E].shiftLength)if(L.style.left=n+y+"px",L.style.width=w[E].shiftStart+w[E].shiftLength-n-y+"px",w[E].shiftStart+w[E].shiftLength-n-y<100)for(var x=document.getElementById("".concat(w[E].shiftId));x.lastElementChild;)x.removeChild(x.lastElementChild);else L.style.left=n+y+"px",L.style.width=w[E].shiftStart+w[E].shiftLength-n-y+"px";else t.pageX-r>=w[E].shiftStart+w[E].shiftLength?L.style.width="0px":(L.style.left=w[E].shiftStart+"px",L.style.width=w[E].shiftLength+"px")}}else if(t.pageX-r>=720){e.style.width=720-n+"px",a.setState({shiftLength:720-n}),a.setState({shiftLengthFinal:720-n});for(var O=0;O<w.length;O++){var j=w[O].shiftStart,C=document.getElementById("".concat(w[O].shiftId));C.style.left=j+"px",C.style.width="0px"}}else t.pageX-r-10<n&&(console.log(t.pageX-r),e.style.width="10px",a.setState({shortestShift:10}),a.setState({shiftLengthFinal:10}),a.setState({shiftDataVIew:"none"}))}},a.dataDivView=function(){return void 0!==a.state.shiftDataVIew?a.state.shiftDataVIew:a.props.shiftData.shiftLength>=60?"flex":a.props.shiftData.shiftLength<60?"none":void 0},a.stopResize=function(){window.removeEventListener("mousemove",a.resize),window.removeEventListener("mouseup",a.stopResize),a.props.setResizeData(a.state.resizer,a.state.shiftOldLeft,a.state.ShiftOldWidth,a.state.shiftLeftFinal,a.state.shiftLengthFinal,a.props.shiftData.workerId,a.props.dayInd3,a.props.postInd2)},a.showShiftStart=function(){return void 0===a.state.shiftLeftFinal?a.props.localShifts[a.props.shiftInd1].shiftStart:a.state.shiftLeftFinal},a.showShiftEnd=function(){return void 0===a.state.shiftLeftFinal&&void 0===a.state.shiftLengthFinal?a.props.localShifts[a.props.shiftInd1].shiftStart+a.props.localShifts[a.props.shiftInd1].shiftLength:void 0===a.state.shiftLeftFinal&&void 0!==a.state.shiftLengthFinal?a.props.localShifts[a.props.shiftInd1].shiftStart+a.state.shiftLengthFinal:void 0!==a.state.shiftLeftFinal&&void 0!==a.state.shiftLengthFinal?a.state.shiftLeftFinal+a.state.shiftLengthFinal:void 0},a.state={shift:void 0,resizer:void 0,dropAreaLeft:void 0,ShiftOldWidth:void 0,shiftOldLeft:void 0,shiftLength:void 0,shiftDataVIew:void 0,shiftLeftFinal:void 0,shiftLengthFinal:void 0,shiftId:void 0},a}return Object(f.a)(s,[{key:"render",value:function(){return r.a.createElement("div",{className:"shiftDiv",id:"d".concat(this.props.dayInd3,"p").concat(this.props.postInd2,"s").concat(this.props.localShifts[this.props.shiftInd1].shiftStart,"w").concat(this.props.shiftData.workerId),draggable:"true",onDragStart:this.drag,onDrag:this.draging,onMouseDown:this.bring,onAuxClick:this.rightClick,style:{position:"absolute",width:"".concat(this.props.localShifts[this.props.shiftInd1].shiftLength,"px"),left:"".concat(this.props.localShifts[this.props.shiftInd1].shiftStart,"px"),top:"-1px",display:"flex",justifyContent:"space-between",backgroundColor:"".concat(this.shiftColor()),height:"23px",borderRadius:"3px",zIndex:1}},r.a.createElement("div",{style:{display:"flex",pointerEvents:"none"}},r.a.createElement("div",{style:{backgroundColor:"#888888",width:"2px",height:"100%",cursor:"ew-resize",pointerEvents:"initial"},className:"leftResizer",onMouseDown:this.resizeShift}),r.a.createElement("div",{className:"shiftDataDiv",style:{display:"".concat(this.dataDivView()),zIndex:0,fontSize:"8px",pointerEvents:"none",backgroundColor:"#dddddd"}},this.showShiftStart())),r.a.createElement("div",{style:{display:"".concat(this.dataDivView()),pointerEvents:"none",position:"relative",zIndex:0,fontSize:"12px"}},this.workerName()),r.a.createElement("div",{style:{display:"flex",pointerEvents:"none"}},r.a.createElement("div",{className:"shiftDataDiv",style:{display:"".concat(this.dataDivView()),zIndex:0,fontSize:"8px",pointerEvents:"none",backgroundColor:"#dddddd"}},this.showShiftEnd()),r.a.createElement("div",{style:{backgroundColor:"#888888",width:"2px",height:"100%",cursor:"ew-resize",pointerEvents:"initial"},className:"rightResizer",onMouseDown:this.resizeShift})))}}]),s}(a.Component),k=s(16),I=Object(a.createContext)(),S=function(t){Object(h.a)(s,t);var e=Object(c.a)(s);function s(){var t;Object(l.a)(this,s);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={globalMarkDay:void 0,globalMarkPost:void 0,shiftLeftFinal:void 0,shiftLengthFinal:void 0,workerId:void 0,dayInd:void 0,postInd:void 0},t.setMarkerIndCon=function(e,s){t.setState({globalMarkDay:e,globalMarkPost:s})},t.setResizeDataCon=function(e,s,a,r,o){t.setState({shiftLeftFinal:e,shiftLengthFinal:s,workerId:a,dayInd:r,postInd:o})},t}return Object(f.a)(s,[{key:"render",value:function(){return r.a.createElement(I.Provider,{value:Object(k.a)(Object(k.a)({},this.state),{},{setMarkerInd:this.setMarkerIndCon,setResizeData:this.setResizeDataCon})},this.props.children)}}]),s}(a.Component),w=function(t){Object(h.a)(s,t);var e=Object(c.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).allowDrop=function(t){if(t.preventDefault(),a.state.axisX!==t.pageX&&a.setState({axisX:t.pageX}),"shiftDiv"!==t.target.className&&"shiftDataDiv"!==t.target.className){var e=a.props.dayInd2,s=a.props.postInd1;(0,a.context.setMarkerInd)(e,s)}},a.placeMarker1=function(){var t=a.context,e=t.globalMarkDay,s=t.globalMarkPost;if(a.props.dayInd2===e&&a.props.postInd1===s)return r.a.createElement(v,{axisX1:a.state.axisX,localShifts:a.props.shiftSet3[a.props.dayInd2].posts[a.props.postInd1].shifts,dayInd3:a.props.dayInd2,postInd2:a.props.postInd1,markerWorkerID4:a.props.markerWorkerID3})},a.drop=function(t){t.preventDefault(),console.log(t.target);var e=t.dataTransfer.getData("srcClass");if("ticketDiv"===e&&"dropAreaDiv"===t.target.className){console.log("clone");var s=t.dataTransfer.getData("ticketWorkerId");console.log("ticketWorkerId "+s),console.log("day "+a.props.dayInd2),console.log("post "+a.props.postInd1),console.log("x "+t.pageX);var r=a.props.shiftSet3,o=s,n=a.props.dayInd2,i=a.props.postInd1,l=t.pageX,f=240,h=l-document.getElementsByClassName("dropAreaDiv")[0].offsetLeft;if(console.log(h),h>-1&&h<720){var c=r[n].posts[i].shifts.map((function(t,e){return t.shiftStart}));c.push(720),c.push(h);for(var p=0;p<c.length-1;p++)for(var d=0;d<c.length-1-p;d++)if(c[d]>c[d+1]){var u=c[d];c[d]=c[d+1],c[d+1]=u}for(var g=0;g<c.length;g++)if(c[g]===h)var v=g;var m=c[v+1],k=r[n].posts[i].shifts.map((function(t,e){return t.shiftLength+t.shiftStart}));k.push(0),k.push(h);for(var I=0;I<k.length-1;I++)for(var S=0;S<k.length-1-I;S++)if(k[S]>k[S+1]){var w=k[S];k[S]=k[S+1],k[S+1]=w}for(var D=0;D<k.length;D++)if(k[D]===h)var y=D;var E=k[y-1];if(h<E+120){var b=E;m-E<240&&(b=E,f=m-E)}else if(h>m-120){var L=m-E;L>=240?b=m-240:L<240&&(b=E,f=m-E)}else b=h-120,b=5*Math.floor((b+1)/5);r[n].posts[i].shifts.push({workerId:o,shiftStart:b,shiftLength:f,shiftId:"d".concat(n,"p").concat(i,"s").concat(b,"w").concat(o)});for(var x=0;x<r[n].posts[i].shifts.length;x++)for(var O=0;O<r[n].posts[i].shifts.length-1-x;O++){var j=r[n].posts[i].shifts[O],C=r[n].posts[i].shifts[O+1];if(console.log(r[n].posts[i].shifts[O].shiftStart),j.shiftStart>C.shiftStart){var N=r[n].posts[i].shifts[O];r[n].posts[i].shifts[O]=r[n].posts[i].shifts[O+1],r[n].posts[i].shifts[O+1]=N}}for(var W=0;W<2;W++)for(var B=0;B<r[n].posts[i].shifts.length-1;B++){console.log(r[n].posts[i].shifts);var z=r[n].posts[i].shifts[B],M=r[n].posts[i].shifts[B+1];if(z.shiftStart+z.shiftLength===M.shiftStart&&z.workerId===M.workerId){r[n].posts[i].shifts.push({workerId:z.workerId,shiftStart:z.shiftStart,shiftLength:z.shiftLength+M.shiftLength,shiftId:"d".concat(n,"p").concat(i,"s").concat(z.shiftStart,"w").concat(o)});var T=r[n].posts[i].shifts.length,F=r[n].posts[i].shifts[T-1];r[n].posts[i].shifts[B]=F,r[n].posts[i].shifts.splice(B+1,1),r[n].posts[i].shifts.pop()}}console.log(r)}}else if("ticketDiv"===e&&"shiftDiv"===t.target.className){console.log("run over");var X=t.dataTransfer.getData("ticketWorkerId");console.log("ticketWorkerId "+X),console.log("day "+a.props.dayInd2),console.log("post "+a.props.postInd1);var A=a.props.dayInd2,R=a.props.postInd1,V=a.props.shiftSet3,P=t.target.id;console.log("tgtId "+P);var H=P.slice(P.indexOf("w")+1,P.length);console.log("tgtWorkerId "+H),console.log(V);for(var J=0;J<V[A].posts[R].shifts.length;J++)if(V[A].posts[R].shifts[J].shiftId===P){console.log("tgt found"),console.log(V[A].posts[R].shifts[J]);var U=J}var $=P.slice(0,P.indexOf("w")+1)+X;console.log($),V[A].posts[R].shifts[U].workerId=X,V[A].posts[R].shifts[U].shiftId=$;for(var q=0;q<2;q++)for(var G=0;G<V[A].posts[R].shifts.length-1;G++){console.log(V[A].posts[R].shifts);var K=V[A].posts[R].shifts[G],Q=V[A].posts[R].shifts[G+1];if(K.shiftStart+K.shiftLength===Q.shiftStart&&K.workerId===Q.workerId){V[A].posts[R].shifts.push({workerId:K.workerId,shiftStart:K.shiftStart,shiftLength:K.shiftLength+Q.shiftLength,shiftId:"d".concat(A,"p").concat(R,"s").concat(K.shiftStart,"w").concat(K.workerId)});var Y=V[A].posts[R].shifts.length,Z=V[A].posts[R].shifts[Y-1];V[A].posts[R].shifts[G]=Z,V[A].posts[R].shifts.splice(G+1,1),V[A].posts[R].shifts.pop()}}}else if("shiftDiv"===e&&"dropAreaDiv"===t.target.className){console.log("transfer");var _=a.props.shiftSet3;console.log("day "+a.props.dayInd2),console.log("post "+a.props.postInd1),console.log("x "+t.pageX);var tt=t.dataTransfer.getData("srcWorkerId"),et=a.props.dayInd2,st=a.props.postInd1,at=t.pageX;f=240;var rt,ot=document.getElementsByClassName("dropAreaDiv")[0].offsetLeft;if((h=at-ot)>-1&&h<720)!function(){(c=_[et].posts[st].shifts.map((function(t,e){return t.shiftStart}))).push(720),c.push(h);for(var e=0;e<c.length-1;e++)for(var s=0;s<c.length-1-e;s++)if(c[s]>c[s+1]){var a=c[s];c[s]=c[s+1],c[s+1]=a}for(var r=0;r<c.length;r++)c[r]===h&&(v=r);m=c[v+1],(k=_[et].posts[st].shifts.map((function(t,e){return t.shiftLength+t.shiftStart}))).push(0),k.push(h);for(var o=0;o<k.length-1;o++)for(var n=0;n<k.length-1-o;n++)if(k[n]>k[n+1]){var i=k[n];k[n]=k[n+1],k[n+1]=i}for(var l=0;l<k.length;l++)k[l]===h&&(y=l);if(E=k[y-1],h<E+120)b=E,m-E<240&&(b=E,f=m-E);else if(h>m-120){var p=m-E;p>=240?b=m-240:p<240&&(b=E,f=m-E)}else b=h-120,b=5*Math.floor((b+1)/5);_[et].posts[st].shifts.push({workerId:tt,shiftStart:b,shiftLength:f,shiftId:"d".concat(et,"p").concat(st,"s").concat(b,"w").concat(tt)});for(var d=0;d<_[et].posts[st].shifts.length;d++)for(var u=0;u<_[et].posts[st].shifts.length-1-d;u++){var g=_[et].posts[st].shifts[u],I=_[et].posts[st].shifts[u+1];if(console.log(_[et].posts[st].shifts[u].shiftStart),g.shiftStart>I.shiftStart){var S=_[et].posts[st].shifts[u];_[et].posts[st].shifts[u]=_[et].posts[st].shifts[u+1],_[et].posts[st].shifts[u+1]=S}}var w=t.dataTransfer.getData("srcId"),D=t.dataTransfer.getData("srcDay"),L=t.dataTransfer.getData("srcPost");console.log(w.slice(w.indexOf("s")+1,w.indexOf("w")));var x=parseInt(w.slice(w.indexOf("s")+1,w.indexOf("w")));console.log(_[D].posts[L].shifts.filter((function(t){return t.shiftStart===x})));for(var O=_[D].posts[L].shifts,j=0;j<O.length;j++)O.filter((function(t){return t.shiftStart===x}))[0].shiftStart===O[j].shiftStart&&(console.log(O[j]),rt=j);O.splice(rt,1);for(var C=0;C<2;C++)for(var N=0;N<_[et].posts[st].shifts.length-1;N++){console.log(_[et].posts[st].shifts);var W=_[et].posts[st].shifts[N],B=_[et].posts[st].shifts[N+1];if(W.shiftStart+W.shiftLength===B.shiftStart&&W.workerId===B.workerId){_[et].posts[st].shifts.push({workerId:W.workerId,shiftStart:W.shiftStart,shiftLength:W.shiftLength+B.shiftLength,shiftId:"d".concat(et,"p").concat(st,"s").concat(W.shiftStart,"w").concat(tt)});var z=_[et].posts[st].shifts.length,M=_[et].posts[st].shifts[z-1];_[et].posts[st].shifts[N]=M,_[et].posts[st].shifts.splice(N+1,1),_[et].posts[st].shifts.pop()}}}()}else if("shiftDiv"===e&&"shiftDiv"===t.target.className){console.log("swap");var nt=t.dataTransfer.getData("srcId"),it=t.dataTransfer.getData("srcDay"),lt=t.dataTransfer.getData("srcPost"),ft=t.dataTransfer.getData("srcWorkerId");console.log("swap"),console.log("srcId "+nt),console.log("srcDay "+it),console.log("srcPost "+lt),console.log("srcWorkerId "+ft);var ht=a.props.shiftSet3,ct=t.target.id;console.log("tgtId "+ct);var pt=a.props.dayInd2;console.log("tgt day "+pt);var dt=a.props.postInd1;console.log("tgt post "+dt);var ut=ct.slice(ct.indexOf("w")+1,ct.length);console.log("tgtWorkerId "+ut);for(var gt=0;gt<ht[it].posts[lt].shifts.length;gt++)if(ht[it].posts[lt].shifts[gt].shiftId===nt){console.log("src found"),console.log(ht[it].posts[lt].shifts[gt]);var vt=gt}for(var mt=0;mt<ht[pt].posts[dt].shifts.length;mt++)if(ht[pt].posts[dt].shifts[mt].shiftId===ct){console.log("tgt found"),console.log(ht[pt].posts[dt].shifts[mt]);var kt=mt}console.log(vt),console.log(kt),console.log("remaking shiftId ");var It=nt.slice(0,nt.indexOf("w")+1)+ut;console.log("newSrcId "+It);var St=ct.slice(0,ct.indexOf("w")+1)+ft;console.log("tgtNewShiftId "+St),ht[it].posts[lt].shifts[vt].workerId=ut,ht[it].posts[lt].shifts[vt].shiftId=It,ht[pt].posts[dt].shifts[kt].workerId=ft,ht[pt].posts[dt].shifts[kt].shiftId=St;for(var wt=0;wt<2;wt++){for(var Dt=0;Dt<ht[it].posts[lt].shifts.length-1;Dt++){console.log(ht[it].posts[lt].shifts);var yt=ht[it].posts[lt].shifts[Dt],Et=ht[it].posts[lt].shifts[Dt+1];if(yt.shiftStart+yt.shiftLength===Et.shiftStart&&yt.workerId===Et.workerId){ht[it].posts[lt].shifts.push({workerId:yt.workerId,shiftStart:yt.shiftStart,shiftLength:yt.shiftLength+Et.shiftLength,shiftId:"d".concat(it,"p").concat(lt,"s").concat(yt.shiftStart,"w").concat(yt.workerId)});var bt=ht[it].posts[lt].shifts.length,Lt=ht[it].posts[lt].shifts[bt-1];ht[it].posts[lt].shifts[Dt]=Lt,ht[it].posts[lt].shifts.splice(Dt+1,1),ht[it].posts[lt].shifts.pop()}}for(var xt=0;xt<ht[pt].posts[dt].shifts.length-1;xt++){console.log(ht[pt].posts[dt].shifts);var Ot=ht[pt].posts[dt].shifts[xt],jt=ht[pt].posts[dt].shifts[xt+1];if(Ot.shiftStart+Ot.shiftLength===jt.shiftStart&&Ot.workerId===jt.workerId){ht[pt].posts[dt].shifts.push({workerId:Ot.workerId,shiftStart:Ot.shiftStart,shiftLength:Ot.shiftLength+jt.shiftLength,shiftId:"d".concat(pt,"p").concat(dt,"s").concat(Ot.shiftStart,"w").concat(Ot.workerId)});var Ct=ht[pt].posts[dt].shifts.length,Nt=ht[pt].posts[dt].shifts[Ct-1];ht[pt].posts[dt].shifts[xt]=Nt,ht[pt].posts[dt].shifts.splice(xt+1,1),ht[pt].posts[dt].shifts.pop()}}}}console.log(t.target.className),a.deleteMarker1()},a.rightClick=function(){console.log("rightClick")},a.deleteMarker1=function(){var t=document.getElementById("markerDiv");null!==t&&t.remove(),a.props.deleteMarker2()},a.addShiftToDB1=function(t,e,s,r){a.props.addShiftToDB2(t,e,s,r)},a.state={axisX:void 0,shiftStartForDrop:void 0,shiftLengthForDrop:void 0,tempA:void 0},a}return Object(f.a)(s,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"postBodyDiv"},r.a.createElement("div",null,this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].name),r.a.createElement("div",{className:"dropAreaDiv",style:{display:"flex",position:"relative"},id:"dropDay".concat(this.props.dayInd2,"Post").concat(this.props.postInd1),onDragOver:this.allowDrop,onDrop:this.drop,onDragLeave:this.deleteMarker1},this.placeMarker1(),this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].shifts.map((function(e,s){return r.a.createElement(m,{setResizeData:t.props.setResizeData,rightClick:t.rightClick,key:s,localShifts:t.props.shiftSet3[t.props.dayInd2].posts[t.props.postInd1].shifts,workerDB4:t.props.workerDB3,markerWorkerID4:t.props.markerWorkerID3,shiftData:e,shiftSet4:t.props.shiftSet3,dayInd3:t.props.dayInd2,postInd2:t.props.postInd1,shiftInd1:s})})))))}}]),s}(a.Component);w.contextType=I;var D=function(t){Object(h.a)(s,t);var e=Object(c.a)(s);function s(){var t;Object(l.a)(this,s);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).deleteMarker3=function(){t.props.deleteMarker4()},t}return Object(f.a)(s,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"dayBodyDiv"},r.a.createElement("div",{className:"dayNameDiv"},this.props.shiftSet2[this.props.dayInd1].name),r.a.createElement("div",null,this.props.shiftSet2[this.props.dayInd1].posts.map((function(e,s){return r.a.createElement(S,{key:s},r.a.createElement(w,{deleteMarker2:t.deleteMarker3,setResizeData:t.props.setResizeData,key:s,shiftSet3:t.props.shiftSet2,workerDB3:t.props.workerDB2,postInd1:s,dayInd2:t.props.dayInd1,markerWorkerID3:t.props.markerWorkerID2}))})))))}}]),s}(a.Component),y=function(t){Object(h.a)(s,t);var e=Object(c.a)(s);function s(){var t;Object(l.a)(this,s);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).deleteMarker5=function(){t.props.deleteMarker6()},t.bringWorkerID5=function(e){t.props.bringWorkerID6(e)},t.drop=function(e){var s,a=e.dataTransfer.getData("srcClass");"shiftDiv"===a&&"shiftDiv"!==e.target.className&&"dropAreaDiv"!==e.target.className&&function(){var r=e.dataTransfer.getData("srcDay"),o=e.dataTransfer.getData("srcPost"),n=e.dataTransfer.getData("srcId");console.log(a),console.log(e.target.className);var i=parseInt(n.slice(n.indexOf("s")+1,n.indexOf("w")));console.log(i);for(var l=t.props.shiftSet1,f=l[r].posts[o].shifts,h=0;h<f.length;h++)f.filter((function(t){return t.shiftStart===i}))[0].shiftStart===f[h].shiftStart&&(console.log(f[h]),s=h);f.splice(s,1),console.log(l),t.props.deleteShift(l)}()},t.allowDrop=function(t){t.preventDefault()},t}return Object(f.a)(s,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{onDrop:this.drop,onDragOver:this.allowDrop},r.a.createElement("div",{id:"plnWrkBox"},r.a.createElement("div",null,r.a.createElement(S,null,r.a.createElement(g,{bringWorkerID4:this.bringWorkerID5,workerDB2:this.props.workerDB1}))),r.a.createElement("div",{id:"plannerDiv"},this.props.shiftSet1.map((function(e,s){return r.a.createElement(D,{deleteMarker4:t.deleteMarker5,setResizeData:t.props.setResizeData,key:s,shiftSet2:t.props.shiftSet1,workerDB2:t.props.workerDB1,dayInd1:s,markerWorkerID2:t.props.markerWorkerID1})})))))}}]),s}(a.Component),E=s(59),b=function(t){Object(h.a)(s,t);var e=Object(c.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).state={firstName:"",lastName:"",identification:"",phone:"",secondPhone:"",address:"",email:"",class:"",lastTraining:""},a}return Object(f.a)(s,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,"AddWorker",r.a.createElement("div",null,r.a.createElement("input",{placeholder:"First name",onChange:function(e){return t.setState({firstName:e.target.value})}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Last name",onChange:function(e){return t.setState({lastName:e.target.value})}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"ID",onChange:function(e){return t.setState({identification:e.target.value})}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Phone",onChange:function(e){return t.setState({phone:e.target.value})}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Second phone",onChange:function(e){return t.setState({secondPhone:e.target.value})}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Address",onChange:function(e){return t.setState({address:e.target.value})}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Email",onChange:function(e){return t.setState({email:e.target.value})}})),r.a.createElement("button",{onClick:function(){return t.props.addWorker(t.state.firstName,t.state.lastName,t.state.identification,t.state.phone,t.state.secondPhone,t.state.address,t.state.email)}},"add worker"))}}]),s}(a.Component);function L(){return r.a.createElement("div",null,"PersonalStat")}var x=function(t){Object(h.a)(s,t);var e=Object(c.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).addWorkerView=function(){return a.state.addWorkerWindow?r.a.createElement(b,{addWorker:a.props.addWorker}):r.a.createElement(L,null)},a.buttonText=function(){return a.state.addWorkerWindow?"Personal Stat":"Add worker"},a.state={addWorkerWindow:!1},a}return Object(f.a)(s,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{style:{display:"flex",position:"relative"}},r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement(E.a.Toggle,{variant:"success",id:"dropdown-basic"},"Dropdown Button"),r.a.createElement(E.a.Menu,null,this.props.workerDB.map((function(t,e){return r.a.createElement(E.a.Item,{href:"#/worker".concat(t.id),key:e},t.id)})))),r.a.createElement("button",{onClick:function(){return t.setState({addWorkerWindow:!t.state.addWorkerWindow})}},this.buttonText())),r.a.createElement("div",null,this.addWorkerView()))}}]),s}(a.Component),O=function(t){Object(h.a)(s,t);var e=Object(c.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(f.a)(s,[{key:"render",value:function(){return r.a.createElement("div",null,"History")}}]),s}(a.Component),j=function(t){Object(h.a)(s,t);var e=Object(c.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(f.a)(s,[{key:"render",value:function(){return r.a.createElement("div",null,"SetPlan")}}]),s}(a.Component),C=function(t){Object(h.a)(s,t);var e=Object(c.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(f.a)(s,[{key:"render",value:function(){return r.a.createElement("div",null,"HomePage")}}]),s}(a.Component),N=function(t){Object(h.a)(s,t);var e=Object(c.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(f.a)(s,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{placeholder:"user name",disabled:!0})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"password",disabled:!0})),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/planner"},r.a.createElement("button",{onClick:function(){return t.props.login()}},"enter"))))}}]),s}(a.Component),W=function(t){Object(h.a)(s,t);var e=Object(c.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(f.a)(s,[{key:"render",value:function(){return r.a.createElement("div",null,"SignUp")}}]),s}(a.Component),B=function(t){Object(h.a)(s,t);var e=Object(c.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(f.a)(s,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",position:"relative"}},r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement(E.a.Toggle,{variant:"success",id:"dropdown-basic"},"Dropdown Button"),r.a.createElement(E.a.Menu,null,this.props.workerDB.map((function(t,e){return r.a.createElement(E.a.Item,{href:"#/worker".concat(t.id),key:e},t.id)}))))),r.a.createElement("div",null,"Worker id is ",this.props.workerID))}}]),s}(a.Component),z=function(t){Object(h.a)(s,t);var e=Object(c.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).deleteMarker7=function(){a.setState({markerPlaceDay:void 0}),a.setState({markerPlacePost:void 0})},a.bringWorkerID7=function(t){},a.higherBarView=function(){return"in"===a.state.higherBarView?r.a.createElement("div",{style:{display:"flex",position:"relative"}},r.a.createElement("div",null,r.a.createElement(p.b,{to:"/login"},r.a.createElement("button",null,"log in"))),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/signup"},r.a.createElement("button",null,"signup")))):"out"===a.state.higherBarView?r.a.createElement("div",{style:{display:"flex",position:"relative"}},r.a.createElement("div",{style:{marginRight:"10px"}},"hello user"),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/"},r.a.createElement("button",{onClick:function(){return a.setState({higherBarView:"in"})}},"logout")))):void 0},a.lowerBarView=function(){return"in"===a.state.higherBarView?r.a.createElement("div",{style:{display:"flex",position:"relative"}}):"out"===a.state.higherBarView?r.a.createElement("div",{style:{display:"flex",position:"relative"}},r.a.createElement("div",null,r.a.createElement(p.b,{to:"/planner"},r.a.createElement("button",null,"Planner"))),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/personal"},r.a.createElement("button",null,"Personal"))),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/setplanner"},r.a.createElement("button",null,"Set Planner"))),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/history"},r.a.createElement("button",null,"History")))):void 0},a.login=function(){a.setState({higherBarView:"out"})},a.deleteShift=function(t){a.setState({shiftSet:t})},a.setResizeData=function(t,e,s,r,o,n,l,f){console.log(t);var h=Object(i.a)(a.state.shiftSet);if("leftResizer"===t&&void 0!==r){console.log(t);for(var c=0;c<h[l].posts[f].shifts.length;c++)if(h[l].posts[f].shifts[c].shiftStart===e)h[l].posts[f].shifts[c].shiftStart=r,h[l].posts[f].shifts[c].shiftLength=o,h[l].posts[f].shifts[c].shiftId="d".concat(l,"p").concat(f,"s").concat(r,"w").concat(n);else if(h[l].posts[f].shifts[c].shiftStart<e){var p=h[l].posts[f].shifts[c].shiftStart;if(r<p+h[l].posts[f].shifts[c].shiftLength){var d=r-p;d>0?h[l].posts[f].shifts[c].shiftLength=d:d<=0&&(console.log(c),console.log(d),h[l].posts[f].shifts.splice(c,1),c--)}}}else if("rightResizer"===t&&void 0!==o)for(var u=0;u<h[l].posts[f].shifts.length;u++)if(h[l].posts[f].shifts[u].shiftStart===e)h[l].posts[f].shifts[u].shiftLength=o,h[l].posts[f].shifts[u].shiftId="d".concat(l,"p").concat(f,"s").concat(e,"w").concat(n);else if(h[l].posts[f].shifts[u].shiftStart>e){var g=h[l].posts[f].shifts[u].shiftStart,v=h[l].posts[f].shifts[u].shiftLength;if(e+o>g){console.log(g),console.log(v);var m=g+v-e-o,k=e+o;if(m>0){var I=h[l].posts[f].shifts[u].workerId;h[l].posts[f].shifts[u].shiftStart=k,h[l].posts[f].shifts[u].shiftLength=m,h[l].posts[f].shifts[u].shiftId="d".concat(l,"p").concat(f,"s").concat(k,"w").concat(I)}else m<=0&&(h[l].posts[f].shifts.splice(u,1),u--)}}console.log(h[l].posts[f].shifts);for(var S=0;S<h[l].posts[f].shifts.length-1;S++){var w=h[l].posts[f].shifts[S],D=h[l].posts[f].shifts[S+1];if(w.shiftStart+w.shiftLength===D.shiftStart&&w.workerId===D.workerId){h[l].posts[f].shifts.push({workerId:w.workerId,shiftStart:w.shiftStart,shiftLength:w.shiftLength+D.shiftLength,shiftId:"d".concat(l,"p").concat(f,"s").concat(w.shiftStart,"w").concat(w.workerId)});var y=h[l].posts[f].shifts.length,E=h[l].posts[f].shifts[y-1];h[l].posts[f].shifts[S]=E,h[l].posts[f].shifts.splice(S+1,1),h[l].posts[f].shifts.pop()}}a.setState({shiftSet:h})},a.utility=function(){console.log("utility"),console.log(a.state)},a.addWorker=function(t,e,s,r,o,n,l,f){var h={id:Date.now().toString(),firstName:e,lastName:s,color:"#a55a5a"};a.setState({workerDB:[].concat(Object(i.a)(a.state.workerDB),[h])})},a.state={shiftSet:[{name:"Su",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"Mo",posts:[{name:"post6",shifts:[]},{name:"post7",shifts:[]},{name:"post8",shifts:[]}]},{name:"Tu",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"We",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"Th",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"Fr",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]},{name:"post4",shifts:[]}]},{name:"Sa",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]}],workerDB:[{id:"0",firstName:"first",lastName:"last",color:"#ff0000"},{id:"1",firstName:"drag",lastName:"last",color:"#00aa00"},{id:"2",firstName:"draggable 3",lastName:"last",color:"#6666ff"},{id:"3",firstName:"draggable 4",lastName:"last",color:"#aaaa00"},{id:"4",firstName:"draggable 5",lastName:"last",color:"#ff00ff"},{id:"124",firstName:"draggable 6",lastName:"last",color:"#00ffff"}],markerWorkerID:void 0,higherBarView:"in"},a}return Object(f.a)(s,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return t.utility()}},"log state"),r.a.createElement(p.a,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",position:"relative"}},r.a.createElement("div",{style:{alignSelf:"flex-end"}},this.higherBarView())),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",position:"relative"}},r.a.createElement("div",{style:{alignSelf:"center"}},this.lowerBarView())),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/planner",component:function(){return r.a.createElement(y,{deleteMarker6:t.deleteMarker7,deleteShift:t.deleteShift,setResizeData:t.setResizeData,bringWorkerID6:t.bringWorkerID7,workerDB1:t.state.workerDB,markerWorkerID1:t.state.markerWorkerID,shiftSet1:t.state.shiftSet})}}),r.a.createElement(d.a,{exact:!0,path:"/personal",component:function(){return r.a.createElement(x,{addWorker:t.addWorker,workerDB:t.state.workerDB})}}),this.state.workerDB.map((function(e,s){return r.a.createElement(d.a,{exact:!0,path:"/worker".concat(e.id),key:s,component:function(){return r.a.createElement(B,{workerDB:t.state.workerDB,workerID:e.id,key:s})}})})),r.a.createElement(d.a,{exact:!0,path:"/history",component:function(){return r.a.createElement(O,null)}}),r.a.createElement(d.a,{exact:!0,path:"/setplanner",component:function(){return r.a.createElement(j,null)}}),r.a.createElement(d.a,{exact:!0,path:"/",component:function(){return r.a.createElement(C,null)}}),r.a.createElement(d.a,{exact:!0,path:"/login",component:function(){return r.a.createElement(N,{login:t.login})}}),r.a.createElement(d.a,{exact:!0,path:"/signup",component:function(){return r.a.createElement(W,null)}}))))}}]),s}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s(54);var M=s(36),T=document.getElementById("root");n.a.render(r.a.createElement(z,null),T),Object(M.a)(T),n.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.72cc58ba.chunk.js.map