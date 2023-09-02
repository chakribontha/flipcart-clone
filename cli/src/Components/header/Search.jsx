import { InputBase, Box, styled, List, ListItem } from '@mui/material';
import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productsAction';
import {Link} from 'react-router-dom';
const SearchContainer = styled(Box)`
  background: #fff;
  width: 30%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  color: black;
  padding: 5px;
`;
const ListWrapper = styled(List)`
 position: absolute;
 background:#FFFFFF;
 color: #000;
 margin-top:36px;
`

export default function Search() {
  const [text, setText] = useState('');

  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  };

  const filteredProducts = products.filter((product) =>
    product.title.longTitle.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for a specific item..."
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper>
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              onClick={()=>setText('')}
              style={{textDecoration:'none',color:'inherit'}}
            >
                <ListItem key={product.id}>{product.title.longTitle}</ListItem>
            </Link>
           
          ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
}
