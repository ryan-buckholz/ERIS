import MapSearchBarComponent from './MapSearchBarComponent'
import MapComponent from './MapComponent'

function MapSearchComponent() {
    return (
        <div>
            <MapSearchBarComponent />
            <div class="card border-0">
                <MapComponent />
            </div>
        </div>
    )
}

export default MapSearchComponent
