import React, { useState, useEffect } from 'react';
import { useNavigate } from ' react-router-dom';
import { imageMap } from '../../utils/productImages';
import './Cart.css';

const Cart = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    const updateCart = (mewCart) => {
        setCartItems(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const increaseQuantity = (productId) => {
        const updateCart =cartItems.map(item =>
            item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        updateCart(updateCart);
    };

    const decreaseQuantity = (productId) => {
        const updateCart = cartItems.map(item => {
            if (item.id === productId) {
                if (item.quantity > 1 ){
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return null;
                }
            }   
            return item;
        }).filter(Boolean);
        updateCart(updateCart);
    };
    const removeItem = (productId) => {
        const updateCart = cartItems.filter(item => item.id !== productId);
        updateCart(updateCart)
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.currentPrice.replace(/[^\d]/g, '')) || 0;
            return total + (price * item.quantity);
        }, 0);
    };
    const formatPrice = (price) => {
        return new Intl.NumberFormat
    };