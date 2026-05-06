import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_BASE_URL } from "../config/api";

export default function Success() {
    const [params] = useSearchParams();
    const paymentId = params.get("payment_id");

    const [status, setStatus] = useState("loading");

    useEffect(() => {
        if (!paymentId) return;

        fetch(`${API_BASE_URL}/payments/status/${paymentId}/`)
            .then(res => res.json())
            .then(data => setStatus(data.status));
    }, [paymentId]);

    return (
        <div>
            {status === "loading" && "Verificando pago..."}
            {status === "approved" && "✔ Inscripción confirmada"}
            {status === "not_found" && "Pago no encontrado"}
        </div>
    );
}