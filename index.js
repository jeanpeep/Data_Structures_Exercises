//STACK
class Stack{
  constructor(){
    this.items=[];
    this.length=0;
  }
  push(element){
    this.items.push(element);
  }
  pop(){
    this.items.pop();
  }
  peek(){
    return this.items[this.items.length-1];
  }
  size(){
    return this.items.length;
  }
  display(){
    if(this.size()==0){
      return "Stack is empty"
    }
    for(let i=0;i<this.size();i++){
      console.log(this.items[i]);
    }
  }
}
function ejercicio1(stack, x) {
  console.log("STACK / EJERCICIO 1:");
  let pila = stack;
  for (let i = 0; i < stack.size() - x + 1; i++) {
    pila.pop();
  }
  pila.display();
  return pila;
}
let stack1 = new Stack();
stack1.push("Manzana");
stack1.push("Cebolla");
stack1.push("Apio");
stack1.push("Naranja");
stack1.push("Papaya");
stack1.push("Sandía");
stack1.push("Melón");
ejercicio1(stack1, 5);

let stack2 = new Stack();
function ejercicio2(stack, n, v) {
  console.log("STACK / EJERCICIO 2:");
  let pila = stack;
  for (let i = stack.size() - 1; i > -1; i--) {
    if (pila.peek() == v) {
      pila.items[i] = n;
      pila.display();
      return pila;
    }
    else{
      pila.pop();
    }
  }
  if (pila.size() == 0) {
    return "NO";
  }
}
stack2.push(3);
stack2.push(2);
stack2.push(3);
stack2.push(4);
stack2.push(6);
stack2.push(8);
stack2.push(1);
stack2.push(2);
stack2.push(5);
stack2.push(5);
ejercicio2(stack2, 3, 6);

function ejercicio3(){
  console.log("STACK / EJERCICIO 3:");
  var pila = new Stack();
  for(let i=0;i<4;i++){
    if(i==1 || i==2){
      let cad = "Pueblo "+i.toString();
      pila.push(cad);
    }
    else if(i==0){
      pila.push("Origen");
    }
    else{
      pila.push("Destino");
    }
  }
  pila.display();
  console.log("VAMOS DENUEVO")
  var pila2 = new Stack();
  for(let i=3;i>=0;i--){
    pila2.push(pila.items[i]); 
  }
  pila2.display();
}
ejercicio3();


function ejercicio4(stack,x){
   console.log("STACK / EJERCICIO 4:");
  let pila1 = stack;
  let pila2 = new Stack();
  for(let i=stack.size()-1;i>-1;i--){
    if(pila1.items[i]==x){
      pila1.pop();
      break;
    }
    else{
      pila2.push(pila1.items[i]);
      pila1.pop();
    }
  }
    if(pila1.size()==0){
    return "NO SE HA ENCONTRADO EL NUMERO";
  }
  else{
    for(let i=pila2.size()-1;i>-1;i--){
      pila1.push(pila2.peek());
      pila2.pop();
    }
    pila1.display()
    return pila1;
  }
}
stack2.items=[3,2,3,4,6,8,1,2,5,5];
ejercicio4(stack2,3);


//QUEUE
class Queue{
  constructor(){
    this.items = [];
    this.length = 0;
  }
  enqueue(element){
    this.items.push(element);
  }
  dequeue(){
    this.items.shift();
  }
  peek(){
    return this.items[0];
  }
  size(){
    return this.items.length;
  }
  display(){
    if(this.size()==0){
      return "Queue is empty";
    }
    for(let i=0;i<this.size();i++){
      console.log(this.items[i]);
    }
  }
}

function ejercicio5(){
  console.log("QUEUE / EJERCICIO 5:");
  let colaoriginal=new Queue();
  let colasecundaria = new Queue();
  let cola1 = new Queue();
  let cola2= new Queue();
  colaoriginal.enqueue("amarillo");
  colaoriginal.enqueue("rosa");
  colaoriginal.enqueue("rojo");
  colaoriginal.enqueue("verde");
  colaoriginal.enqueue("azul");
  colaoriginal.enqueue("negro");
  colaoriginal.enqueue("morado");
  colaoriginal.enqueue("blanco");
  let tot = colaoriginal.size();
  for(let i=0;i<tot;i++){
    if(i % 2 == 0){
      cola1.enqueue(colaoriginal.peek());
      colaoriginal.dequeue();
      ;
    }
    else if(i % 2 != 0){
      cola2.enqueue(colaoriginal.peek());
      colaoriginal.dequeue();
    }
  }
  cola1.display();
  console.log("=========")
  cola2.display();
}
ejercicio5();

