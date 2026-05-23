class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size) {
            return -1;
        }
        let current = this.head;
        for (let k = 0; k < index; k++) {
            current = current.next;
        }
        return current.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        if (this.tail === null) {
            this.tail = newNode;
        }
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newNode = new Node(val);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index < 0 || index >= this.size) {
            return false;
        }

        if (index === 0) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
        } else {
            let current = this.head;
            for (let k = 0; k < index - 1; k++) {
                current = current.next;
            }
            current.next = current.next.next;
            if (current.next === null) {
                this.tail = current;
            }
        }
        this.size--;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const values = [];
        let current = this.head;
        while (current !== null) {
            values.push(current.val);
            current = current.next;
        }
        return values;
    }
}
