class Queue {
    constructor() {
        this.items = [];
    }

    // Add element to the rear of the queue
    enqueue(element) {
        this.items.push(element);
        let push_res = `${element}`;
        return [push_res, this.items.length];
    }

    // Return and remove the FRONT element in the queue (FIFO)
    dequeue() {
        if(this.isEmpty()) return undefined;
        let deleteItem = this.items.shift(); // Removes the first element in line
        console.log(`${deleteItem} removed from queue`);
        return deleteItem;
    }

    // Check the front element in the queue without removing it
    peek() {
        if(this.isEmpty()) return undefined;
        console.log(`Front element is ${this.items[0]}`);
        return this.items[0]; // First element
    }

    // Check if queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Check size of queue
    size() {
        return this.items.length;
    }

    // Clear queue
    clear() {
        this.items = [];
        console.log('Queue cleared..');
        return this.items;
    }
}

const queue = new Queue();

$(document).ready(function(){
    // 1. ENQUEUE Handler
    $("#enqueue-btn").click(function() {
        let val = $("#data-input").val().trim();
        if(val === "") {
            alert("Please enter a value to enqueue!");
            return;
        }
        let result = queue.enqueue(val);
        // Append to the bottom so new items wait at the rear (FIFO)
        $("#stack").append(`<div class="row bg-primary push">${result[0]}</div>`);
        $("#data-input").val("").focus();
    });

    // 2. DEQUEUE Handler
    $("#dequeue-btn").click(function() {
        if(queue.isEmpty()) {
            alert("Queue is empty! Nothing to dequeue.");
            return;
        }
        let dequeuedVal = queue.dequeue();
        // Remove the front element (the first one in line) from the UI
        $("#stack").children().first().remove();
        $(".pop").text(dequeuedVal);
    });

    // 3. PEEK Handler
    $("#peek-btn").click(function() {
        if(queue.isEmpty()) {
            alert("Queue is empty!");
            return;
        }
        let frontVal = queue.peek();
        let frontElement = $("#stack").children().first();
        frontElement.css("border", "3px solid yellow");
        setTimeout(() => {
            frontElement.css("border", "");
        }, 1000);
        alert(`Front element is: ${frontVal}`);
    });

    // 4. CLEAR Handler
    $("#clear-btn").click(function() {
        queue.clear();
        $("#stack").empty();
        $(".pop").text("");
    });
});