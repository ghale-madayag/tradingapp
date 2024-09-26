// Apps > Todo
import avatar1 from "@assets/images/users/avatar-1.jpg";
import avatar2 from "@assets/images/users/avatar-2.jpg";
import avatar3 from "@assets/images/users/avatar-3.jpg";
import avatar4 from "@assets/images/users/avatar-4.jpg";
import avatar5 from "@assets/images/users/avatar-5.jpg";
import avatar6 from "@assets/images/users/avatar-6.jpg";
import avatar7 from "@assets/images/users/avatar-7.jpg";
import avatar8 from "@assets/images/users/avatar-8.jpg";
import avatar9 from "@assets/images/users/avatar-9.jpg";
import avatar10 from "@assets/images/users/avatar-10.jpg";

const todoList = [{
    id: 1,
    checkedElem: false,
    todo: 'Added Email Templates',
    assignedto: [{
        assigneeName: "Test 01",
        assigneeImg: avatar1,
    }, {
        assigneeName: "John Robles",
        assigneeImg: avatar3,
    }
    ],
    dueDate: '03 Apr, 2022',
    status: 'Inprogress',
    priority: "High"
}, {
    id: 2,
    checkedElem: false,
    todo: 'Additional Mailbox',
    assignedto: [{
        assigneeName: "Virgie Price",
        assigneeImg: avatar5,
    }, {
        assigneeName: "Diego Norris",
        assigneeImg: avatar9,
    }, {
        assigneeName: "Anthony Mills",
        assigneeImg: avatar10,
    }
    ],
    dueDate: '02 Apr, 2022',
    status: 'Pending',
    priority: "Medium"
}, {
    id: 3,
    checkedElem: true,
    todo: 'Make a creating an account profile',
    assignedto: [{
        assigneeName: "Virgie Price",
        assigneeImg: avatar5,
    }, {
        assigneeName: "Marian Angel",
        assigneeImg: avatar6,
    }, {
        assigneeName: "Johnnie Walton",
        assigneeImg: avatar7,
    }, {
        assigneeName: "Donna Weston",
        assigneeImg: avatar8,
    }
    ],
    dueDate: '02 May, 2022',
    status: 'Completed',
    priority: "Low"
}, {
    id: 4,
    checkedElem: false,
    todo: 'Added new tabs styles',
    assignedto: [{
        assigneeName: "James Forbes",
        assigneeImg: avatar2,
    }
    ],
    dueDate: '01 May, 2022',
    status: 'New',
    priority: "Low"
}, {
    id: 5,
    checkedElem: false,
    todo: 'Added bdge new style - gradient',
    assignedto: [{
        assigneeName: "John Robles",
        assigneeImg: avatar3,
    }, {
        assigneeName: "Anthony Mills",
        assigneeImg: avatar10,
    }, {
        assigneeName: "Diego Norris",
        assigneeImg: avatar9,
    }
    ],
    dueDate: '01 May, 2022',
    status: 'Inprogress',
    priority: "Medium"
}, {
    id: 6,
    checkedElem: false,
    todo: 'Added Back to Top button',
    assignedto: [{
        assigneeName: "Marian Angel",
        assigneeImg: avatar6,
    }, {
        assigneeName: "Johnnie Walton",
        assigneeImg: avatar7,
    }
    ],
    dueDate: '30 Apr, 2022',
    status: 'Inprogress',
    priority: "High"
}, {
    id: 7,
    checkedElem: true,
    todo: 'Added File Manager Apps',
    assignedto: [{
        assigneeName: "John Robles",
        assigneeImg: avatar3,
    }, {
        assigneeName: "Mary Gant",
        assigneeImg: avatar4,
    }, {
        assigneeName: "Virgie Price",
        assigneeImg: avatar5,
    }
    ],
    dueDate: '29 Apr, 2022',
    status: 'Completed',
    priority: "Medium"
}, {
    id: 8,
    checkedElem: false,
    todo: 'Datatable with jQuery cdn',
    assignedto: [{
        assigneeName: "Marian Angel",
        assigneeImg: avatar6,
    }, {
        assigneeName: "Johnnie Walton",
        assigneeImg: avatar7,
    }, {
        assigneeName: "Donna Weston",
        assigneeImg: avatar8,
    }
    ],
    dueDate: '28 Apr, 2022',
    status: 'Pending',
    priority: "High"
}, {
    id: 9,
    checkedElem: false,
    todo: 'Profile Page Structure',
    assignedto: [{
        assigneeName: "Mary Gant",
        assigneeImg: avatar4,
    }, {
        assigneeName: "Virgie Price",
        assigneeImg: avatar5,
    }
    ],
    dueDate: '27 Apr, 2022',
    status: 'New',
    priority: "Low"
}, {
    id: 10,
    checkedElem: true,
    todo: 'Make a creating an account profile',
    assignedto: [{
        assigneeName: "John Robles",
        assigneeImg: avatar3,
    }
    ],
    dueDate: '26 Apr, 2022',
    status: 'Completed',
    priority: "Medium"
}, {
    id: 11,
    checkedElem: true,
    todo: 'Change email option process',
    assignedto: [{
        assigneeName: "John Robles",
        assigneeImg: avatar3,
    }, {
        assigneeName: "Anthony Mills",
        assigneeImg: avatar10,
    }, {
        assigneeName: "Diego Norris",
        assigneeImg: avatar9,
    }
    ],
    dueDate: '25 Apr, 2022',
    status: 'Completed',
    priority: "High"
}, {
    id: 12,
    checkedElem: false,
    todo: 'Brand Logo design',
    assignedto: [{
        assigneeName: "James Forbes",
        assigneeImg: avatar2,
    }, {
        assigneeName: "Anthony Mills",
        assigneeImg: avatar10,
    }, {
        assigneeName: "Diego Norris",
        assigneeImg: avatar9,
    }
    ],
    dueDate: '25 Apr, 2022',
    status: 'New',
    priority: "Medium",
}, {
    id: 13,
    checkedElem: false,
    todo: 'Add Dynamic Contact List',
    assignedto: [{
        assigneeName: "Virgie Price",
        assigneeImg: avatar5,
    }, {
        assigneeName: "Marian Angel",
        assigneeImg: avatar6,
    }, {
        assigneeName: "Johnnie Walton",
        assigneeImg: avatar7,
    }, {
        assigneeName: "Donna Weston",
        assigneeImg: avatar8,
    }
    ],
    dueDate: '24 Apr, 2022',
    status: 'Inprogress',
    priority: "Low"
}, {
    id: 14,
    checkedElem: true,
    todo: 'Additional Calendar',
    assignedto: [{
        assigneeName: "Virgie Price",
        assigneeImg: avatar5,
    }, {
        assigneeName: "Diego Norris",
        assigneeImg: avatar9,
    }, {
        assigneeName: "Anthony Mills",
        assigneeImg: avatar10,
    }
    ],
    dueDate: '23 Apr, 2022',
    status: 'Completed',
    priority: "Medium",
}, {
    id: 15,
    checkedElem: false,
    todo: 'Added Select2',
    assignedto: [{
        assigneeName: "Curtis Saenz",
        assigneeImg: avatar1,
    }, {
        assigneeName: "John Robles",
        assigneeImg: avatar3,
    }
    ],
    dueDate: '23 Apr, 2022',
    status: 'Pending',
    priority: "High"
}];

export { todoList };