function ejercicio6(){
  console.log("QUEUE / EJERCICIO 6:");
  let cola = new Queue();
  cola.enqueue({user:'User1',ticket: true});
  cola.enqueue({ user:'User2', ticket:true });
  cola.enqueue({ user:'User3', ticket:false });
  cola.enqueue({ user:'User4', ticket:true });
  cola.enqueue({ user:'User5', ticket:false });
  cola.enqueue({ user:'User6', ticket:false });
  cola.enqueue({ user:'User7', ticket:true });
  cola.enqueue({ user:'User8', ticket:true });
  cola.enqueue({ user:'User9', ticket:true });
  cola.enqueue({ user:'User10', ticket:false });
  cola.enqueue({ user:'User11', ticket:true });
  cola.display();
  let out = new Queue();
  let inn = new Queue();
  let size = cola.size();
  console.log("Hora de sacar a los colados...")
  for(let i=0;i<size;i++){
    if(cola.peek().ticket == false){
      out.enqueue(cola.peek());
      cola.dequeue();
    }
    else{
      inn.enqueue(cola.peek());
      cola.dequeue();
    }
  }
  out.display();
  console.log("Se quedaron: ")
  inn.display();
}
ejercicio6();

//LINKED LIST
class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}
class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }
  isEmpty(){
    return this.head == null;
  }
  insert(data){
    let node = new Node(data);
    let current;
    if(this.isEmpty())
      this.head = node;
    else{
      current = this.head;
      while(current.next!==null)
        current = current.next
      current.next = node;
    }
    this.size++;
  }
  delete(num){
    let index = 0;
    let prev = null;
    let current = this.head;
    if(this.isEmpty() ||num>=this.size)
      return;
    else if(this.sizee==null)
      this.head=null;
    else if(num==0)
      this.head=null
    else{
      while(index!==num){
        prev=current;
        current=current.next;
        index++;
      }
      prev.next = current.next;
    }
  }
 display(){
   let current = this.head;
   let res = "";
   if(current==null)
     return null
   else if(current.next==null){
     console.log(current.head)
   }
   else{
     do{
       res+=current.data+",";
       current=current.next;
     }while(current.next)
   }
   console.log(res+current.data)
 }
search(data){
  let index = 0;
  let current = this.head;
  if(this.isEmpty())
    return null;
  else{
    while(current!=null){
      if(current.data==data)
        console.log(index)
      current = current.next;
      index++;
    }
    return null;
  }
}
ejercicio7(data){
  console.log("LINKED LIST / EJERCICIO 1:");
  let node = new Node(data);
  let index = 0;
  let current;
  if(this.isEmpty())
    this.head=node
  else{
    current = this.head;
    while(current.next!=null){
      if(current.data==data)
        return null;
      current = current.next;
    }
    current.next=node;
  }
}
}
let l1 = new LinkedList();
l1.insert(1);
l1.insert(2);
l1.insert(3);
l1.insert(4);
l1.insert(5);
l1.insert(6);
l1.ejercicio7(4);
l1.display();


function getRandom() {
  return Math.floor(Math.random()*(20-1)+1);
}
function ejercicio8(){
  console.log("LINKED LIST / EJERCICIO 2:");
  let l2 = new LinkedList();
  l2.insert(getRandom());
  l2.insert(getRandom());
  l2.insert(getRandom());
  l2.insert(getRandom());
  l2.insert(getRandom());
  l2.insert(getRandom());
  l2.insert(getRandom());
  l2.insert(getRandom());
  l2.insert(getRandom());
  l2.insert(getRandom());
  l2.display();
  let max= getRandom();
  let res="";
  let current=l2.head;
  for(let i=0;i<l2.size;i++){
    if(current.data>max)
      res+=current.data+","
    current=current.next;
  }
  console.log("Mayores a "+max+": "+res);
}
ejercicio8();


//BINARY TREES
class NodeBT{
  constructor(data){
    this.data=data;
    this.right=null;
    this.left=null;
    this.level=null;
  }
}
class BinaryTree{
  constructor(){
    this.root=null;
  }
isEmpty(){
  return !this.root
}
insert(data) {
    let node = new NodeBT(data);

    let current;
    let l = 0;
    if(this.isEmpty()){
      node.level=l;
      this.root = node;
    }
    else if (data === this.root.data) 
      return undefined;
    else {
      current = this.root
      l++;
      while(true) {
        if(current.right && current.data < node.data){
          l++;
          current = current.right;
        }
        else if(current.left && current.data > node.data){
          l++;
          current = current.left;
        }
        else
          break
      }
      l++;
      if(current.data < node.data){
        node.level=l;
        current.right = node;
      }
      else if(current.data >node.data){
        node.level=l;
        current.left = node;
      }
      else{
        return undefined;
      }
    }
  }
search(data){
  let comparaciones = 0;
  let current = this.root;
  while(data!=current.data && current){
    if(data>current.data && current.right)
      current = current.right;
    else if(data<current.data && curent.left)
      current = current.left;
    comparaciones++;
}
  console.log("Hice "+comparaciones+" comparaciones.");
    return current;
}
  preorderTraversal() {
    let root = this.root

    if (root == null) {
      return [];
    }

    const stack = [];
    const result = [];

    stack.push(root);

    while(stack.length > 0) {
      let current = stack.pop();
      result.push(current.data);

      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
      else current.leave=true;
    }
    return result;
  }
}

