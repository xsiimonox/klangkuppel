// Run with node check-beat-geometry.cjs. Exercises the actual inline mesh generator.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync(__dirname+'/index.html','utf8');
const source=html.slice(html.indexOf('  function smoothedMap'),html.indexOf('  function fft'));
class Color{constructor(){this.r=this.g=this.b=1;}copy(){return this;}lerp(){return this;}offsetHSL(){return this;}}
class Geometry{constructor(){this.attributes={};}setAttribute(k,v){this.attributes[k]=v;}setIndex(v){this.index=v;}computeVertexNormals(){}computeBoundingSphere(){}dispose(){}}
const context={THREE:{Color,BufferGeometry:Geometry,Float32BufferAttribute:class{constructor(a){this.array=a;}},Mesh:class{constructor(g){this.geometry=g;this.position={y:0};}}},state:{relief:6,sharpness:.55,smooth:.35,ridges:70,valleys:60,texture:45,spirals:85,circles:80,detail:0,baseHeight:2.4,mirror:false},spectral:Array.from({length:24},()=>Array(128).fill(.4)),labShape:null,timelineFocus:0,mesh:null,mat:{},modelGroup:{add(){},remove(){}},prepareFluidSkin(){},setFluidActive(){},playing:false,$:()=>({}),geometryInfo:null};
vm.createContext(context);vm.runInContext(source,context);
const hashes=new Set();
for(const instrument of ['kick','snare','hat','bass','lead','ensemble','empty']){
 context.labShape={steps:8,empty:instrument==='empty',patterns:Object.fromEntries(['kick','snare','hat','bass','lead'].map(k=>[k,Array.from({length:8},(_,i)=>(k===instrument||instrument==='ensemble')&&i===0)]))};
 context.timelineFocus=0;context.rebuild();
 const {attributes:{position:{array:p}},index:indices}=context.mesh.geometry;
 assert(p.every(Number.isFinite));
 const edges=new Map();for(let i=0;i<indices.length;i+=3)for(let j=0;j<3;j++){const a=indices[i+j],b=indices[i+(j+1)%3],key=[Math.min(a,b),Math.max(a,b)].join(':');edges.set(key,(edges.get(key)||0)+1);}assert([...edges.values()].every(n=>n===2),'Closed manifold');
 hashes.add(p.map(v=>v.toFixed(4)).join(','));
 context.timelineFocus=1/8;context.rebuild();
 const silent=context.mesh.geometry.attributes.position.array;
 assert(silent.every(Number.isFinite));
 console.log(instrument+': finite, closed mesh; next beat generated');
}
assert.equal(hashes.size,7,'Every instrument and the ensemble have distinct geometry');
console.log('PASS: five distinct instruments blend into a distinct ensemble plus smooth silence');
