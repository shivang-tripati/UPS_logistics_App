type Customer = {
    email: string;
    name: string;
};

type CustomerList = {
    name: ID;
    value: Customer;
};

type TrackingItems = {
    customer_id: String;
    customer: Customer;
    items: Items[];
};

type Item = {
    item_id: Int;
    name: String;
    price: Float;
    quantity: Int;
}

type OrderResponse = {
    value: Order;
}

type CustomerResponse = {
    name: ID;
    value: Customer;
}

type Order = {
    carrier: string;
    createdAt: Date;
    shippingCost: Int;
    trackingId: string;
    Address: string;
    City: string;
    Lat: Float;
    Lng: Float;
    trackingItems: TrackingItems;
}