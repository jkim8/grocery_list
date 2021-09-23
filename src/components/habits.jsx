import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {

    state = {
        habits: [
            { id: 1,  name: 'Reading', count: '0'},
            { id: 2, name: 'Breathing', count: '0'},
            { id: 3, name: 'riding', count: '0'}
        ]
    }

    render() {
        return (
            <ul>
                {
                    this.state.habits.map(habit => 
                        <Habit key={habit.id} habit={habit}/>
                    )
                }
            </ul>
        );
    }
}

export default Habits;