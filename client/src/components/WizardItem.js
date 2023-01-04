import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const WizardItem = ({wizard: {id, name, img_url, house_name, traits}}) =>
{
  return (
    <div>
    <Card key={id} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img_url}
          alt="image of meal"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {house_name}: {traits}  
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

export default WizardItem;