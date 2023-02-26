import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/NavBar'
import Newsletter from '../../components/Newsletter/Newsletter'
import Products from '../../components/Products/Products'


const Container = styled.div`

`

const Title = styled.h1`
margin:20px;

`

const FilterContainer = styled.div`
 display:flex;
 justify-content:space-between;

`

const Filter = styled.div`
 margin:20px;

`

const FilterText = styled.span`
 font-size:20px;
 font-weight:600;
 margin-right:20px;
`
const Select = styled.select`
 padding:10px;
 margin-right:20px;

`
const Option = styled.option`
 
`

const ProductList = () => {

  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value
    })
  };

  
  return (
    <Container>
      <Navbar />
      <Title>Brand</Title>
      <FilterContainer>
        <Filter><FilterText>Filter Products:</FilterText>
          <Select name="Brand" onChange={handleFilters}>
            <Option disabled  selected>
              BRAND
            </Option>
            <Option >
              HP
            </Option>
            <Option >
              APPLE
            </Option>
            <Option >
              ANDROID
            </Option>
            <Option >
              SONY
            </Option>
            <Option >
              SAMSUGN
            </Option>
            <Option >
              WHIRLPOOL
            </Option>
          </Select>
          <Select name="category" onChange={handleFilters}>
            <Option disabled selected >
              HOME
            </Option>
            <Option >
              KITCHEN
            </Option>
            <Option >
              GAMES
            </Option>
            <Option >
              SCHOOL
            </Option>
            <Option >
              APPLIENCES
            </Option>
            <Option >
              ENTRETAINMENT
            </Option>

          </Select>
        </Filter>
        <Filter><FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)} >
            <Option value="newest">
              Featured Items(newest)
            </Option>
            <Option value="asc" >
              Price : Low to High(asc)
            </Option>
            <Option value="desc" >
              Price : High to Low(desc)
            </Option>

          </Select>
        </Filter>
      </FilterContainer>
      <Products cat="cat" filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList