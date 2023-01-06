import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const WizardCard = ({wizard}) => {

    return (
      <div >
        <Card key={wizard.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={wizard.img_url}
              alt="image of wizard"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {wizard.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {wizard.house_name}: {wizard.traits}  
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }

export default WizardCard
