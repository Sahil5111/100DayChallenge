const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// js that enables bootstrap popovers
// [Data-bs-Content] appears on the popover 
// [Data-bs-Placement] defines where popover occurs