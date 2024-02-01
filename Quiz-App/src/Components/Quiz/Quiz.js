import React from 'react';
import Question from '../Questions/Question';
import Option from '../Option/Option';
import './Quiz.css';
import End from '../End/End';
import Score from '../Score/Score';
class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            questions : {
               1 : 'React is mainly used for building __________',
               2 : '__________ can be done while multiple elements needs to be returned from a components',
               3 : 'What is used to pass data to a component from outside ?',
               4 : 'The arbitrary inputs of components are called _________',
               5 : 'Ref is used for referring an element or component returned by ___________'
            },
            options : {
                1 : {
                    1 : 'Database',
                    2 : 'Connectivity',
                    3 : 'User interface',
                    4 : 'Design platform'
                },
                2 : {
                    1 : 'Abstraction',
                    2 : 'Packing',
                    3 : 'Insulation',
                    4 : 'Wrapping'
                },
                3 : {
                    1 : 'setState',
                    2 : 'render with arguments',
                    3 : 'Prototypes',
                    4 : 'Props'
                },
                4 : {
                    1 : 'Keys',
                    2 : 'Props',
                    3 : 'Elements',
                    4 : 'Ref'
                },
                5 : {
                    1 : 'react()',
                    2 : 'render()',
                    3 : 'reduce()',
                    4 : 'refer()'
                }

            },
            correctOptions : {
                1 : '3',
                2 : '4',
                3 : '4',
                4 : '2',
                5 : '2'

            },
            correctOption : 0,
            clickedOption : 0,
            step : 1,
            score : 0,
            result : 0,
            viewresult : 0
        }
    }
    checkOption = (opt) => {
        if(opt === this.state.correctOptions[this.state.step]){
            this.setState({
                score : this.state.score+1,
                correctOption : this.state.correctOptions[this.state.step],
                clickedOption : opt,
                result : 1
            });
        }else {
            this.setState({
                correctOption : 0,
                clickedOption : opt,
                result : 1
            })
        }
    }
    Next = (step) => {
        this.setState({
            step : step+1,
            correctOption : 0,
            clickedOption : 0,
            result : 0 
        });
    }
    handleClick = () => {
        this.setState({
             viewresult : 1
        });
    }
    render(){
        return(
             <div>
                { 
                    this.state.step <= Object.keys(this.state.questions).length ?
            <div className='QuizApp'>
               <Question q = {this.state.questions[this.state.step]} qno = {this.state.step}
               total = {Object.keys(this.state.questions).length}/> 
              <Option opt = {this.state.options[this.state.step]}
              clickevent = {this.checkOption} correctOption = {this.state.correctOption} clickedOption = {this.state.clickedOption}   result={this.state.result}/>
              <button className='Next' disabled = {this.state.clickedOption ? false : true} onClick={() => this.Next(this.state.step)}>NEXT &gt;</button>
            </div> : 
            this.state.viewresult ?
                (
                   <Score score = {this.state.score} total = {Object.keys(this.state.questions).length}/>
                )
           : (
                <End  click ={() => this.handleClick()}/>
            )
           }
          
            </div>
            );
    }
}
export default Quiz;