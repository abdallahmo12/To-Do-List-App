'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//jsx code


// props
// state
var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            items: [],
            item: ''
        };
        _this.changeVal = function (e) {
            // console.log(e.target.value);
            _this.setState({
                item: e.target.value
            });
        };
        _this.submitItem = function (e) {
            e.preventDefault();
            var items = [].concat(_toConsumableArray(_this.state.items), [{ id: _this.state.items.length + 1, name: _this.state.item }]);
            // items.push(this.state.item);
            _this.setState({
                items: items
            });
            e.target.children[0].value = '';
        };

        _this.deleteItem = _this.deleteItem.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'deleteItem',
        value: function deleteItem(id) {
            var _console;

            var items = [].concat(_toConsumableArray(this.state.items));
            // console.log(items)
            var filtered = items.filter(function (element) {
                return element.id != id;
            });
            (_console = console).log.apply(_console, _toConsumableArray(filtered));
            this.setState({
                items: filtered
            });
        }
    }, {
        key: 'render',
        value: function render() {
            //return jsx
            console.log(this.state.items);
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Form, { updateValue: this.changeVal, submitItem: this.submitItem }),
                React.createElement(ListItem, { items: this.state.items, 'delete': this.deleteItem })
            );
        }
    }]);

    return App;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'header',
                null,
                ' ',
                React.createElement(
                    'h2',
                    null,
                    'To Do List App'
                ),
                ' '
            );
        }
    }]);

    return Header;
}(React.Component);

var ListItem = function (_React$Component3) {
    _inherits(ListItem, _React$Component3);

    function ListItem() {
        _classCallCheck(this, ListItem);

        return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
    }

    _createClass(ListItem, [{
        key: 'render',
        value: function render() {
            var _this4 = this;

            return React.createElement(
                'div',
                null,
                this.props.items.length ? this.props.items.map(function (item) {
                    return React.createElement(Item, { deleted: _this4.props.delete, singleItem: item });
                }) : ''
            );
        }
    }]);

    return ListItem;
}(React.Component);

var Item = function (_React$Component4) {
    _inherits(Item, _React$Component4);

    function Item() {
        _classCallCheck(this, Item);

        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    _createClass(Item, [{
        key: 'render',
        value: function render() {
            var _this6 = this;

            return React.createElement(
                'div',
                { className: 'item' },
                this.props.singleItem.id,
                ' - ',
                this.props.singleItem.name,
                React.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this6.props.deleted(_this6.props.singleItem.id);
                        }, className: 'del' },
                    'Delete'
                )
            );
        }
    }]);

    return Item;
}(React.Component);

var Form = function (_React$Component5) {
    _inherits(Form, _React$Component5);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this));
    }

    _createClass(Form, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.props.submitItem },
                React.createElement('input', { type: 'text', className: 'text', onChange: this.props.updateValue }),
                React.createElement('input', { type: 'submit', value: 'ADD', className: 'Add' })
            );
        }
    }]);

    return Form;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));

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
