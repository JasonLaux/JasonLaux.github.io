import * as React from 'react';
import Button from '@mui/material/Button';
import { Container} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const cards = [
    {   
        id: 1,
        img_url: "https://quickbooks.intuit.com/oidam/intuit/sbseg/en_ca/blog/images/sbseg-what-is-accounting-ledger.jpeg",
        heading: "Mony: An Online Ledger Platform",
        description: "Mony allows you to track your daily income and expense. Ledgers can be shared with your families or business parters!",
        link: "https://github.com/JasonLaux/mony"
    },
    {   
        id: 2,
        img_url: "https://nationalseniors.com.au/generated/1440w-3-2/istock-1294303237-cryptocurrency-investment-financial-22-jpg.jpg?1644369957",
        heading: "Cryptocurreny Exchange Monitor",
        description: "This app collects the data from CoinCap API and displays real-time exchange data from over 1000 cryptocurrencies such as Bitcoin and Ethereum.",
        link: "https://github.com/JasonLaux/bitcoin"
    },
    {   
        id: 3,
        img_url: "/tweet.jpg",
        heading: "Tweets Analyser",
        description: "This application analyzed what kind of topics people are interested in different regions of Great Melbourne Area." + 
        "Twitter data are harvested and categorized into 10 categories, which are entertainment, business, technology, gaming, music, sports, " +
        "politics, fashion, health and food.",
        link: "https://github.com/Liu233w/ccc-assignment2"
    },

];
export default function Project() {

    return (
        <>
            {/* <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}
        >
            <Container maxWidth="sm">
                <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                >
                Jiexin Liu
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Something short and leading about the collection below—its contents,
                the creator, etc. Make it short and sweet, but not too short so folks
                don&apos;t simply skip over it entirely.
                </Typography>
                <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
                >
                <Button variant="contained">Main call to action</Button>
                <Button variant="outlined">Secondary action</Button>
                </Stack>
            </Container>
            </Box> */}
            <Container sx={{py: 8}}>
            {/* End hero unit */}
            <Grid container spacing={4} direction="row" justifyContent="flex-start" alignItems="flex-start">
                {cards.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                    <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
                    >
                        <CardMedia
                            component="img"
                            image={card.img_url}
                            alt="random"
                            height="250px"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {card.heading}
                            </Typography>
                            <Typography>
                                {card.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={card.link}>View Project</Button>
                        </CardActions>
                    </Card>
                </Grid>
                ))}
            </Grid>
            </Container>
        </>
    )
};