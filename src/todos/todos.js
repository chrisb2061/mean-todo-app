import _ from 'lodash';

export default function ($scope) {
    let params = {
        createHasInput: false
    };

    $scope.todos = [
        {
            task: 'Do dishes',
            isCompleted: false,
            isEditing: false
        },
        {
            task: 'Walk the dog',
            isCompleted: true,
            isEditing: false
        }
    ];

    $scope.onCompletedClick = todo => {
        todo.isCompleted = !todo.isCompleted;
        console.log(todo.isCompleted);
    };

    $scope.onEditClick = todo => {
        todo.isEditing = true;
        todo.updatedTask = todo.task;
    };

    $scope.cancelEditing = todo => {
        todo.isEditing = false;
    };

    $scope.udpateTask = todo => {
        todo.task = todo.updatedTask;
        todo.isEditing = false;
    };

    $scope.createTask = () => {

        params.createHasInput = false;
        $scope.createTaskInput = '';


    };

    $scope.deleteTask = todoToDelete => {
        _.remove($scope.todos, todo => todo.task === todoToDelete.task);
    };

    // watching createTaskInput from the dom and running function using es6 syntax.
    // Value from createTaskInput is passed as a parameter
    $scope.$watch('createTaskInput', value => {

        if(!value && params.createHasInput){
            $scope.todos.pop();
            params.createHasInput = false;

        } else if(value && !params.createHasInput) {
            $scope.todos.push({
                task: value,
                isCompleted: false
            });
            params.createHasInput = true;

        } else if(value && params.createHasInput) {
            $scope.todos[$scope.todos.length - 1].task= value;
        }


    });

}