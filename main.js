def1=(a,b)=>c=a+b;
console.log(def1(10,10));

def2=(a=2,b=3)=>c=a*b;
console.log(def2(10,10));

def3=(a=23,b=2)=>c=a%b;
console.log(def3(undefined,10));

def4=(a=2,b=4)=>c=a+b;
console.log(def4(undefined,undefined));

def5=(a,b)=>c=a*b;
console.log(def5(14,56,70));

def6=(a,b,d)=>c=a+b/d;
console.log(def6(12,10,23));

def7=(a=2,b=5)=>c=a+b;
console.log(def7(45,67));

def8=(a=32,b=43)=>c=a*b;
console.log(def8(23,80));

def9=(a=10,b=20)=>c=a/b;
console.log(def9(34,17));

def10=(a=5,b=5)=>c=a-b;
console.log(def10(23,50));