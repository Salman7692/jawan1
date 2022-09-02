obj = {
    iphone: { x6: { ram: 4, rom: 6, price: 42320 }, x7: { ram: 4, rom: 2, price: 23872 }, smax: { ram: 1, rom: 3, price: 3923 } },
    Samsung: { A10: { ram: 22, rom: 2, price: 9092 }, J3: { ram: 8, rom: 2, price: 17290 }, A70: { ram: 12, rom: 22, price: 793827 } },
    VIVO: { 11: { ram: 2, rom: 2, price: 62333332 }, 12: { ram: 3, rom: 9, price: 1232312 }, 14: { ram: 3, rom: 12, price: 12123 } },
    CANON: { lite11: { ram: 32, rom: 2, price:121312 }, x4: { ram: 8, rom: 8, price: 1233 }, A7: { ram: 2, rom: 3, price: 12312 } }}
let c = Object.keys(obj)
let d = Object(c).length;
for (let i = 0; i < d; i++) {
    document.getElementById("mob").innerHTML += `<option value="${c[i]}">${c[i]}</option>`}
function model() {
    document.getElementById("mod").disabled = false;
    document.getElementById("mod").innerHTML = "";
    let f = document.getElementById("mob").value;
    let g = Object.keys(obj[f])
    let h = Object(g).length;
    for (let i = 0; i < h; i++) {
        document.getElementById("mod").innerHTML += `<option value="${g[i]}">${g[i]}</option>`}}
function mo() {
    let name = document.getElementById("mob").value;
    let model = document.getElementById("mod").value;
    let z = obj[name][model];
    let a = Object.keys(z);
    let b = Object.values(z);
    console.log("ali");
    document.getElementById("para").innerHTML=`RAM - ${b[0]} 
    ROM - ${b[1]}
    PRICE - ${b[2]} `;
    console.log("ali");}

