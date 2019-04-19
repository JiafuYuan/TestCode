var s = "javascript";
$("#log").html("javascript中v的indexof:" + s.indexOf("v"));

var t={
    init:function(data){
alert("run init func with_"+data);
    },
    sum:s
};
t.sum=10;
t.init(t.sum);
var f=function(a,b){
alert(a+b);
};
f(1,2);