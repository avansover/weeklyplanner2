(this.webpackJsonpweeklyplanner2=this.webpackJsonpweeklyplanner2||[]).push([[0],{21:function(t,e,r){t.exports=r(33)},26:function(t,e,r){},27:function(t,e,r){},33:function(t,e,r){"use strict";r.r(e);var a=r(0),s=r.n(a),o=r(19),n=r.n(o),i=(r(26),r(16)),p=r(1),c=r(2),l=r(4),f=r(3),h=r(12),d=r(5),u=(r(27),function(t){Object(l.a)(r,t);var e=Object(f.a)(r);function r(){return Object(p.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return s.a.createElement("div",null,"Login",s.a.createElement("div",null,s.a.createElement(h.b,{to:"/planner"},s.a.createElement("button",null,"log in"))))}}]),r}(a.Component)),m=function(t){Object(l.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(p.a)(this,r);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).drag=function(e){e.dataTransfer.setData("src",t.props.workerDB3[t.props.i1].id),e.dataTransfer.setData("srcClass",e.target.className)},t.draging=function(t){},t.bringWorkerID1=function(){t.props.bringWorkerID2(t.props.workerDB3[t.props.i1].id)},t}return Object(c.a)(r,[{key:"render",value:function(){return s.a.createElement("div",{id:"ticket".concat(this.props.i1),className:"ticketDiv",style:{borderColor:"".concat(this.props.workerDB3[this.props.i1].color)},draggable:"true",onDragStart:this.drag,onDrag:this.draging,onMouseDown:this.bringWorkerID1},this.props.workerDB3[this.props.i1].name)}}]),r}(a.Component),k=function(t){Object(l.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(p.a)(this,r);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).bringWorkerID3=function(e){t.props.bringWorkerID4(e)},t}return Object(c.a)(r,[{key:"render",value:function(){var t=this;return s.a.createElement("div",null,this.props.workerDB2.map((function(e,r){return s.a.createElement(m,{bringWorkerID2:t.bringWorkerID3,key:r,workerDB3:t.props.workerDB2,i1:r})})))}}]),r}(a.Component),v=function(t){Object(l.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(p.a)(this,r);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).markerData=function(){var e=0,r=0,a=document.getElementsByClassName("dropAreaDiv")[0].offsetLeft;if(void 0!==t.props.axisX1){var s=t.props.axisX1-a,o=t.props.localShifts.map((function(t){return t.shiftStart}));o.push(720),o.push(s);for(var n=0;n<o.length-1;n++)for(var i=0;i<o.length-1-n;i++)if(o[i]>o[i+1]){var p=o[i];o[i]=o[i+1],o[i+1]=p}for(var c=0;c<o.length;c++)if(o[c]===s)var l=c;var f=o[l+1],h=t.props.localShifts.map((function(t){return t.shiftLength+t.shiftStart}));h.push(0),h.push(s);for(var d=0;d<h.length-1;d++)for(var u=0;u<h.length-1-d;u++)if(h[u]>h[u+1]){var m=h[u];h[u]=h[u+1],h[u+1]=m}for(var k=0;k<h.length;k++)if(h[k]===s)var v=k;var g=h[v-1];if(s<g+120)r=g,e=240,f-g<240&&(r=g,e=f-g);else if(s>f-120){var D=f-g;D>=240?(r=f-240,e=240):D<240&&(r=g,e=f-g)}else r=s-120,e=240,r=5*Math.floor((r+1)/5)}return{mrkStr:r,mrkLnth:e}},t.markerColor=function(){return 0===t.markerData().mrkLnth?"#ffffff":"#ffaaaa"},t.markerDataColor=function(){return 0===t.markerData().mrkLnth?"#ffffff":"#000000"},t.addShift=function(){console.log("addShift")},t}return Object(c.a)(r,[{key:"render",value:function(){return s.a.createElement("div",{id:"markerDiv",style:{position:"relative",display:"flex",justifyContent:"space-between",alignItems:"center",height:"18px",width:"".concat(this.markerData().mrkLnth,"px"),border:"0px solid blue",left:"".concat(this.markerData().mrkStr,"px"),zIndex:"-1",backgroundColor:"".concat(this.markerColor())}},s.a.createElement("div",{style:{color:"".concat(this.markerDataColor()),zIndex:-1,fontSize:"12px"}},this.markerData().mrkStr),s.a.createElement("div",{style:{color:"".concat(this.markerDataColor()),zIndex:-1,fontSize:"12px"}},this.markerData().mrkStr+this.markerData().mrkLnth))}}]),r}(a.Component),g=function(t){Object(l.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(p.a)(this,r);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).shiftColor=function(){var e=parseInt(t.props.shiftData.workerId);return t.props.workerDB4.filter((function(t){return t.id===e}))[0].color},t.workerName=function(){var e=parseInt(t.props.shiftData.workerId);return t.props.workerDB4.filter((function(t){return t.id===e}))[0].name},t.drag=function(e){console.log(e.target),e.dataTransfer.setData("srcDay",t.props.dayInd3),e.dataTransfer.setData("srcPost",t.props.postInd2),e.dataTransfer.setData("srcWorkerId",t.props.shiftData.workerId),e.dataTransfer.setData("srcId",e.target.id),e.dataTransfer.setData("srcClass",e.target.className)},t}return Object(c.a)(r,[{key:"render",value:function(){return s.a.createElement("div",{className:"shiftDiv",id:"d".concat(this.props.dayInd3,"p").concat(this.props.postInd2,"s").concat(this.props.localShifts[this.props.shiftInd1].shiftStart,"w").concat(this.props.shiftData.workerId),draggable:"true",onDragStart:this.drag,onDrag:this.draging,onMouseDown:this.bring,style:{position:"absolute",width:"".concat(this.props.localShifts[this.props.shiftInd1].shiftLength,"px"),left:"".concat(this.props.localShifts[this.props.shiftInd1].shiftStart,"px"),top:"-1px",display:"flex",justifyContent:"space-between",backgroundColor:"".concat(this.shiftColor()),height:"20px",borderRadius:"3px",zIndex:1}},s.a.createElement("div",{className:"shiftDataDiv",style:{zIndex:0,fontSize:"8px",pointerEvents:"none"}},this.props.localShifts[this.props.shiftInd1].shiftStart),s.a.createElement("div",{style:{pointerEvents:"none",position:"relative",zIndex:0,fontSize:"12px"}},this.workerName()),s.a.createElement("div",{className:"shiftDataDiv",style:{zIndex:0,fontSize:"8px",pointerEvents:"none"}},this.props.localShifts[this.props.shiftInd1].shiftStart+this.props.localShifts[this.props.shiftInd1].shiftLength))}}]),r}(a.Component),D=function(t){Object(l.a)(r,t);var e=Object(f.a)(r);function r(t){var a;return Object(p.a)(this,r),(a=e.call(this,t)).allowDrop=function(t){if(t.preventDefault(),a.state.axisX!==t.pageX&&a.setState({axisX:t.pageX}),"shiftDiv"!==t.target.className&&"shiftDataDiv"!==t.target.className){var e=a.props.dayInd2,r=a.props.postInd1;a.props.placeMarker2(e,r)}},a.drop=function(t){t.preventDefault();var e=t.dataTransfer.getData("src"),r=t.dataTransfer.getData("srcClass");if("ticketDiv"===r&&"shiftDiv"!==t.target.className){console.log("src "+e),console.log("day "+a.props.dayInd2),console.log("post "+a.props.postInd1),console.log("x "+t.pageX);var s=e,o=a.props.dayInd2,n=a.props.postInd1,i=t.pageX;a.addShiftToDB1(s,o,n,i)}else if("ticketDiv"===r&&"shiftDiv"===t.target.className)console.log("run over");else if("shiftDiv"===r&&"dropAreaDiv"===t.target.className)console.log("transfer");else if("shiftDiv"===r&&"shiftDiv"===t.target.className){var p=t.dataTransfer.getData("srcId"),c=t.dataTransfer.getData("srcDay"),l=t.dataTransfer.getData("srcPost"),f=t.dataTransfer.getData("srcWorkerId");console.log("swap"),console.log("srcId "+p),console.log("srcDay "+c),console.log("srcPost "+l),console.log("srcWorkerId "+f);var h=t.target.id;console.log("tgtId "+h);var d=a.props.dayInd2;console.log("tgt day "+d);var u=a.props.postInd1;console.log("tgt post "+u);var m=h.slice(h.indexOf("w")+1,h.length);console.log("tgtWorkerId "+m);for(var k=0;k<a.props.shiftSet3[c].posts[l].shifts.length;k++)if(a.props.shiftSet3[c].posts[l].shifts[k].shiftId===p){console.log("src found"),console.log(a.props.shiftSet3[c].posts[l].shifts[k]);var v=k}for(var g=0;g<a.props.shiftSet3[d].posts[u].shifts.length;g++)if(a.props.shiftSet3[d].posts[u].shifts[g].shiftId===h){console.log("tgt found"),console.log(a.props.shiftSet3[d].posts[u].shifts[g]);var D=g}console.log(v),console.log(D),console.log("remaking shiftId ");var I=p.slice(0,p.indexOf("w")+1)+m;console.log("newSrcId "+I);var S=h.slice(0,h.indexOf("w")+1)+f;console.log("newTgtId "+h.slice(0,h.indexOf("w")+1)+f),a.props.swapShifts1(c,l,v,f,I,d,u,D,m,S)}a.deleteMarker1()},a.placeMarker1=function(){if(a.props.dayInd2===a.props.markerPlaceDay3&&a.props.postInd1===a.props.markerPlacePost3)return s.a.createElement(v,{bringMarkerData1:a.bringMarkerData2,axisX1:a.state.axisX,localShifts:a.props.shiftSet3[a.props.dayInd2].posts[a.props.postInd1].shifts,dayInd3:a.props.dayInd2,postInd2:a.props.postInd1,markerWorkerID4:a.props.markerWorkerID3})},a.deleteMarker1=function(){var t=document.getElementById("markerDiv");null!==t&&t.remove(),a.props.deleteMarker2()},a.addShiftToDB1=function(t,e,r,s){a.props.addShiftToDB2(t,e,r,s)},a.getAxisX=function(){console.log("pressed")},a.state={axisX:void 0,shiftStartForDrop:void 0,shiftLengthForDrop:void 0,tempA:void 0},a}return Object(c.a)(r,[{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"postBodyDiv"},s.a.createElement("div",null,this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].name),s.a.createElement("div",{className:"dropAreaDiv",style:{display:"flex",position:"relative"},id:"dropDay".concat(this.props.dayInd2,"Post").concat(this.props.postInd1),onDragOver:this.allowDrop,onDrop:this.drop,onDragLeave:this.deleteMarker1},this.placeMarker1(),this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].shifts.map((function(e,r){return s.a.createElement(g,{key:r,localShifts:t.props.shiftSet3[t.props.dayInd2].posts[t.props.postInd1].shifts,workerDB4:t.props.workerDB3,markerWorkerID4:t.props.markerWorkerID3,shiftData:e,dayInd3:t.props.dayInd2,postInd2:t.props.postInd1,shiftInd1:r})})))))}}]),r}(a.Component),I=function(t){Object(l.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(p.a)(this,r);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).placeMarker3=function(e,r){t.props.placeMarker4(e,r)},t.deleteMarker3=function(){t.props.deleteMarker4()},t.addShiftToDB3=function(e,r,a,s){t.props.addShiftToDB4(e,r,a,s)},t.swapShifts2=function(e,r,a,s,o,n,i,p,c,l){t.props.swapShifts3(e,r,a,s,o,n,i,p,c,l)},t}return Object(c.a)(r,[{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"dayBodyDiv"},s.a.createElement("div",{className:"dayNameDiv"},this.props.shiftSet2[this.props.dayInd1].name),s.a.createElement("div",null,this.props.shiftSet2[this.props.dayInd1].posts.map((function(e,r){return s.a.createElement(D,{placeMarker2:t.placeMarker3,deleteMarker2:t.deleteMarker3,addShiftToDB2:t.addShiftToDB3,bringMarkerData3:t.bringMarkerData4,swapShifts1:t.swapShifts2,key:r,shiftSet3:t.props.shiftSet2,workerDB3:t.props.workerDB2,postInd1:r,dayInd2:t.props.dayInd1,markerPlaceDay3:t.props.markerPlaceDay2,markerPlacePost3:t.props.markerPlacePost2,markerWorkerID3:t.props.markerWorkerID2})})))))}}]),r}(a.Component),S=function(t){Object(l.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(p.a)(this,r);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).placeMarker5=function(e,r){t.props.placeMarker6(e,r)},t.deleteMarker5=function(){t.props.deleteMarker6()},t.addShiftToDB5=function(e,r,a,s){t.props.addShiftToDB6(e,r,a,s)},t.bringWorkerID5=function(e){t.props.bringWorkerID6(e)},t.swapShifts4=function(e,r,a,s,o,n,i,p,c,l){t.props.swapShifts5(e,r,a,s,o,n,i,p,c,l)},t}return Object(c.a)(r,[{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement("div",{id:"plnWrkBox"},s.a.createElement("div",null,s.a.createElement(k,{bringWorkerID4:this.bringWorkerID5,workerDB2:this.props.workerDB1})),s.a.createElement("div",{id:"plannerDiv"},this.props.shiftSet1.map((function(e,r){return s.a.createElement(I,{placeMarker4:t.placeMarker5,deleteMarker4:t.deleteMarker5,addShiftToDB4:t.addShiftToDB5,bringMarkerData5:t.bringMarkerData6,swapShifts3:t.swapShifts4,key:r,shiftSet2:t.props.shiftSet1,workerDB2:t.props.workerDB1,dayInd1:r,markerPlaceDay2:t.props.markerPlaceDay1,markerPlacePost2:t.props.markerPlacePost1,markerWorkerID2:t.props.markerWorkerID1})})))))}}]),r}(a.Component),y=function(t){Object(l.a)(r,t);var e=Object(f.a)(r);function r(){return Object(p.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return s.a.createElement("div",null,"Presonal")}}]),r}(a.Component),b=function(t){Object(l.a)(r,t);var e=Object(f.a)(r);function r(){return Object(p.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return s.a.createElement("div",null,"History")}}]),r}(a.Component),w=function(t){Object(l.a)(r,t);var e=Object(f.a)(r);function r(){return Object(p.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return s.a.createElement("div",null,"SetPlan")}}]),r}(a.Component),E=function(t){Object(l.a)(r,t);var e=Object(f.a)(r);function r(t){var a;return Object(p.a)(this,r),(a=e.call(this,t)).placeMarker7=function(t,e){a.state.markerPlaceDay===t&&a.state.markerPlacePost===e||(a.setState({markerPlaceDay:t}),a.setState({markerPlacePost:e}))},a.deleteMarker7=function(){a.setState({markerPlaceDay:void 0}),a.setState({markerPlacePost:void 0})},a.addShiftToDB7=function(t,e,r,s){var o=240,n=s-document.getElementsByClassName("dropAreaDiv")[0].offsetLeft,p=a.state.shiftSet[e].posts[r].shifts.map((function(t,e){return t.shiftStart}));p.push(720),p.push(n);for(var c=0;c<p.length-1;c++)for(var l=0;l<p.length-1-c;l++)if(p[l]>p[l+1]){var f=p[l];p[l]=p[l+1],p[l+1]=f}for(var h=0;h<p.length;h++)if(p[h]===n)var d=h;var u=p[d+1],m=a.state.shiftSet[e].posts[r].shifts.map((function(t,e){return t.shiftLength+t.shiftStart}));m.push(0),m.push(n);for(var k=0;k<m.length-1;k++)for(var v=0;v<m.length-1-k;v++)if(m[v]>m[v+1]){var g=m[v];m[v]=m[v+1],m[v+1]=g}for(var D=0;D<m.length;D++)if(m[D]===n)var I=D;var S=m[I-1];if(n<S+120){var y=S;u-S<240&&(y=S,o=u-S)}else if(n>u-120){var b=u-S;b>=240?y=u-240:b<240&&(y=S,o=u-S)}else y=n-120,y=5*Math.floor((y+1)/5);var w=Object(i.a)(a.state.shiftSet);w[e].posts[r].shifts.push({workerId:t,shiftStart:y,shiftLength:o,shiftId:"d".concat(e,"p").concat(r,"s").concat(y,"w").concat(t)});for(var E=0;E<w[e].posts[r].shifts.length;E++)for(var O=0;O<w[e].posts[r].shifts.length-1-E;O++){var j=w[e].posts[r].shifts[O],x=w[e].posts[r].shifts[O+1];if(console.log(w[e].posts[r].shifts[O].shiftStart),j.shiftStart>x.shiftStart){var M=w[e].posts[r].shifts[O];w[e].posts[r].shifts[O]=w[e].posts[r].shifts[O+1],w[e].posts[r].shifts[O+1]=M}}for(var B=0;B<w.length;B++)for(var P=0;P<w[B].posts.length;P++)for(var W=0;W<2;W++)for(var T=0;T<w[B].posts[P].shifts.length-1;T++){var C=w[B].posts[P].shifts[T],N=w[B].posts[P].shifts[T+1];if(C.shiftStart+C.shiftLength===N.shiftStart&&C.workerId===N.workerId){w[B].posts[P].shifts.push({workerId:C.workerId,shiftStart:C.shiftStart,shiftLength:C.shiftLength+N.shiftLength,shiftId:"d".concat(e,"p").concat(r,"s").concat(C.shiftStart,"w").concat(t)});var L=w[B].posts[P].shifts.length,z=w[B].posts[P].shifts[L-1];w[B].posts[P].shifts[T]=z,w[B].posts[P].shifts.splice(T+1,1),w[B].posts[P].shifts.pop()}}},a.mergeShifts=function(t,e,r,a){console.log("merging"),console.log(e),console.log(r),console.log(a)},a.bringWorkerID7=function(t){},a.swapShifts6=function(t,e,r,s,o,n,p,c,l,f){console.log("swap");var h=Object(i.a)(a.state.shiftSet);h[t].posts[e].shifts[r].workerId=l,h[t].posts[e].shifts[r].shiftId=o,h[n].posts[p].shifts[c].workerId=s,h[n].posts[p].shifts[c].shiftId=f},a.state={shiftSet:[{name:"Su",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"Mo",posts:[{name:"post6",shifts:[]},{name:"post7",shifts:[]},{name:"post8",shifts:[]}]},{name:"Tu",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"We",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"Th",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"Fr",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]},{name:"post4",shifts:[]}]},{name:"Sa",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]}],workerDB:[{id:0,name:"draggable 1",color:"#ff0000"},{id:1,name:"draggable 2",color:"#00aa00"},{id:2,name:"draggable 3",color:"#6666ff"},{id:3,name:"draggable 4",color:"#ffff00"},{id:4,name:"draggable 5",color:"#ff00ff"},{id:124,name:"draggable 6",color:"#00ffff"}],markerPlaceDay:void 0,markerPlacePost:void 0,markerWorkerID:void 0},a}return Object(c.a)(r,[{key:"render",value:function(){var t=this;return s.a.createElement("div",null,"weekly planner",s.a.createElement(h.a,null,s.a.createElement(d.c,null,s.a.createElement(d.a,{exact:!0,path:"/",component:function(){return s.a.createElement(u,null)}}),s.a.createElement(d.a,{exact:!0,path:"/planner",component:function(){return s.a.createElement(S,{placeMarker6:t.placeMarker7,deleteMarker6:t.deleteMarker7,addShiftToDB6:t.addShiftToDB7,bringMarkerData7:t.bringMarkerData8,bringWorkerID6:t.bringWorkerID7,swapShifts5:t.swapShifts6,workerDB1:t.state.workerDB,markerWorkerID1:t.state.markerWorkerID,shiftSet1:t.state.shiftSet,markerPlaceDay1:t.state.markerPlaceDay,markerPlacePost1:t.state.markerPlacePost})}}),s.a.createElement(d.a,{exact:!0,path:"/personal",component:function(){return s.a.createElement(y,null)}}),s.a.createElement(d.a,{exact:!0,path:"/history",component:function(){return s.a.createElement(b,null)}}),s.a.createElement(d.a,{exact:!0,path:"/setplanner",component:function(){return s.a.createElement(w,null)}}))))}}]),r}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.0969b32a.chunk.js.map