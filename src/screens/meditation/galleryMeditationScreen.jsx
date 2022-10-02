import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Carousel from 'react-native-snap-carousel';

export const GalleryMeditationScreen = () => {
  return (
    <SafeAreaView>
        <View>
        <Text>galleryMeditationScreen</Text>
        <View style={{ height: 80 }}>
          <Carousel 
              ref={hola}
              data={ arrayWeeks }
              renderItem={ (item) => 
                  <Text style={[style.carouselitem, (actualIndex+1 == item.item) ? style.activeItem : style.inactiveItem]} >{item.item}</Text>
              }
              sliderWidth={ width }
              itemWidth={ 50 }
              enableSnap={ true }
              inactiveSlideScale={1}
              activeSlideAlignment={'center'}
              inactiveSlideOpacity={0.3}
              activeAnimationType={'spring'}
              useScrollView={true}
              onBeforeSnapToItem={ item => updateGallery(item)}
              slideStyle={style.slideStyle}
              firstItem={weekActual-1}
              lockScrollWhileSnapping={true}
          /> 
      </View>
        </View>
    </SafeAreaView>
  )
}
