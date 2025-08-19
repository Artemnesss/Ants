import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems:[],
      items:[
        {
          id:1,
          title: "Муравьиная ферма Куб",
          img: "ants3.jpg",
          desc: 'сочетание удобства и красоты',
          category: "farm",
          price: "1899p",

        },
        {
          id:2,
          title: "Муравьиная ферма Флэт",
          img: "ants4.jpg",
          desc: 'классика',
          category: "farm",
          price: "1799p",

        },
        {
          id:3,
          title: "Муравьи lasius niger",
          img: "lasius-niger-family.jpg",
          desc: 'просты в уходе',
          category: "ants",
          price: "299p",

        },
        {
          id:4,
          title: "Декоративные камешки",
          img: "kamni.jpg",
          desc: 'добавят особенности',
          category: "other",
          price: "499p",

        },
        {
          id:5,
          title: "Муравьи Messor structor",
          img: "messor.jpg",
          desc: 'южные гости',
          category: "ants",
          price: "899p",

        },
      ],
      showFullItem: false,
      fullItem: {}
    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)

  }
  
  
  render(){

  return (
    <>
     <div className = 'wrapper'>
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
      {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item ={this.state.fullItem}/>}
      <Footer/>
      </div> 
    </>
  )
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})

  }

  addToOrder(item){
    let isInArray = false


    this.state.orders.forEach(el => {
      if(el.id ===  item.id)
        isInArray = true 
    })
    if(!isInArray)

      this.setState({orders:[...this.state.orders, item]}, )
  }
}

export default App
