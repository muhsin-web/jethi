import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Image,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  PopoverHeader,
  PopoverArrow,
} from '@chakra-ui/react';
import '../navbar/style.css'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronRightIcon,
  ChevronDownIcon
} from '@chakra-ui/icons'
import Logo from '../Logo';

type Props = {
  navColor: string
}

export default function Navbar({navColor}: Props) {
  console.log(navColor)
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position='relative'>
      <Flex
      position={'fixed'}
      width='100%'
      left={0}
      right={0}
      zIndex={100}
      margin={'auto'}
        justifyContent='space-between'
        bg={navColor}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        maxW={1170}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={'solid'}
        padding='15px 0'
        paddingLeft={{base: 5, sm: 7}}
        paddingRight={{base: 5, sm: 7}}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
       

          <Box>
            <Logo />
          </Box>

        <Flex align={'center'} justify={{ base: 'center', md: 'start' }}>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>

         
            <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ?  <Text color={'#fff'} height={50} width={50} fontSize='14px' display={'grid'} placeItems='center' border='2px solid #fff'>BA <br/> CK</Text> : <Text color={'#fff'} height={50} width={50} fontSize='14px' display={'grid'} placeItems='center' border='2px solid #0010f1'>ME <br/> NU</Text>
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              _hover={{background: 'transparent'}}
            />
          </Flex>
        </Flex>
      </Flex>


      <Collapse in={isOpen} endingHeight={'100%'}>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('white', 'white');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} align={'center'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom'}>
            <PopoverTrigger>
              {
                !navItem.btn ?
                   <Link
                      p={2}
                      href={navItem.href ?? '#'}
                      fontSize={{base: 20, md: 16, sm: 10}}
                      fontWeight={500}
                      color={linkColor}
                      _hover={{
                        textDecoration: 'none',
                      }}>
                      {!navItem.btn && navItem.label}
                      {
                        navItem.icon && <Icon as={ChevronDownIcon}/>
                      }
                  </Link> : <Button fontSize={{md: 16, sm: 10}} color={'white'} className='qtbtn' style={{ backgroundColor: 'transparent', overflow: 'visible', margin: '0 20px', padding: '3px 20px', display: 'flex', gap: 10}} >
                        <Image objectFit={'contain'} src='http://jts.colladome.in/assets/images/gq-icon.png'/>
                    GET QOUTE
                  </Button>
              }
            </PopoverTrigger>

            {navItem.children && (
              // <PopoverHeader>{}</PopoverHeader>
              <PopoverContent
                display='flex'
                flexDirection='row'
                gap={20}
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                width={'fit-content'}
                margin={'auto'}
                >
                  <PopoverArrow />
                  <Box bg={'gray.600'} width={200} minH={300}>
                    {
                      navItem.subHeader
                    }
                  </Box>
               
                <Stack display={'grid'} gap={0} gridTemplateColumns='1fr 1fr 1fr'>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      borderRight='0.5px solid gray'
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={'black'}
      p={4}
      position={'fixed'}
      zIndex={100}
      width={'100%'}
      height='100%'
      top={0}
      // left={0}
      right={0}
      display={{ md: 'none' }}>
         {/* <IconButton
              onClick={onToggle}
              icon={
                isOpen &&  <Text color={'#fff'} height={50} width={50} fontSize='14px' display={'grid'} placeItems='center' border='2px solid #fff'>BA <br/> CK</Text>
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              _hover={{background: 'transparent'}}
            /> */}
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  icon?: boolean;
  subHeader?: string
  btn?: boolean
}


const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Service',
    icon: true,
    subHeader: 'you are welcome',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Technology',
    icon: true,
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Work',
    href: '#',
  },
  {
    label: 'GET QOUTE',
    href: '#',
    btn: true,
  },
];
