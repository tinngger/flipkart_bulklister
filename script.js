document.addEventListener('DOMContentLoaded', function() {
    const productForm = document.getElementById('productForm');
    const addProductBtn = document.getElementById('addProductBtn');
    const reviewProductsBtn = document.getElementById('reviewProductsBtn');
    const productsContainer = document.getElementById('productsContainer');
    
    let products = JSON.parse(localStorage.getItem('flipkartProducts')) || [];
    
    // Render existing products from localStorage
    renderProducts();
    
    addProductBtn.addEventListener('click', function() {
        const product = {
            flipkartProductLink: document.getElementById('flipkartProductLink').value,
            sellerSkuId: document.getElementById('sellerSkuId').value,
            listingStatus: document.getElementById('listingStatus').value,
            mrp: document.getElementById('mrp').value,
            sellingPrice: document.getElementById('sellingPrice').value,
            fulfilmentBy: document.getElementById('fulfilmentBy').value,
            brand: document.getElementById('brand').value,
            size: document.getElementById('size').value,
            idealFor: document.getElementById('idealFor').value,
            color: document.getElementById('color').value,
            fabric: document.getElementById('fabric').value,
            mainImageUrl: document.getElementById('mainImageUrl').value,
            procurementType: document.getElementById('procurementType').value,
            procurementSla: document.getElementById('procurementSla').value,
            stock: document.getElementById('stock').value,
            shippingProvider: document.getElementById('shippingProvider').value,
            countryOfOrigin: document.getElementById('countryOfOrigin').value,
            sleeveLength: document.getElementById('sleeveLength').value,
            pattern: document.getElementById('pattern').value,
            topType: document.getElementById('topType').value,
            bottomType: document.getElementById('bottomType').value,
            occasion: document.getElementById('occasion').value,
            itemsIncluded: document.getElementById('itemsIncluded').value,
            otherImageUrl1: document.getElementById('otherImageUrl1').value,
            otherImageUrl2: document.getElementById('otherImageUrl2').value,
            description: document.getElementById('description').value,
            searchKeywords: document.getElementById('searchKeywords').value,
            timestamp: new Date().toISOString()
        };
        
        products.push(product);
        localStorage.setItem('flipkartProducts', JSON.stringify(products));
        
        renderProducts();
        productForm.reset();
    });
    
    reviewProductsBtn.addEventListener('click', function() {
        if (products.length === 0) {
            alert('No products added yet');
            return;
        }
        generateExcel();
    });
    
    function renderProducts() {
        productsContainer.innerHTML = '';
        
        if (products.length === 0) {
            productsContainer.innerHTML = '<p>No products added yet</p>';
            return;
        }
        
        products.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <h3>${product.brand} - ${product.sellerSkuId}</h3>
                <p><strong>Price:</strong> ₹${product.sellingPrice} (MRP: ₹${product.mrp})</p>
                <p><strong>Size:</strong> ${product.size} | <strong>Color:</strong> ${product.color}</p>
                <p><strong>Fabric:</strong> ${product.fabric}</p>
                <p><strong>Status:</strong> ${product.listingStatus}</p>
                <button class="delete-btn" data-index="${index}">×</button>
            `;
            
            productsContainer.appendChild(productCard);
        });
        
        // Add event listeners to delete buttons
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                products.splice(index, 1);
                localStorage.setItem('flipkartProducts', JSON.stringify(products));
                renderProducts();
            });
        });
    }
    
    function generateExcel() {
        // Create a new workbook
        const wb = XLSX.utils.book_new();
        
        // Prepare the data in the format matching the ethnic_set sheet
        const excelData = [
            [
                "Flipkart Serial Number",
                "Catalog QC Status",
                "QC Failed Reason (if any)",
                "Flipkart Product Link",
                "Product Data Status",
                "Disapproval Reason (if any)",
                "Seller SKU ID",
                "",
                "Listing Status",
                "MRP (INR)",
                "Your selling price (INR)",
                "Fullfilment by",
                "Procurement type",
                "Procurement SLA (DAY)",
                "Stock",
                "Shipping provider",
                "Local handling fee (INR)",
                "Zonal handling fee (INR)",
                "National handling fee (INR)",
                "Length (CM)",
                "Breadth (CM)",
                "Height (CM)",
                "Weight (KG)",
                "HSN",
                "Luxury Cess",
                "Country Of Origin",
                "Manufacturer Details",
                "Packer Details",
                "Importer Details",
                "Tax Code",
                "Minimum Order Quantity (MinOQ)",
                "Brand",
                "Size",
                "Size - Measuring Unit",
                "Style Code",
                "Items Included",
                "Ideal For",
                "Sleeve Length",
                "Pattern",
                "Color",
                "Brand Color",
                "Fabric",
                "Top Type",
                "Bottom Type",
                "Additional Garments",
                "Main Image URL",
                "Other Image URL 1",
                "Other Image URL 2",
                "Other Image URL 3",
                "Other Image URL 4",
                "Other Image URL 5",
                "Main Palette Image URL",
                "Group ID",
                "Occasion",
                "Ornamentation Type",
                "Top Fabric",
                "Bottom Fabric",
                "Secondary Color",
                "Kurta Style Type",
                "EAN/UPC",
                "EAN/UPC - Measuring Unit",
                "Fabric Care",
                "Lining Material",
                "Knit Type",
                "Neck",
                "Other Details",
                "Description",
                "Search Keywords",
                "Key Features",
                "Video URL",
                "Trend",
                "Pattern/Print Type",
                "Sleeve Style",
                "Detail Placement",
                "Surface Styling",
                "Dupatta Included",
                "Top Length",
                "Net Quantity",
                "Fit",
                "Style",
                "Lining",
                "Waistband",
                "Design",
                "Supplier Image"
            ],
            [
                "",
                "",
                "Fast Validate (Press CTRL+SHIFT+S)",
                "URL",
                "Dropdown",
                "Single - Text",
                "Text - limited to 64 characters (including spaces)",
                "",
                "Single - Text",
                "Single - Positive_integer",
                "Single - Positive_integer",
                "Single - Text",
                "Single - Text",
                "Single - Number",
                "Single - Non_negative_integer",
                "Single - Text",
                "Single - Non_negative_integer",
                "Single - Non_negative_integer",
                "Single - Non_negative_integer",
                "Single - Decimal",
                "Single - Decimal",
                "Single - Decimal",
                "Single - Decimal",
                "Single - Text",
                "Single - Decimal",
                "Single - Text",
                "Single - Long_text",
                "Single - Long_text",
                "Single - Long_text",
                "Single - Text",
                "Single - Positive_integer",
                "Single - Text",
                "SINGLE - TEXT",
                "Single - Text",
                "Single - Text",
                "Multi - Text",
                "SINGLE - TEXT",
                "SINGLE - TEXT",
                "SINGLE - TEXT",
                "MULTI - TEXT",
                "MULTI - TEXT",
                "MULTI - TEXT",
                "SINGLE - TEXT",
                "SINGLE - TEXT",
                "Multi - Text",
                "URL",
                "URL",
                "URL",
                "URL",
                "URL",
                "URL",
                "URL",
                "Single - Text",
                "MULTI - TEXT",
                "MULTI - TEXT",
                "MULTI - TEXT",
                "MULTI - TEXT",
                "MULTI - TEXT",
                "SINGLE - TEXT",
                "Multi - Numeric_string",
                "Single - Text",
                "Multi - Text",
                "Multi - Text",
                "Multi - Text",
                "SINGLE - TEXT",
                "Multi - Text",
                "Single - Text",
                "Multi - Text",
                "Multi - Text",
                "Single - Text",
                "MULTI - TEXT",
                "MULTI - TEXT",
                "SINGLE - TEXT",
                "MULTI - TEXT",
                "MULTI - TEXT",
                "Single - Boolean",
                "SINGLE - TEXT",
                "Single - Text",
                "SINGLE - TEXT",
                "MULTI - TEXT",
                "SINGLE - BOOLEAN",
                "MULTI - TEXT",
                "MULTI - TEXT",
                "SINGLE - TEXT"
            ]
        ];
        
        // Add product data
        products.forEach(product => {
            excelData.push([
                "", // Flipkart Serial Number
                "", // Catalog QC Status
                "", // QC Failed Reason (if any)
                product.flipkartProductLink,
                "", // Product Data Status
                "", // Disapproval Reason (if any)
                product.sellerSkuId,
                "", // Empty column
                product.listingStatus,
                product.mrp,
                product.sellingPrice,
                product.fulfilmentBy,
                product.procurementType,
                product.procurementSla,
                product.stock,
                product.shippingProvider,
                "", // Local handling fee (INR)
                "", // Zonal handling fee (INR)
                "", // National handling fee (INR)
                "", // Length (CM)
                "", // Breadth (CM)
                "", // Height (CM)
                "", // Weight (KG)
                "", // HSN
                "", // Luxury Cess
                product.countryOfOrigin,
                "", // Manufacturer Details
                "", // Packer Details
                "", // Importer Details
                "", // Tax Code
                "", // Minimum Order Quantity (MinOQ)
                product.brand,
                product.size,
                "[L]", // Size - Measuring Unit
                "", // Style Code
                product.itemsIncluded,
                product.idealFor,
                product.sleeveLength,
                product.pattern,
                product.color,
                "", // Brand Color
                product.fabric,
                product.topType,
                product.bottomType,
                "", // Additional Garments
                product.mainImageUrl,
                product.otherImageUrl1,
                product.otherImageUrl2,
                "", // Other Image URL 3
                "", // Other Image URL 4
                "", // Other Image URL 5
                "", // Main Palette Image URL
                "", // Group ID
                product.occasion,
                "", // Ornamentation Type
                "", // Top Fabric
                "", // Bottom Fabric
                "", // Secondary Color
                "", // Kurta Style Type
                "", // EAN/UPC
                "", // EAN/UPC - Measuring Unit
                "", // Fabric Care
                "", // Lining Material
                "", // Knit Type
                "", // Neck
                "", // Other Details
                product.description,
                product.searchKeywords,
                "", // Key Features
                "", // Video URL
                "", // Trend
                "", // Pattern/Print Type
                "", // Sleeve Style
                "", // Detail Placement
                "", // Surface Styling
                "", // Dupatta Included
                "", // Top Length
                "", // Net Quantity
                "", // Fit
                "", // Style
                "", // Lining
                "", // Waistband
                "", // Design
                ""  // Supplier Image
            ]);
        });
        
        // Create a worksheet
        const ws = XLSX.utils.aoa_to_sheet(excelData);
        
        // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(wb, ws, "ethnic_set");
        
        // Generate Excel file and download it
        XLSX.writeFile(wb, "Flipkart_Bulk_Listing.xlsx");
    }
});
