//jsx code


// props
// state
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            items : [] , 
            item : ''
        }
        this.changeVal = (e) =>{
            // console.log(e.target.value);
            this.setState({
                item : e.target.value
            });
        }
        this.submitItem = (e) =>{
            e.preventDefault();
            let items = [...this.state.items,{ id: this.state.items.length+1 , name: this.state.item }];
            // items.push(this.state.item);
            this.setState({
                items : items
            });
            e.target.children[0].value = '';
        }

        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem(id){
        let items = [...this.state.items];
        // console.log(items)
        let filtered = items.filter(element => element.id != id );
        console.log(...filtered); 
        this.setState({
            items : filtered
        });
    }
    render(){
        //return jsx
        console.log(this.state.items);
        return (<div>
            <Header />
            <Form updateValue={this.changeVal}  submitItem={this.submitItem}/>
            <ListItem  items = {this.state.items} delete={this.deleteItem}/>
            {/* {this.state.item} */}
            </div>);
    }
}
class Header extends React.Component{
    render(){
        return <header> <h2>To Do List App</h2> </header>
    }
}
class ListItem extends React.Component{
    render(){
        return <div>
            {
                this.props.items.length ? this.props.items.map(item => <Item deleted={this.props.delete}  singleItem={item}/>): ''
            }
            </div>;
    }
}
class Item extends React.Component{
    render(){
        return (<div  className="item">
            {this.props.singleItem.id} - {this.props.singleItem.name}
            <button onClick={ ()=>this.props.deleted(this.props.singleItem.id) } className="del">Delete</button>
        </div>);
    }
}
class Form extends React.Component{
    constructor()
    {
        super();
    }
    render(){
        return (
            <form onSubmit = {this.props.submitItem}>
                <input type="text" className="text" onChange={this.props.updateValue} />
                <input type="submit" value="ADD" className="Add" />
            </form>
        );
    }
}

ReactDOM.render(<App />,document.getElementById("app"));











// class Messi extends React.Component{
//     render()
//     {
//         //return jsx
//         return (
//             <div>
//                 <h1>messi is the best player in the world</h1>
//                 <p>cristiano ronaldo is the second player</p>
//             </div>            
//         );
//     }
// }


// let Content = (
//     <div>
//         <h1>Hello My Friends</h1>
//         <Messi></Messi>
//     </div>
// );

// ReactDOM.render(Content,document.getElementById("app"));


// var value;
// var list = []; 

// var change = (e) =>{
//     value = e.target.value;
// }
// var submitted = (e) =>{
//     e.preventDefault();
//     list.push(value);
//     render();
//     e.target.children[0].value = "";
// }
///////////////////////////////////////////////////////////////
// var toggle = false;

// var toggleText = () =>{
//     toggle = !toggle;
//     render();
// }

// function render(){
//     console.log(toggle);
//     var Component = (
//         <div>
//             <button onClick={toggleText}>Toggle Text</button>
//             {toggle ? <p>This is Text</p> : ''}
//             {/* <form onSubmit={submitted}>
//                 <input type="text" onChange={change} />
//                 <input type="submit"/>
//                 <ul>
//                     { list.length ? list.map((item) => <li> {item} </li>) : '' }
//                 </ul>
//             </form> */}
//         </div>
//     );
    
//     ReactDOM.render(Component , document.getElementById("app"));
// }
// render();