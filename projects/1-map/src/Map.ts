
interface Mappable {
    location: {
        lat:number,
        lng:number
    },
    markerContent(): string
}

export class Map {
    private googleMap: google.maps.Map;

    constructor(divId: string){
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable:Mappable): void {
        
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })
        marker.addListener('click', function(): void{
            const infowindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })
            infowindow.open(this.googleMap, marker)
        })
    }
}