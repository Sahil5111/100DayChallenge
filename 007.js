function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (list1, list2) {
    let rp = new ListNode(0,null)
    let result = rp
    while ( list1 && list2){
        if(list1.val <= list2.val){
            result.next = list1 
            list1 = list1.next
        }
        else{
            result.next = list2
            list2 = list2.next
        }
        result = result.next
    }
    result.next = list1 || list2
    return rp.next
};


let list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
let list2 = new ListNode(1,new ListNode(3,new ListNode(4)))

let list3 = mergeTwoLists(list1, list2)

while (list3 !== null) {
    console.log(list3.val)
    list3 = list3.next
}
