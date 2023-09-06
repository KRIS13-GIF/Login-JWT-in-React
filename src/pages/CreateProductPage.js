import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CreateProduct = () => {

    const { id } = useParams();

    const [formData, setFormData] = useState({
        serialNo: "",
        brand: "",
        template: "",
        description: "",
        notes: "",
        password: "",
        fullAddress: "",
        telephoneNumber: "",
        fiscalCode: "",
        vatNumber: "",
        pec: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(
                `http://localhost:5004/api/v1/user/create/${id}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setFormData({
                serialNo: "",
                brand: "",
                template: "",
                description: "",
                notes: "",
                password: "",
                fullAddress: "",
                telephoneNumber: "",
                fiscalCode: "",
                vatNumber: "",
                pec: "",
            });

            // Handle the response as needed
            console.log("Product created:", response.data);
        } catch (error) {
            // Handle and display the error
            console.error("Error creating product:", error);
        }
    };

    return (
        <div>
            <h1>Create Product</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Serial Number:
                    <input
                        type="text"
                        name="serialNo"
                        value={formData.serialNo}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br /><br />
                <label>
                    Brand:
                    <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br /><br />
                <label>
                    Template:
                    <input
                        type="text"
                        name="template"
                        value={formData.template}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br /><br />
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br /><br />
                <label>
                    Notes:
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                    />
                </label>
                <br /><br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br /><br />
                <label>
                    Full Address:
                    <input
                        type="text"
                        name="fullAddress"
                        value={formData.fullAddress}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br /><br />
                <label>
                    Telephone Number:
                    <input
                        type="tel"
                        name="telephoneNumber"
                        value={formData.telephoneNumber}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br /><br />
                <label>
                    Fiscal Code:
                    <input
                        type="text"
                        name="fiscalCode"
                        value={formData.fiscalCode}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br /><br />
                <label>
                    VAT Number:
                    <input
                        type="text"
                        name="vatNumber"
                        value={formData.vatNumber}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br /><br />
                <label>
                    PEC (Posta Elettronica Certificata):
                    <input
                        type="email"
                        name="pec"
                        value={formData.pec}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br /><br />
                <button type="submit">Create Product</button>
            </form>

        </div>
    );
};

export default CreateProduct;
