import { 
    Grid, 
    GridItem,
    Box,
    Container,
    Image,
    Text,
    Stack
} from '@chakra-ui/react'

function Hero() {
  return (
    <Container maxW='1080px' paddingTop={'40px'}>
    <Box>
    <Grid templateColumns='repeat(2, 1fr)' gap={0}>
    <Stack>
    <Text as={'h1'} fontSize='54px' color='brand.black'>
        Website Design & Development Studio in Oklahoma City
    </Text>
    <Text as={'h3'} fontSize='34px' color='brand.black'>
        Website Design & Development Studio in Oklahoma City
    </Text>
    </Stack>
        <Box boxSize='sm'>
         <Image 
         borderTopLeftRadius={ '200px' }
         borderTopRightRadius={ '200px' }
         maxW='100%' 
         objectFit='cover' 
         src='https://myheartcreative.b-cdn.net/wp-content/uploads/2022/07/amy-and-vinod-myheartcreative-mobile.jpg' 
         alt='myheartcreative' />
         </Box>
    </Grid>
    </Box>
    </Container>
  )
}

export default Hero
