var cmp = {
	template: '<p>This is another local child component</p>'
};

Vue.component('todo-footer', {
	template: '<p>This is another global child component</p>'
});

var app = new Vue({
    el: '#app',
    data: {
        message : 'This is a parent component'
    },
    // 실습 #2 - `todo-list` 컴포넌트 지역 등록
    components: {
	    'todo-list': cmp
    }
});