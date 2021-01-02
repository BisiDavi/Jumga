import React, { FC } from 'react';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useUI } from '@components/ui/context';
import { Navbar, Footer } from '@components/common';
import s from './layout.module.css';