let number_list = [83,18,74,40,26,78,16,75,93,15,86,85,92,21,71];
bn1 = new BinaryTree();
bn2 = new BinaryTree();
number_list.forEach(number => {
  bn1.insert(number);
  bn2.insert(number);
});
function BTejercicio1(bn1,bn2){
  console.log("BINARY TREE/ EJERCICIO 1:");
  let bt1 = bn1.preorderTraversal();
  let bt2 = bn2.preorderTraversal();
  if(bt1.length==bt2.length){
    for(let i=0;i<bt1.length;i++){
      if(bt1[i]!=bt2[i]){
        console.log(false)
        return false;
      }
    }
    console.log(true)
    return true;
  }
  else{
    console.log(false)
    return false;
  }
}
BTejercicio1(bn1,bn2);
function BTejercicio2(bn1){
  console.log("BINARY TREE/ EJERCICIO 2:");
  let root = bn1.root

    if (root == null) {
      return null;
    }

    let bn2 = new BinaryTree();
    const stack = [];
    const result = [];

    stack.push(root);
    bn2.insert(root.data);
    while(stack.length > 0) {
      let current = stack.pop();
      result.push(current.data);
      bn2.insert(current.data);

      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
    console.log(result)
    return bn2;
}
let nuevo = BTejercicio2(bn1);
nuevo.preorderTraversal();

function BTejercicio3(bn,l){
  console.log("BINARY TREE/ EJERCICIO 3:");
  let root = bn.root;
    if (root == null) {
      return [];
    }

    const stack = [];
    const result = [];
    stack.push(root);

    while(stack.length > 0) {
      let current = stack.pop();
      if(current.level==l){
        result.push(current.data);
      }
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
    console.log(result);
    return result;
}
BTejercicio3(bn1,3);
function BTejercicio4(bn){
  console.log("BINARY TREE/ EJERCICIO 4:");
  let root = bn.root

    if (root == null) {
      return [];
    }

    const stack = [];
    const result = [];

    stack.push(root);

    while(stack.length > 0) {
      let current = stack.pop();
      if(current.leave==true) result.push(current.data);

      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
      else current.leave=true;
    }
    console.log(result);
    return result;
}
BTejercicio4(bn1);
//EJERCICIOS DE BUSQUEDA
let arra = [3,6,1,8,2,3,6,3,2,5,6];
function BUSejercicio1(arr){
  console.log("BUSQUEDA / EJERCICIO 1:")
  let mas_coincidencias = {
  num:0,
  cant:0
  };
  arr.forEach(el=>{
  let coincidencias = 0;
  for(let i=0;i<arr.length;i++){
    if(el==arr[i]) coincidencias++;
    if(coincidencias>=mas_coincidencias.cant){
      mas_coincidencias.num = el;
      mas_coincidencias.cant = coincidencias;
    } 
  }
  })
  console.log("Numero más repetido: "+mas_coincidencias.num);
  console.log("Cantidad repetida: "+mas_coincidencias.cant)
}
BUSejercicio1(arra);
function BUSejercicio2(arr){
  console.log("BUSQUEDA / EJERCICIO 2:")  
  let nuevo= [];
  arr.forEach(el=>{
    if(typeof(el)==="string") nuevo.push(el)
  })
  console.log(nuevo)
}
let arr1 = [8,"e",7,2,"a","d","f",2,3,1,4,3]
BUSejercicio2(arr1);
function BUSejercicio3(arr){
  console.log("BUSQUEDA / EJERCICIO 3:")  
  let mayor=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>=mayor){
      mayor=arr[i];
    } 
  }
  console.log(mayor);
}
let arr2 = [1,4,7,2,4,1,9,4,0,2,4,5,12];
BUSejercicio3(arr2);
function BUSejercicio4(arr){
  console.log("BUSQUEDA / EJERCICIO 4:")  
  let menor=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]<=menor){
      menor=arr[i];
    } 
  }
  console.log(menor);
}
let arr3 = [1,4,5,-1,-7,2,3,9];
BUSejercicio4(arr3);
class Contacto{
  constructor(nom,ape,tel){
    this.nombre=nom;
    this.apellidos=ape;
    this.telefono=tel;
    this.next=null;
  }
}
class ListaContactos{
  constructor(){
    this.inicio=null;
  }
  Agendar(nom,ape,tel){
    let cont=new Contacto(nom,ape,tel);
    let current=this.inicio;
    if(!current){
      this.inicio=cont;
    }
    else{
      while(current.next){
        if(current.nombre==cont.nombre){
          console.log("El contacto ya existe");
          return undefined;
        }
        else current=current.next;
      }
      current.next=cont;
    }
  }
  Buscar(nom){
    console.log("BUSQUEDA / EJERCICIO 5:")
    let current = this.inicio;
    if(!current) console.log("No hay datos almacenados");
    else if(current && !current.next){
      if(current.nombre!=nom) console.log("No se encontró.")
    }
    else{
      while(current){
        if(current.nombre==nom){
          console.log("Nombre: "+current.nombre+" "+current.apellidos);
          console.log("Telefono: "+current.telefono);
          return undefined;
        }
        else current=current.next;
        }
    }
    console.log("No se encontró el contacto");
  }
}
let contacto = new ListaContactos();
contacto.Agendar("Aquiles","Pelida",98574682);
contacto.Agendar("Mafe","Bravo",972740237);
contacto.Agendar("Pepe","LePew",987458765);
contacto.Agendar("Agamenon","Atrida",986548524);
contacto.Buscar("Mafe");
//EJERCICIOS DE ORDENAMIENTO
function ORDejercicio1(arr){
  let aux;
  let tam=arr.length;
  for(let j=0;j<tam-1;j++){
    for(let i=0;i<tam;i++){
      if(arr[i]<arr[i+1]&&arr[i+1]!=null){
        aux=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=aux;
    }
  }
  }
  return arr
}
let arreglo1 = [9,3,1,6,5,88,-1,2,7];
console.log("ORDENAMIENTO / EJERCICIO 1");
console.log(ORDejercicio1(arreglo1));
function ORDejercicio2(arr){
  console.log("ORDENAMIENTO / EJERCICIO 2");
  arr.sort();
  console.log(arr)
  return arr;
}
let arreglo2 = ["b","h","w","e","a"];
ORDejercicio2(arreglo2);
class Alumno{
  constructor(nombre){
    this.nombre=nombre;
    this.calificaciones=[];
  }
  promedio(){
  let sum=0;
  for(let i=0;i<this.calificaciones.length;i++){
    sum=sum+this.calificaciones[i];
  }
  let prom=sum/this.calificaciones.length;
  return prom;
  }
  notas(arr){
    this.calificaciones=arr;
  }
}
class Salon{
  constructor(alumnos){
    this.alumnos=alumnos;
  }
  orden(){
    console.log("ORDENAMIENTO / EJERCICIO 3")
    let prom= [];
    this.alumnos.forEach(al => {
      prom.push(al.promedio());
    })
    prom = ORDejercicio1(prom);
    let cont=1;
    prom.forEach(p => {
      this.alumnos.forEach(al => {
        if(al.promedio()==p){
          console.log(cont+". "+al.nombre);
        }
    });
    cont++;
    });
  }
}
let pepe = new Alumno("Pepe");
let mafe = new Alumno("Mafe");
let aquiles = new Alumno("Aquiles");
let amenon = new Alumno("Agamenon")
mafe.notas([17,15,19,17,20])
pepe.notas([15,20,12,16,18]);
aquiles.notas([20,20,20,20,20]);
amenon.notas([06,10,12,10,10]);
let salon1 = new Salon([pepe,aquiles,amenon,mafe]);
salon1.orden();
function ORDejercicio4(ar){
  console.log("ORDENAMIENTO / EJERCICIO 4:");
  let aux;
  let cant=ar.length;
  for(let j=0;j<cant-1;j++){
    for(let i=0;i<cant;i++){
      if(ar[i+1]!=undefined){ 
        if(ar[i].length > ar[i+1].length && ar[i+1]!=undefined){
          aux=arr[i];
          ar[i]=ar[i+1];
          ar[i+1]=aux;
        }
      }   
    }
  }
  console.log(arr);
  return arr;
}
let arr = ["adios","hola","maximo","uno","despedida"];
ORDejercicio4(arr);
function ORDejercicio5(are){
  console.log("ORDENAMIENTO / EJERCICIO 5:");
  let aux;
  let cant=are.length;
  for(let j=0;j<cant-1;j++){
    for(let i=0;i<cant;i++){
      if(are[i+1]!=undefined){
        if(Math.abs(parseFloat(""+are[i][0]+"."+are[i][1])) > Math.abs(parseFloat(""+are[i+1][0]+"."+are[i+1][1]))){
          aux=are[i];
          are[i]=are[i+1];
          are[i+1]=aux;
        }
      }
    }
  }
  console.log(are);
  return are;
}
let are=[[7,3],[2,2],[1,0],[4,3]];
ORDejercicio5(are);
