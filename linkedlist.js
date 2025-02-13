let arr = [11,3,23,7];

// let ll = {
//     value: 11,
//     next: {
//         value: 3,
//         next: {
//             value: 23,
//             next: {
//                 value: 7,
//                 next: null
//             }
//         }
//     }
// };

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}


let newLinkedList = new LinkedList(11);

console.log(newLinkedList);
console.log(newLinkedList.head);
console.log(newLinkedList.tail);
console.log(newLinkedList.length); 

for (i in arr) {
    newLinkedList.push(arr[i]);
}

console.log(newLinkedList);
console.log(newLinkedList.head);
console.log(newLinkedList.tail);
console.log(newLinkedList.length); 