const Node = require('./node');

class LinkedList {
    constructor() {
        this._head= null;
        this._tail=null;
        this.length=0;
    }
        

    append(data) {
        let newNode = new Node();
        newNode.data= data;    
        if (this._head == null) {
            this._head = newNode;          
            this._tail = newNode;
            this.length++;
        } else {
            this._tail.next = newNode;
            newNode.prev =  this._tail;
            this._tail = newNode;
            this.length++;
        }    
        return this;       
    }
        
    
    head() {
        if (this._head == null) {
            return null;
        } else {
            return this._head.data;
        }
       
    }

    tail() {
        
        if (this._tail == null) {
            return null;
        } else {
            return this._tail.data;
        }  
    }

    at(index) {
        if (index>this.length-1)  {
            return null;
        } else {
            let pointer = this._head;
            let i=0;
            while (i<index)  {
                pointer=pointer.next;
                i++;
            }
            return pointer.data;
        }
    }

    insertAt(index, data) {
        if (index>this.length-1)  {
            return null;
        } else {
            let newNode = new Node();
            newNode.data= data;
            this.length++;
            if (index==0) {
                newNode.next=this._head;
                this._head.prev=newNode;
                this._head = newNode;
            } else {
                
                let pointer = this._head.next;
                let i=1;
                while (i<index)  {
                    pointer=pointer.next;
                    i++;
                }
                pointer.prev.next=newNode;
                newNode.prev=pointer.prev;
                newNode.next=pointer;
                pointer.prev=newNode;
            }
        }
        return this;
    }

    isEmpty() { 
        return this.length==0;
    }

    clear() {
        this._head=null;
        this._tail=null;
        this.length=0;
        return this;
    }

    deleteAt(index) {
        if (index>this.length-1)  {
            return null;
        } else {
         
            
            if (index==0) {
                let pointer=this._head.next;
                if (pointer==null) {
                    this._head=null;
                } else {
                    console.log(pointer);
                pointer.prev=null;
                this._head = pointer;
                }
            } else {
                if (index==this.length-1) {
                    let pointer=this._tail.prev;
                    pointer.next=null;
                    this._tail = pointer;

                } else {
                    let pointer = this._head.next;
                    let i=1;
                    while (i<index)  {
                        pointer=pointer.next;
                        i++;
                    }
                    pointer.prev.next=pointer.next;
                    pointer.next.prev=pointer.prev;
                }
            }
            this.length--;
        }
        return this;
    }

    reverse() {  
    let pointer=this._head;
    for (let i=0; i<this.length; i++) {
        if (i==0) {
            pointer.prev=pointer.next;
            pointer.next=null;
        } else {
            if (i==this.length-1) {
            pointer=this._tail;
            pointer.next=pointer.prev;
            pointer.prev=null;
            } else {
            pointer=pointer.prev;
            let pointer1=pointer.prev;
            pointer.prev=pointer.next;
            pointer.next=pointer1;
            }
        }
    }
    pointer=this._tail;
    this._tail=this._head;
    this._head=pointer;
    return this;
    }

    indexOf(data) {
        let pointer=this._head;
        for (let i=0; i<this.length; i++) {
            if  (pointer.data==data) {
                return i;
            } else {
                pointer=pointer.next;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;
